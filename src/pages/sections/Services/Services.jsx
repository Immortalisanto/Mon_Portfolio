import './Services.scss'
import { ServicesData } from '../../../data/ServicesData'
import ServiceBox from '../../../components/ServiceBox/ServiceBox'
import Tag from '../../../components/Tag/Tag'

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
                            <Tag
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
