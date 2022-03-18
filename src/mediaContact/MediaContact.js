import './mediaContact.css';
import mediaImage from '..//assets/media.svg';
import contactImage from '..//assets/contact.svg';

export default function(){
    return(
        <div className="media-contact-div">
            <div className="media-contact-wrapper">
                <div className="media-div">
                    <img src={mediaImage} className="media-image"></img>
                    <div className="media-content">
                        <div className="media-title">Media</div>
                        <div className="media-description"><a className='download-a' href='https://drive.google.com/drive/folders/1a6s5iZdMBySIpOKtSciioqbewA711hnA'>Download&nbsp;</a>our logos and brand <br/>photography for media use.</div>
                    </div>
                </div>
                <div className="contact-div">
                <img src={contactImage} className="contact-image"></img>
                    <div className="contact-content">
                        <div className="contact-title">Contact</div>
                        <div className="contact-description">For additional information contact us on &nbsp; <br/><a href='mailto:info@enterpriseleague.com' className='email-to'>info@enterpriseleague.com</a></div>
                    </div>
                </div>
            </div>
        </div>
    );
}