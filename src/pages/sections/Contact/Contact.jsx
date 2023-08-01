import './Contact.scss'
import Button from '../../../components/Button/Button'
import { useState } from 'react'
import axios from 'axios'

export default function Contact() {
    const [nameData, setNameData] = useState('')
    const [firstNameData, setFirstNameData] = useState('')
    const [emailData, setEmailData] = useState('')
    const [numberData, setNumberData] = useState('')
    const [subjectData, setSubjectData] = useState('')
    const [messageData, setMessageData] = useState('')
    const [isChecked, setIsChecked] = useState(false)
    const [isMessageSent, setIsMessageSent] = useState(false)

    const sendEmail = async (e) => {
        e.preventDefault()

        const data = {
            nameData,
            firstNameData,
            emailData,
            numberData,
            subjectData,
            messageData,
        }

        try {
            // eslint-disable-next-line no-unused-vars
            const response = await axios.post(
                'http://api.tur-anthony.fr/api/form/sendEmail',
                data
            )
            setNameData('')
            setFirstNameData('')
            setEmailData('')
            setNumberData('')
            setSubjectData('')
            setMessageData('')
            setIsMessageSent(true)
        } catch (error) {
            console.log(error)
        }
    }

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
            <form
                className="contact__form"
                onSubmit={sendEmail}>
                {isMessageSent ? (
                    <div className="contact__form__messageSent">
                        <p>Merci !</p>
                        <p>Votre message a bien été envoyé.</p>
                        <p>Je vous recontacterais dans les meilleurs délais.</p>
                    </div>
                ) : (
                    <div className="contact__form__box">
                        <div className="displayFlexFourBubbles">
                            <div className="displayFlexFourBubbles__displayFlexTwoBubbles">
                                <input
                                    className="form__bubbleForm"
                                    type="text"
                                    placeholder="Nom *"
                                    value={nameData}
                                    aria-label="Saisir votre nom (obligatoire)"
                                    onChange={(e) =>
                                        setNameData(e.target.value)
                                    }
                                    required></input>
                                <input
                                    className="form__bubbleForm"
                                    type="text"
                                    placeholder="Prénom"
                                    value={firstNameData}
                                    aria-label="Saisir votre prénom"
                                    onChange={(e) =>
                                        setFirstNameData(e.target.value)
                                    }></input>
                            </div>
                            <div className="displayFlexFourBubbles__displayFlexTwoBubbles">
                                <input
                                    className="form__bubbleForm"
                                    type="email"
                                    placeholder="Adresse email *"
                                    value={emailData}
                                    aria-label="Saisir votre adresse email (obligatoire)"
                                    onChange={(e) =>
                                        setEmailData(e.target.value)
                                    }
                                    required></input>
                                <input
                                    className="form__bubbleForm"
                                    type="tel"
                                    placeholder="Téléphone"
                                    value={numberData}
                                    aria-label="Saisir votre numéro de téléphone"
                                    onChange={(e) =>
                                        setNumberData(e.target.value)
                                    }></input>
                            </div>
                        </div>
                        <input
                            className="form__bubbleForm form__bubbleForm--largeWidth"
                            type="text"
                            placeholder="Sujet *"
                            value={subjectData}
                            aria-label="Saisir le sujet de votre message (obligatoire)"
                            onChange={(e) => setSubjectData(e.target.value)}
                            required></input>
                        <textarea
                            className="form__bubbleForm form__bubbleForm--largeBox"
                            type="text"
                            placeholder="Votre message *"
                            value={messageData}
                            aria-label="Saisir votre message (obligatoire)"
                            onChange={(e) => setMessageData(e.target.value)}
                            required></textarea>
                        <div className="form__checkPersonalData">
                            <input
                                className="form__checkPersonalData__checkbox"
                                type="checkbox"
                                value={isChecked}
                                aria-label="Accepter que vos données personnelles soient utilisées pour vous recontacter (obligatoire)"
                                onChange={(e) => setIsChecked(e.target.checked)}
                                required></input>
                            <p className="form__checkPersonalData__text">
                                En soumettant ce formulaire, j'accepte que mes
                                données personnelles soient utilisées pour me
                                recontacter. Aucun autre traitement ne sera
                                effectué avec mes informations. Pour connaître
                                et exercer vos droits, veuillez consultez la
                                Politique de confidentialité.
                            </p>
                        </div>
                        <div className="form__submit">
                            <Button text="Envoyer" />
                        </div>
                    </div>
                )}
            </form>
        </section>
    )
}
