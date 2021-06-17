import styles from './contactus.module.css'
import accordion from './accordion.module.css'
import { useEffect, useState } from 'react'
import SimpleMap from './map'
import TextField from '@material-ui/core/TextField';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

export default function Contact(props) {
    useEffect(() => {

    }, [])

    const [isopen, open] = useState(false)
    const [expanded, exPand] = useState(false)

    const [fullname, setName] = useState("")
    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const [email, setEmail] = useState("")
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const [mob, setMob] = useState("")
    const handleMob = (e) => {
        setMob(e.target.value)
    }

    const [message, setMessage] = useState("")
    const handleMessage = (e) => {
        setMessage(e.target.value)
    }

    const [selectedValue, selectValue] = useState("")
    const handleRadioChange = (e) => {
        selectValue(e.target.value)
    }

    const [options, setOptions] = useState([])
    const handleCheckBox = async (e) => {
        console.log(e.target.value)
        //let arr = options
        let arr = ((localStorage.getItem("options") != null) ? JSON.parse(localStorage.getItem("options")) : []);
        if (arr.includes(e.target.value)) {
            arr = arr.filter(element => element != e.target.value)
            console.log("removed")
        } else {
            arr.push(e.target.value)
            console.log("put")

        }
        await setOptions(arr)
        console.log(arr)
        localStorage.setItem("options", JSON.stringify(arr));

    }
    const ischecked = (val) => {
        return options.includes(val)
    }

    /* const Accordion = (props) => {

        return (
            <div className={`${accordion.wrapper} `}>
                <div onClick={() => open(!isopen)} className={accordion.title}>
                    {isopen ? <div className={`${accordion.arrow} ${accordion.up}`}>{` `}</div> : <div className={`${accordion.arrow} ${accordion.down}`}>{` `}</div>} <span>{props.title}</span>
                </div>
                {
                    <div className={`${isopen ? accordion.content : accordion.content_hide} add-button-animation`}>
                        {props.children}
                    </div>
                }
            </div>
        )
    } */
    return (
        <div>
            <div className={styles.main_contactus_wrapper}>
                <div className={styles.map_section_heading}>We're here</div>
                <div className={styles.map_section_subheading}>Our door is always open for a cup of tea and conversation</div>

                <div className={styles.col_flex_wrapper}>
                    <div className={styles.map_section}>
                        {/* <SimpleMap/> */}
                        <iframe allowFullScreen="" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.5022301860713!2d72.82839851489919!3d18.95341458715845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf5cbadc4d69%3A0x861d1967b93e067e!2sJainam%20Jewellers!5e0!3m2!1sen!2sin!4v1621784029012!5m2!1sen!2sin" loading="lazy"></iframe>

                    </div>
                    <div className={styles.address_Table}>

                        <div style={{ width: "500px" }}>
                            <div className={styles.address_row}>
                                <div className={styles.form_section_heading}>Head Office - <strong>MUMBAI</strong></div>
                            </div>
                            <div className={styles.address_row}>
                                <div>{`Building No. 18/A, Room No. 8, 4th Floor 1st Bhoiwada, Bhuleshwar Road , Mumbai, Maharashtra 400002`}</div>
                            </div>
                            <div className={`${styles.address_row} flexy_boi`}>
                                <div style={{ width: "50%" }}>
                                    <div>WhatsApp Us</div>
                                    <div><a href={`https://api.whatsapp.com/send/?phone=917045180822&text&app_absent=0`}>+91 7045180822</a></div>
                                </div>
                                <div style={{ width: "50%", borderLeft: "1px solid #000" }}>
                                    <div>Call Us</div>
                                    <div>+91 9321180822</div>
                                </div>
                            </div>
                            <div className={`${styles.address_last_row}`}>
                                <div>
                                    <div>Email Us</div>
                                    <div><a href="mailto:contact@jainamjewelers.in">contact@jainamjewelers.in</a></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={styles.info_section}>

                    <div className={styles.heading}></div>
                    <div className="flexy_boi">
                        <div style={{ marginLeft: "auto",paddingRight: "20px",  width:"500px" }}>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <div className={styles.info_section_heading}>Looking for direction?</div>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div style={{ textAlign: "left" }}>
                                        <p>
                                            Refer to directions provided by Google Maps to reach our office’s precise location.
                                    </p>
                                        <p>
                                            We are
                                    </p>
                                        <p>
                                            45-minutes drive away from JKL Airport
                                    </p>
                                        <p>
                                            5-minutes  drive away from ABC bus stop
                                            5-minutes drive away from ABC bus stop
                                    </p>
                                        <p>
                                            2-minutes walk away from XYZ bus stop
                                            2-minutes walk away from XYZ bus stop
                                    </p>
                                        <p>
                                            PS. Parking is a challenge in this area. Kindly plan your trip with your personal vehicle accordingly.
                                    </p>
                                    </div>
                                </AccordionDetails>
                            </Accordion>

                        </div>
                        <div style={{ marginRight: "auto",  width:"500px"  }}><Accordion expanded={expanded} onChange={() => { exPand(!expanded) }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <div className={styles.info_section_heading}>Getting in touch is easy!</div>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div>
                                    <TextField style={{ width: "300px" }} onChange={handleNameChange} fullwidth id="standard-basic" label="Full Name" />
                                </div>
                            </AccordionDetails>
                            <AccordionDetails>
                                <div>
                                    <TextField style={{ width: "300px" }} onChange={handleEmail} fullwidth id="standard-basic" label="Contact Number / Email" />
                                </div>
                            </AccordionDetails>
                            <AccordionDetails>
                                <div className="flexy_boi col">
                                    <div className={styles.form_label}>
                                        {`Are you a Buyer or Seller?`}
                                    </div>
                                    <FormControlLabel
                                        style={{ width: "200px" }}
                                        checked={selectedValue === 'buyer'}
                                        onChange={handleRadioChange}
                                        control={<Radio color="primary" />}
                                        value="buyer"
                                        label="Buyer"
                                        name="radio-button-demo"
                                        inputProps={{ 'aria-label': 'Buyer' }}
                                    />
                                    <FormControlLabel
                                        style={{ width: "200px" }}
                                        checked={selectedValue === 'seller'}
                                        onChange={handleRadioChange}
                                        control={<Radio color="primary" />}
                                        value="seller"
                                        label="Seller"
                                        name="radio-button-demo"
                                        inputProps={{ 'aria-label': 'Seller' }}
                                    />
                                </div>
                            </AccordionDetails>
                            <AccordionDetails>
                                <div className="flexy_boi col">
                                    <div className={styles.form_label}>
                                        {`Which products are you interested in?`}
                                    </div>
                                    {checkBoxOptions.map((e, i) => {
                                        return (
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={ischecked(e)}
                                                        onClick={handleCheckBox}
                                                        value={e}
                                                        color="primary"
                                                    />
                                                }
                                                label={e}
                                            />
                                        )
                                    })}
                                </div>
                            </AccordionDetails>
                            <Button
                                style={{ marginBottom: "30px" }}
                                variant="contained"
                                onClick={() => exPand(false)}
                            >
                                Submit
                        </Button>
                        </Accordion>
                        </div>
                    </div>
                    {/* 
                        <div onClick={()=>window.open("https://api.whatsapp.com/send/?phone=917045180822&text")} className={styles.info_section_element}>
                            <span><img className={styles.link_image} src="/img/whatsapp.svg"/></span>
                            <span className={styles.link_text}>{`Text on WhatsApp`}</span>
                        </div>
                        <div onClick={()=>window.open("https://www.indiamart.com/jainam-jewellers-mumbai")} className={styles.info_section_element}>
                            <span><img className={`${styles.link_image} ${styles.link_image_svg}`} src="/img/indiamartlogo.png"/></span>
                            <span className={styles.link_text}>{`Find us on Indiamart`}</span>
                        </div>
                        <div onClick={()=>window.open("https://www.facebook.com/jainamjewellersmumbai")} className={styles.info_section_element}>
                            <span><img className={`${styles.link_image} ${styles.facebook}`} src="/img/facebook.png"/></span>
                            <span className={styles.link_text}>{`Facebook Page`}</span>
                        </div>
                        <div onClick={()=>window.open("https://www.instagram.com/jainamjewellersmumbai")} className={styles.info_section_element}>
                            <span><img className={`${styles.link_image} ${styles.facebook}`} src="/img/instagram.png"/></span>
                            <span className={styles.link_text}>{`Like on instagram`}</span>
                        </div>
                        <div onClick={()=>window.open("https://www.linkedin.com/company/jainam-jewellers")} className={styles.info_section_element}>
                            <span><img className={`${styles.link_image} ${styles.facebook}`} src="/img/linkedin.png"/></span>
                            <span className={styles.link_text}>{`Follow us on LinkedIn`}</span>
                        </div>
                        <div onClick={()=>window.open("https://twitter.com/jainamjewelers")} className={styles.info_section_element}>
                            <span><img className={`${styles.link_image} ${styles.link_image_svg}`} src="/img/twitter.png"/></span>
                            <span className={styles.link_text}>{`Send a Tweet!`}</span>
                        </div> */}
                </div>
            </div>
        </div>
    )
}

const checkBoxOptions = [
    "Mangalsutra (22 Karat)",
    "Solid Nawabi Chains (22 Karat)",
    "Hollow Nawabi Chains (22 Karat)",
    "Hand-made Chains (22 Karat)",
    "Rudraksh Chains (22 Karat)",
    "Tulshi Chains (22 Karat)",
    "Bracelets",
    "Gold Coins (24 Karat)",
    "Evaluating or Selling ornaments"
]