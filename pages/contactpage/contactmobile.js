import styles from './contactus.module.css'
import accordion from './accordion.module.css'
import { useEffect, useState } from 'react'
import SimpleMap from './map'

export default function ContactMobile(props) {
    useEffect(() => {

    }, [])
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

    const Accordion = (props) => {
        const [isopen, open] = useState(false)
        return (
            <div className={`${accordion.wrapper} `}>
                <div onClick={()=>open(!isopen)} className={accordion.title}>
                    <span>{props.title}</span>{isopen?<span className={accordion.arrow}>▲</span>:<span className={accordion.arrow}>▼</span>}
                </div>
                {
                    <div className={`${isopen?accordion.content:accordion.content_hide} add-button-animation`}>
                        {props.children}
                    </div>
                }
            </div>
        )
    }
    return (
        <div>
            <div className={styles.main_contactus_wrapper}>
                <div className={styles.heading}>Getting in touch is easy!</div>
                <div className={styles.col_flex_wrapper}>
                    <div className={styles.map_section}>
                        {/* <SimpleMap/> */}
                        <div className={styles.map_section_heading}>Find us here</div>
                        <iframe allowFullScreen="" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.5022301860713!2d72.82839851489919!3d18.95341458715845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf5cbadc4d69%3A0x861d1967b93e067e!2sJainam%20Jewellers!5e0!3m2!1sen!2sin!4v1621784029012!5m2!1sen!2sin" loading="lazy"></iframe>
                    </div>
                    <div className={styles.form_section}>
                        <div className={styles.form_section_heading}>Request a quote</div>
                        <form onSubmit={() => { console.log("Form submitted") }}>
                            <div className={styles.enter_name}>
                                <input
                                    placeholder="Full Name"
                                    onChange={handleNameChange}
                                />
                            </div>
                            <div>
                                <input
                                    placeholder="Email"
                                    onChange={handleEmail}
                                />
                            </div>
                            <div>
                                <input
                                    placeholder="Phone Number"
                                    onChange={handleMob}
                                />
                            </div>
                            <div>
                                <textarea
                                    id="story"
                                    name="story"
                                    rows="5"
                                    placeholder="It was a dark and stormy night..."
                                    onChange={handleMessage}
                                />
                            </div>
                            <button className={styles.submit_button} type="submit">SEND</button>
                        </form>
                    </div>
                    <div className={styles.info_section}>
                        <div className={styles.info_section_heading}>FAQ</div>
                        <div className={styles.info_section_element}>
                            <Accordion
                            title={`HOW TO BUY?`}
                            >
                                {"GIVE ME MONEY"}
                            </Accordion>
                        </div>
                        <div className={styles.info_section_element}>
                            <Accordion
                            title={`HOW MUCH MONEY?`}
                            >
                                {"A SHITLOAD O' DOUGH"}
                            </Accordion>
                        </div>
                        <div className={styles.info_section_element}>
                            <Accordion
                            title={`WHEN?`}
                            >
                                {"RIGHT NOW BITCH."}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}