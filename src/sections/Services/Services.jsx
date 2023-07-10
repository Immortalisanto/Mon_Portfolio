import './Services.scss'
import { ServicesData } from '../../data/ServicesData'
import ServiceBox from '../../components/ServiceBox/ServiceBox'
import TagService from '../../components/ServiceBox/TagService/TagService'

export default function Services() {
    return (
        <section
            className="services"
            id="servicesAnchor">
            <h2 className="services__title">Mes services</h2>
            <div className="services__boxes">
                {ServicesData.map(({ title, description, tags, index }) => (
                    <ServiceBox
                        key={`${title}-${index}`}
                        title={title}
                        description={description}
                        tags={tags.map((tag, index) => (
                            <TagService
                                key={`${tag}-${index}`}
                                tag={tag}
                            />
                        ))}
                    />
                ))}
            </div>
        </section>
    )
}
