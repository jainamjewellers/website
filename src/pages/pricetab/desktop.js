import PriceWidget from '../components/price/price'
import { useState, useEffect } from 'react'
import { getBasePrice, getPortalPrices } from '../../actions/pricetable'
import styles from './desktop.module.css'
import _ from "lodash";

export default function PriceTab(props) {
   
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
    const ButtonGroup = () => {
        const [showButtonGroup, showButton] = useState(false)
        const [quantity, setQuantity] = useState(0)
        return(
            
            <div className={styles.button_group}>
                {
                    (quantity>=1) ?
                    <div className="button">
                        <button onClick={()=>{setQuantity(quantity-1)}} className={styles.button_minus}>-</button>
                        <button className={styles.quantity}>{quantity}</button>
                        <button onClick={()=>{(quantity<5)&&setQuantity(quantity+1)}} className={styles.button_plus}>+</button>
                    </div>
                    :
                    <button className={styles.add_button} onClick={()=>{showButton(true);setQuantity(quantity+1)}}>
                        {`Add`}
                    </button>

                }
            </div>
        )
    }
    return (
        <div>
            {/* <PriceWidget /> */}
            <table style={{ backgroundColor: "white" }}>
                <thead>
                    <tr>
                        <th> </th>
                        <th>99.50%</th>
                        <th>Gold Coin Price</th>
                        <th>99.90%</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    {priceObj && priceObj.length > 0 && priceObj.map((e, i) => {
                        return (
                            <tr>
                                <td><ButtonGroup/></td>
                                <td>{e.val2}</td>
                                <td>{e.label}</td>
                                <td>{e.val1}</td>
                                <td><ButtonGroup/></td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
        </div>
    )
}