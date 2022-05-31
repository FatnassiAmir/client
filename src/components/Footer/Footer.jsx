import { AlternateEmail, Facebook, LinkedIn } from '@material-ui/icons'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="social-contact-items">
                <div className="social-contact-item">
                    <AlternateEmail />
                </div>
                <div className="social-contact-item">
                    <LinkedIn />
                </div>
                <div className="social-contact-item">
                    <Facebook />
                </div>
            </div>
        </div>
    )
}

export default Footer
