import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { RealisationsData } from '../../../data/RealisationsData'
import Tag from '../../../components/Tag/Tag'
import Modal from '../../../components/Modal/Modal'
import './Realisations.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Realisations() {
    const [hoverStates, setHoverStates] = useState(
        Array(RealisationsData.length).fill(false)
    )
    const updatedHoverStates = [...hoverStates]

    const [isModalOpen, setIsModalOpen] = useState(
        Array(RealisationsData.length).fill(false)
    )
    const updatedIsModalOpen = [...isModalOpen]

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
                            className={
                                updatedHoverStates[index] === true
                                    ? 'work__image--transparent'
                                    : 'work__image'
                            }
                            onMouseEnter={() => {
                                updatedHoverStates[index] = true
                                setHoverStates(updatedHoverStates)
                            }}
                            onMouseLeave={() => {
                                updatedHoverStates[index] = false
                                setHoverStates(updatedHoverStates)
                            }}
                            onClick={() => {
                                updatedIsModalOpen[index] = true
                                setIsModalOpen(updatedIsModalOpen)
                            }}
                        />
                        {isModalOpen[index] && (
                            <Modal
                                title={work.title}
                                tags={work.tags.map((tag, index) => (
                                    <Tag
                                        key={`${tag}-${index}`}
                                        tag={tag}
                                    />
                                ))}
                                description={work.description}
                                image={work.image}
                                onClose={() => {
                                    updatedIsModalOpen[index] = false
                                    setIsModalOpen(updatedIsModalOpen)
                                }}
                            />
                        )}

                        {hoverStates[index] && (
                            <div className="infoSlideBox">
                                <h3 className="infoSlideBox__title">
                                    {work.title}
                                </h3>

                                <div className="infoSlideBox__tags">
                                    {work.tags.map((tag, index) => (
                                        <Tag
                                            key={`${tag}-${index}`}
                                            tag={tag}
                                        />
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
