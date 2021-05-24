import PriceWidget from '../components/price/price'
import { useState, useEffect } from 'react'
import { getBasePrice, getPortalPrices } from '../../actions/pricetable'
import _ from "lodash";
import styles from './table.module.css'

export default function PriceTab(props) {

    const [labour, setLab] = useState(1)
    //const [price_array, setprice_array] = useState(1)
    const [priceObj, setPriceObj] = useState([{}])

    const fetchData = async (price_array) => {
        let x = parseInt(await getBasePrice(999))
        let y = parseInt(await getBasePrice(995))
        let labour = _.filter(price_array, { type: 'labour' }).map(v => v.title);
        let z = parseInt(labour[0])
        let formula = _.filter(price_array, { type: 'value' }).map(v => v.formula);
        let title = _.filter(price_array, { type: 'value' }).map(v => v.title);
        //console.log("labour_cost", labour, values)
        setLab(labour[0])
        var i;
        let new_array = []
        for (i = 0; i < formula.length; i++) {

            let base = x //999
            let val1 = eval(formula[i])

            base = y//995
            let val2 = eval(formula[i])

            let label = title[i]
            console.log("val1,label,val2", val1, label, val2)
            new_array.push({
                val1: val1.toFixed(2),
                label: label,
                val2: val2.toFixed(2)
            })

        }
        //console.log("new_array", new_array)
        setPriceObj(new_array)

    }
    useEffect(async () => {
        let price_array = await getPortalPrices()
        props.setRows(price_array.length)
        console.log("rows SET")
        await fetchData(price_array)

        var myVar = setInterval(
            function () {
                fetchData(price_array)
            }, 3000);

    }, [])
    return (
        <div className={styles.main_table_wrapper}>
            <div className={styles.table_head}>
                <div className={styles.help_995} onClick={window.open("https://www.livemint.com/market/commodities/understanding-the-different-measures-of-purity-of-gold-11572343027713.html")}>99.50%</div>
                <div>Gold Coin Price</div>
                <div className={styles.help_995} onClick={window.open("https://www.livemint.com/market/commodities/understanding-the-different-measures-of-purity-of-gold-11572343027713.html")}>99.90%</div>
            </div>
            {priceObj && priceObj.length > 0 && priceObj.map((e, i) => {
                return (<>
                    {(i==0)&&<div className={styles.table_line}></div>}
                    <div className={styles.table_row} key={i}>
                        <div>{e.val2}</div>
                        <div>{e.label}</div>
                        <div>{e.val1}</div>
                    </div>
                    <div className={styles.table_line}></div>
                </>)
            })
            }
        </div>
    )
}