import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { RealisationsData } from '../../../data/RealisationsData'
import './Realisations.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Realisations() {
    const [hoverStates, setHoverStates] = useState(
        Array(RealisationsData.length).fill(false)
    )

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
                autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
                pagination={{ clickable: true }}
                slidesPerView={2}>
                {RealisationsData.map((work, index) => (
                    <SwiperSlide
                        className="work"
                        key={`${work.index}-${work.title
                            .slice(0, 10)
                            .replaceAll(' ', '&')}`}>
                        <img
                            src={work.image}
                            alt={work.title}
                            className="work__image"
                            onMouseEnter={() => {
                                const updatedHoverStates = [...hoverStates]
                                updatedHoverStates[index] = true
                                setHoverStates(updatedHoverStates)
                            }}
                            onMouseLeave={() => {
                                const updatedHoverStates = [...hoverStates]
                                updatedHoverStates[index] = false
                                setHoverStates(updatedHoverStates)
                            }}
                        />
                        {hoverStates[index] && (
                            <div>
                                <h3>{work.title}</h3>
                                <div>
                                    {work.tags.map((tag, index) => (
                                        <div key={`${tag}-${index}`}>{tag}</div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}
