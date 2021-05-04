import Head from 'next/head'
import styles from './Layout.module.css'
export default function Layout(props) {
    const { children } = props
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.main_header_wrapper}>
                <div className={styles.top_elements}>
                    <nav className={styles.navbar}>
                        <a className={""} href="#">
                            <img src="./img/logo.png" className={styles.jainam_logo} alt="..." />
                        </a>
                        <div className={styles.navbar_link_group}>
                            <div className={styles.navbar_link}>
                                <a className={styles.navbar_link_label} href="#">Home</a>
                            </div>
                            <div className={styles.navbar_link}>
                                <a className={styles.navbar_link_label} href="#">About</a>
                            </div>
                            <div className={styles.navbar_link}>
                                <a className={styles.navbar_link_label} href="#">Catalogue</a>
                            </div>
                            <div className={styles.navbar_link}>
                                <a className={styles.navbar_link_label} href="#">Blog</a>
                            </div>
                            <div className={styles.navbar_link}>
                                <a className={styles.navbar_link_label} href="#">Contact</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {children}
            <footer className={styles.footer_main_wrap}>
                <div>This is a footer</div>
            </footer>
        </>
    )
}