import './Contact.scss'
import Button from '../../../components/Button/Button'

export default function Contact() {
    return (
        <section
            className="contact"
            id="contactAnchor">
            <h2 className="contact__title">Contactez-moi</h2>
            <p className="contact__text">
                Vous avez un projet en tête ou une opportunité à partager ?
                <br />
                Je serais ravi d'en discuter avec vous ! Je vous invite à me
                laisser un message en utilisant le formulaire de contact
                ci-dessous.
                <br />
                Je serai attentif à votre demande et nous pourrons explorer
                ensemble les possibilités qui s'offrent à nous.
            </p>
            <form className="contact__form">
                <div className="contact__form__box">
                    <div className="displayFlexFourBubbles">
                        <div className="displayFlexFourBubbles__displayFlexTwoBubbles">
                            <input
                                className="form__bubbleForm"
                                type="text"
                                placeholder="Nom *"
                                required></input>
                            <input
                                className="form__bubbleForm"
                                type="text"
                                placeholder="Prénom"></input>
                        </div>
                        <div className="displayFlexFourBubbles__displayFlexTwoBubbles">
                            <input
                                className="form__bubbleForm"
                                type="email"
                                placeholder="Adresse email *"
                                required></input>
                            <input
                                className="form__bubbleForm"
                                type="tel"
                                placeholder="Téléphone"></input>
                        </div>
                    </div>
                    <input
                        className="form__bubbleForm form__bubbleForm--largeWidth"
                        type="text"
                        placeholder="Sujet *"
                        required></input>
                    <textarea
                        className="form__bubbleForm form__bubbleForm--largeBox"
                        type="text"
                        placeholder="Votre message *"
                        required></textarea>
                    <div className="form__checkPersonalData">
                        <input
                            className="form__checkPersonalData__checkbox"
                            type="checkbox"
                            required></input>
                        <p className="form__checkPersonalData__text">
                            En soumettant ce formulaire, j'accepte que mes
                            données personnelles soient utilisées pour me
                            recontacter. Aucun autre traitement ne sera effectué
                            avec mes informations. Pour connaître et exercer vos
                            droits, veuillez consultez la Politique de
                            confidentialité.
                        </p>
                    </div>
                    <div className="form__submit">
                        <Button text="Envoyer" />
                    </div>
                </div>
            </form>
        </section>
    )
}
