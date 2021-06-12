import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import classes from './HomeCarousel.module.css'
import { getCarouselImages } from '../../actions/homepage'
import { useEffect, useState } from 'react'

export default function HomeCarousel(props) {

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
        <div className={classes.homepage_background_carousel}>
            <Carousel
                additionalTransfrom={0}
                arrows={false}
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
                        items: 1,
                        partialVisibilityGutter: 0
                    }
                }}
                customTransition="transform 600ms ease-in-out"
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                {images && images.length > 0 && images.map((element, index) => {
                    return (
                        <img
                        key={index}
                        src={`https://portal.jainamjewellers.in/carousel/${element.img}`}
                        alt={`Carousel Image ${index}`}
                        />
                    )

                })}
            </Carousel>

        </div>
    )
}