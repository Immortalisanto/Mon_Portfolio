import './Citations.scss'
import { CitationsData } from '../../../data/CitationsData'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

export default function Citations() {
    return (
        <section className="citations">
            <Swiper
                className="citations__slide"
                modules={[Pagination, Autoplay]}
                loop={true}
                speed={2000}
                autoplay={{ delay: 6000 }}
                pagination={{ clickable: true }}>
                {CitationsData.map((citation) => (
                    <SwiperSlide
                        key={`${citation.index}-${citation.quote
                            .slice(0, 10)
                            .replaceAll(' ', '&')}`}>
                        <figure className="quoteBox">
                            <blockquote className="quoteBox__quote">
                                {citation.quote}
                            </blockquote>
                            <figcaption className="quoteBox__author">
                                {citation.author}
                            </figcaption>
                        </figure>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}
