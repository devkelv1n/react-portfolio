import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef ()

    useEffect(() => {
        setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm('service_s3er376', 'template_m71eprg', refForm.current, 'DyyFW9gSB2yRDcJzw')
            .then(
                () => {
                alert('Message successfully sent!')
                window.location.reload(false)
                },
                () => {
                alert('Failed to send the message, please try again')
                }
            )
    }
    
    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters 
                         letterClass={letterClass}
                         strArray={"Contact Me".split("")}
                         idx={15}
                        />
                    </h1>
                    <p>
                        Please leave a message below
                    </p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeholder="Name" required/>
                                </li>
                                <li className="half">
                                    <input type="email" name="email" placeholder="Email" required/>
                                </li>
                                <li>
                                    <input type="text" name="subject" placeholder="Subject" required/>
                                </li>
                                <li>
                                    <textarea placeholder="Message" name="message" required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map" >
                    Kelvin Wong,
                    <br/>
                    Malaysia,
                    <br/>
                    Jalan Changkat, 43000 Kajang <br/>
                    Selangor <br/>
                    <br/>
                    <span>devkelvin@hotmail.com</span>
                </div>
                <div className="map-wrap">
                    <MapContainer center={[2.9899102608990358, 101.7925676814049]} zoom={20}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[2.9899102608990358, 101.7925676814049]}>
                            <Popup font-size="2.08333em">Kelvin lives here, let's meet up and grab a cup of coffee! :D</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman'/>
        </>
    )
}

export default Contact