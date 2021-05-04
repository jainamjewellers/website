import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import styles from './desktop.module.css'
import { useEffect, useState } from 'react'
import { getCarouselImages } from '../../../actions/homepage'


function WithStyles(props) {
    const { description, headline, image } = props;
    const style = {
        wrapper: { backgroundImage: `url(${image})` },
    }
    return (
        <div className={styles.wrapper} style={style.wrapper} >
            <div className={styles.content}>
                <div className={styles.headline}>{headline}</div>
                <div className={styles.description}>{description}</div>
            </div>
        </div>
    )
}

export default function Desktop(props) {
    const [images, setImages] = useState([])
    async function fetchdata() {
        let images = await getCarouselImages()
        setImages(images)
        /* console.log("images",images) */
    }
    useEffect(() => {
        fetchdata()
    }, [])
    return (
        <Carousel
            additionalTransfrom={0}
            arrows
            autoPlay
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
                desktop: {
                    breakpoint: {
                        max: 3000,
                        min: 1024
                    },
                    items: 3,
                    partialVisibilityGutter: 40
                },
                mobile: {
                    breakpoint: {
                        max: 464,
                        min: 0
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                },
                tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 464
                    },
                    items: 2,
                    partialVisibilityGutter: 30
                }
            }}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
        >
            {images.map((element, index) => {
                return (
                    <div key={index}>
                        {console.log(element)}
                    <WithStyles
                        description="Appending currency sign to a purchase form in your e-commerce site using plain JavaScript."
                        headline="w3js.com - web front-end studio"
                        image={`https://portal.jainamjewellers.in/carousel/${element.img}`}
                    /></div>
                )

            })}

        </Carousel>
    )
}