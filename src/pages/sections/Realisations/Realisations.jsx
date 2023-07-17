import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import './Realisations.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { RealisationsData } from '../../../data/RealisationsData'

export default function Realisations() {
    return (
        <section
            className="realisations"
            id="realisationsAnchor">
            <h2 className="realisations__title">Mes réalisations</h2>
            <Swiper
                className="realisations__slide"
                modules={[Pagination, Autoplay, Navigation]}
                speed={500}
                navigation
                autoplay={{ delay: 6000 }}
                pagination={{ clickable: true }}
                slidesPerView={2}>
                {RealisationsData.map((work) => (
                    <SwiperSlide
                        className="work"
                        key={`${work.index}-${work.title
                            .slice(0, 10)
                            .replaceAll(' ', '&')}`}>
                        <img
                            src={work.image}
                            alt={work.title}
                            className="work__image"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}
