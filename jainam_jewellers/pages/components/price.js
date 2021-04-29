import { useEffect, useState } from 'react'
import { getPrice, getPrice2 } from '../../actions/common'
import styles from './prices.module.css'
export default function PriceWidget() {
	const [priceObj, setPobj] = useState({})
	const [priceObj2, setPobj2] = useState({})
	const [price_10gm, setPrice] = useState(false)
	const [pcXau,setpcXau] =useState(false)
	const troy_ounce = 31.1035;
	useEffect(() => {
		setInterval(
			async function () {
				//let result = await getPrice()
				let result = await getPrice2()
				let price_per_10gm = 10 * (result.items[0].xauPrice) / troy_ounce
				setPrice(price_per_10gm.toFixed(2))
				setpcXau(result.items[0].pcXau.toFixed(4))
			}
			, 10000);
	}, [])

	return (
		<div>
			{price_10gm &&
				<div className={styles.main_wrapper}>
					<div className={styles.content_box}>
						<div className={styles.price_value}>{price_10gm}</div>
						<div className={styles.price_label}>{`INR per 10 grams`}</div>
					</div>
					{<div className={styles.content_box}>
						<div className={`${(pcXau>0)?styles.p_increase:styles.p_decrease}`}>{`${(pcXau>0)?`▲`:`▼`} ${pcXau} %`}</div>
						<div className={styles.price_label}>{`Percentage Change`}</div>
					</div>}
				</div>
			}
		</div>
	)
}

{/* {priceObj && priceObj.market &&
		<div className={styles.main_wrapper}>
			<div className={styles.main_wrapper}>{priceObj.market.pitches[0].buyPrices[0].limit}</div>
			<div className={styles.main_wrapper}>{priceObj.market.pitches[0].buyPrices[0].ouncesQuantity}</div>
			<div className={styles.main_wrapper}>{priceObj.market.pitches[0].buyPrices[0].ouncesLimit}</div>
			<div className={styles.main_wrapper}>{priceObj.market.pitches[0].buyPrices[0].value}</div>
			<div className={styles.main_wrapper}>{priceObj.market.pitches[0].buyPrices[0].limit}</div>
			<div className={styles.main_wrapper}>{priceObj.updateTimeString}</div>
		</div>
		} */}