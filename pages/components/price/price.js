import { useEffect, useState, useCallback, useMemo, useRef } from 'react'
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { getPrice, getPrice2, getPriceDirect } from '../../../actions/common'
import { getBasePrice } from '../../../actions/pricetable'
import styles from './prices.module.css'
import moment from "moment";
export default function PriceWidget() {
	const [priceObj, setPobj] = useState({})
	const [priceObj2, setPobj2] = useState({})
	const [date, setDate] = useState("")
	const [price_tengm, setPrice] = useState(0)
	const [delta_p, setDelta] = useState(0)
	const [pcXau, setpcXau] = useState(0)
	const [basePrice, setBase] = useState(0)
	const [color, setColor] = useState(0)
	const troy_ounce = 31.1035;

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
		fetchData()
		setInterval(fetchData, 1000);
	}, [])
	/* async function fetchData() {
		let result = await getPrice2()
		//let result = await getPriceDirect()
		//console.log("result",result)
		if (date != result.date) {
			setDate(moment(result.tsj).format('dddd, MMMM Do, YYYY h:mm:ss A'))
			var price_10gm = parseInt(localStorage.getItem("price"));
			let before_gst = 10 * (result.items[0].xauPrice) / troy_ounce
			let price_per_10gm = before_gst + (before_gst * 0.1075)
			let delta = price_10gm - price_per_10gm
			//console.log(price_10gm,price_per_10gm,delta,"price_tengm,price_per_10gm,delta")
			localStorage.setItem("price", price_per_10gm);
			if (delta != 0) {
				setDelta(delta.toFixed(2))
			}
			setPrice(price_per_10gm.toFixed(2))
			setpcXau(result.items[0].pcXau.toFixed(4))
		}
	} */

	async function fetchData() {
		let x = parseInt(await getBasePrice(999))
		setBase(x)
		let y = parseInt(localStorage.getItem("basePrice"))
		console.log(x, "-", y, "=", x - y)

		if ((x - y) > 0) {
			setColor("stonks")
		} else if ((x - y) < 0) {
			setColor("crash")
		} else {
			setColor("none")
		}

		localStorage.setItem("basePrice", x)
	}
	return (
		<div>
			{/* <WebSocketDemo /> */}
			{
				<div className={styles.main_wrapper}>
					{/* <div className={styles.price_content_box}>
						<div className={`${styles.current_price_value}`}>{`${numberString(price_tengm)}  ₹`}</div>
						<div className={styles.price_label}>{`(INR per 10 grams)`}</div>
					</div> */}
					<div className={styles.price_content_box}>
						<div className={`${styles.current_price_value} ${styles[color]}`}>{`${(basePrice.toString()).toLocaleString()}  ₹`}</div>
						<div className={styles.price_label}>{`(INR per 10 grams)`}</div>
					</div>
					{/* <div className={styles.content_box}>
						<div className={`${styles.price_value} ${(pcXau>0)?styles.p_increase:styles.p_decrease}`}>{`${(pcXau>0)?`▲`:`▼`} ${pcXau} %`}</div>
						<div className={styles.price_label}>{`Percentage Change`}</div>
					</div> */}
					{/* <div className={styles.delta_content_box}>
						<div className={`${styles.delta_price_value} ${(delta_p > 0) ? styles.p_increase : styles.p_decrease}`}>{`${(delta_p > 0) ? `▲` : `▼`} ${delta_p} ₹`}</div>
						<div className={styles.price_label}>{`Price Change`}</div>
					</div> */}
					{/* <div className="break"></div>
					<div className={styles.last_updated}>
						{`Last updated: ${date}`}
					</div> */}
				</div>
			}
		</div>
	)
}

/* export const WebSocketDemo = () => {
	//Public API that will echo messages sent to it back to the client
	const [socketUrl, setSocketUrl] = useState('ws://localhost:5000/ws/baseprice');
	const messageHistory = useRef([]);

	const {
		sendMessage,
		lastMessage,
		readyState,
	} = useWebSocket(socketUrl);

	messageHistory.current = useMemo(() =>
		messageHistory.current.concat(lastMessage), [lastMessage]);

	const handleClickChangeSocketUrl = useCallback(() =>
		setSocketUrl('ws://localhost:5000/ws/baseprice'), []);

	const handleClickSendMessage = useCallback(() =>
		sendMessage('Hello'), []);

	const connectionStatus = {
		[ReadyState.CONNECTING]: 'Connecting',
		[ReadyState.OPEN]: 'Open',
		[ReadyState.CLOSING]: 'Closing',
		[ReadyState.CLOSED]: 'Closed',
		[ReadyState.UNINSTANTIATED]: 'Uninstantiated',
	}[readyState];

	return (
		<div>
			<button
				onClick={handleClickChangeSocketUrl}
			>
				Click Me to change Socket Url
		</button>
			<button
				onClick={handleClickSendMessage}
				disabled={readyState !== ReadyState.OPEN}
			>
				Click Me to send 'Hello'
		</button>
			<span>The WebSocket is currently {connectionStatus}</span>
			{lastMessage ? <span>Last message: {lastMessage.data}</span> : null}
			<ul>
				{messageHistory.current.map((message, idx) => { if (message) return (<span key={idx}>{message.data}</span>) })}
			</ul>
		</div>
	);
}; */

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