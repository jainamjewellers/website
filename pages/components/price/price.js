import { useEffect, useState, useCallback, useMemo, useRef } from 'react'
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { getPrice, getPrice2, getPriceDirect } from '../../../actions/common'
import { getPortalPrices } from '../../../actions/pricetable'
import styles from './prices.module.css'
import _ from "lodash";
import moment from "moment";
export default function PriceWidget() {
	const [priceObj, setPobj] = useState(false)
	const [labor, setLabour] = useState({})
	const [base, setBase] = useState(0)
	const [color, setColor] = useState(0)

	const numberString = (number) => {
		return (String(number).replace(
			/^\d+/,
			number => [...number].map(
				(digit, index, digits) => (
					!index || (digits.length - index) % 3 ? '' : ','
				) + digit
			).join('')
		))
	}


	useEffect(async () => {
		let price_array = await getPortalPrices()
		console.log(price_array)

		let labour = _.filter(price_array, { type: 'labour' }).map(v => v.title);
		let z = parseInt(labour[0])
		setLabour(z)
		/* let formula = _.filter(price_array, { type: 'value' }).map(v => v.formula);
		console.log("formula",formula)
		let title = _.filter(price_array, { type: 'value' }).map(v => v.title);
		console.log("title",title) */
		let array = _.filter(price_array, { type: 'value' }).map(v => v);
		console.log("title", array)
		setPobj(array)




		fetchData()
		setInterval(fetchData, 1000);
	}, [])

	const fetchData = async () => {
		//let x = parseInt(await getBasePrice(999))
		let x = parseInt(await getPrice())
		setBase(x)
		let y = parseInt(localStorage.getItem("base"))
		//console.log(x, "-", y, "=", x - y)

		if ((x - y) > 0) {
			setColor("stonks")
		} else if ((x - y) < 0) {
			setColor("crash")
		} else {
			setColor("none")
		}

		localStorage.setItem("base", x)

		/* 
		for(let i=0;i<array.length;i++){
			
		} */
	}
	return (
		<div>
			{<div style={{ marginTop: "10px", display: "flex", flexDirection: "column" }} className={styles.main_wrapper_outer}>
				<h2>{`24 Karat Gold Bar (99.9%)`}</h2>
				<div className={styles.main_wrapper_inner}>
					<div className={styles.price_content_box}>
						<div className={`${styles.current_price_value} ${styles[color]}`}>{`₹ ${(base).toLocaleString()}`}</div>
						<div className={styles.price_label}>{`(per 10 grams)`}</div>
					</div>
				</div>
			</div>
			}
			{
				<div style={{ marginTop: "10px", display: "flex", flexDirection: "column" }} className={styles.main_wrapper_outer}>
					<h2>{`24 Karat Gold Coin (99.9%)`}</h2>
					<div className={styles.main_wrapper_inner}>
						{
							priceObj &&
							priceObj.map((element, index) => {
								if (element.short != "base") {
									return (
										<div key={index} className={styles.price_content_box}>
											<div className={`${styles.current_price_value} ${styles[color]}`}>{`₹ ${(eval(element.formula)).toLocaleString()}`}</div>
											<div className={styles.price_label}>{`(${element.title})`}</div>
										</div>
									)
								}
							})

						}
					</div>
				</div>
			}
		</div>
	)
}