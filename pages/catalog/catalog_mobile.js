import styles from './catalog.module.css'

export default function AboutUs() {
    return (
        <div className={styles.aboutus_Wrapper}>
            <section>
                <h2>Our mission</h2>
                <p>This document provides a guide to help with the important task of choosing the correct Apple.</p>
            </section>
            <section>
                <h2>Our vision</h2>
                <p>We envision setting new dimensions to the jewelry industry in tune with the global market standards of quality, making each of our creations a unique work of art with a cherished story to tell the world.</p>
            </section>
        </div>
    )
}