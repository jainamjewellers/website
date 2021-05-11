import PriceWidget from '../components/price/price'
import { useState, useEffect } from 'react'
import { getBasePrice, getPortalPrices } from '../../actions/pricetable'
import _ from "lodash";

export default function PriceTab(props) {
    const [base995, set995] = useState(1)
    const [base999, set999] = useState(1)
    const [labour, setLab] = useState(1)
    const [priceObj, setPriceObj] = useState([{}])
    const fetchData = async () => {
        let x = parseInt(await getBasePrice(999))
        let y = parseInt(await getBasePrice(995))
        let price_array = await getPortalPrices()
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
                val1: val1,
                label: label,
                val2: val2
            })

        }
        //console.log("new_array", new_array)
        setPriceObj(new_array)

    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div>
            {/* <PriceWidget /> */}
            <table style={{ backgroundColor: "white" }}>
                <thead>
                    <tr>
                        <th>99.50%</th>
                        <th>Gold Coin Price</th>
                        <th>99.90%</th>
                    </tr>
                </thead>
                <tbody>
                    {priceObj && priceObj.length > 0 && priceObj.map((e, i) => {
                        return (
                            <tr>
                                <td>{e.val2}</td>
                                <td>{e.label}</td>
                                <td>{e.val1}</td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
        </div>
    )
}