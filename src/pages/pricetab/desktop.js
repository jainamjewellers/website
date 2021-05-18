import { useState, useEffect } from 'react'
import styles from './desktop.module.css'
import Table from './table'
const ButtonGroup = () => {
    const [quantity, setQuantity] = useState(0)
    return (

        <div className={styles.button_group}>
            {
                (quantity >= 1) ?
                    <div className="button button-group-animation">
                        <button onClick={() => { setQuantity(quantity - 1) }} className={styles.button_minus}>-</button>
                        <button className={styles.quantity}>{quantity}</button>
                        <button onClick={() => { (quantity < 5) && setQuantity(quantity + 1) }} className={styles.button_plus}>+</button>
                    </div>
                    :
                    <button className={`add-button-animation ${styles.add_button}`} onClick={() => { setQuantity(quantity + 1) }}>
                        {`Add`}
                    </button>

            }
        </div>
    )
}



export default function PriceTab(props) {
    const [rows, setRows] = useState(2)
    return (
        <div className={styles.main_wrapper}>
            <div className={styles.table_wrapper}>
                <span style={{marginTop: "50px"}}>
                    {[...Array(rows-1)].map((e, i) => <ButtonGroup />)}
                </span>
                <span>
                    <Table
                    setRows={setRows}
                    />
                </span>
                <span style={{marginTop: "50px"}}>
                    {[...Array(rows-1)].map((e, i) => <ButtonGroup />)}
                </span>
            </div>
        </div>
    )
}