import Head from 'next/head'
import { useState, useEffect } from 'react'
import styles from './Layout.module.css'
export default function Layout(props) {
    const { children } = props
    
    const [hamburger, setHam] = useState(true);
    
    useEffect(() => {
        /* window.addEventListener('scroll', handleScroll) */
    }, [])
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Wholesale jewellery store that offers a variety of custom designs made to order."></meta>
            </Head>
            <div className={styles.layout_wrapper}>
                <div className={styles.main_header_wrapper}>
                    <div className={`${styles.top_elements}`}>
                        <nav className={`${styles.navbar} navbar`}>
                            {/* <a className={""} href="/">
                                <img src="./img/logo_dark.png" className={styles.jainam_logo} alt="..." />
                            </a> */}
                            <div className={styles.navbar_link_group}>
                                <div className={styles.navbar_link}>
                                    <a className={styles.navbar_link_label} href="/">Home</a>
                                </div>
                                <div className={styles.navbar_link}>
                                    <a className={styles.navbar_link_label} href="/about">About</a>
                                </div>
                                <div className={styles.navbar_link}>
                                    <a className={styles.navbar_link_label} href="/products">Products</a>
                                </div>
                                <div className={styles.navbar_link}>
                                    <a className={styles.navbar_link_label} href="/blog">Blog</a>
                                </div>
                                <div className={styles.navbar_link}>
                                    <a className={styles.navbar_link_label} href="/contact">Contact</a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                {children}
                <footer className={styles.footer_main_wrap}>
                    {/* <div className={styles.links_header}>SITE LINKS</div> */}
                    <div className={styles.footer_link_wrapper}>
                        {/* <div>
                        <div className={styles.footer_link_element}>LINK 11</div>
                    </div>
                    <div>
                        <div className={styles.footer_link_element}>LINK 12</div>
                    </div>
                    <div>
                        <div className={styles.footer_link_element}>LINK 13</div>
                    </div> */}
                        <div className={styles.socials_wrapper}>
                            <div onClick={() => window.open("https://api.whatsapp.com/send/?phone=917045180822&text")} className={styles.socials_element}>
                                <img
                                    src="/img/whatsapp_black.png"
                                    alt="WhatsApp Logo"
                                />
                            </div>
                            <div onClick={() => window.open("https://www.facebook.com/jainamjewellersmumbai")} className={styles.socials_element}>
                                <img
                                    src="/img/facebook_black.png"
                                    alt="Facebook Logo"
                                />
                            </div>
                            {/* <div onClick={()=>window.open("https://www.indiamart.com/jainam-jewellers-mumbai")} className={styles.socials_element}>
                            <img
                                src="/img/indiamartlogo_black.png"
                                alt="IndiaMart Logo"
                            />
                        </div> */}
                            <div onClick={() => window.open("https://www.instagram.com/jainamjewellersmumbai")} className={styles.socials_element}>
                                <img
                                    src="/img/instagram_black.png"
                                    alt="Instagram Logo"
                                />
                            </div>
                            <div onClick={() => window.open("https://www.linkedin.com/company/jainam-jewellers")} className={styles.socials_element}>
                                <img
                                    src="/img/linkedin_black.png"
                                    alt="LinkedIn Logo"
                                />
                            </div>
                            {/* <div onClick={()=>window.open("https://twitter.com/jainamjewelers")} className={styles.socials_element}>
                            <img
                                src="/img/twitter_black.png"
                                alt="Twitter Logo"
                            />
                        </div> */}
                        </div>
                    </div>

                    <div className={styles.terms_wrapper}>
                        <div>© 2021 Jainam Jewellers. All rights reserved.</div>
                    </div>
                </footer>
            </div>
        </>
    )
}