import {useEffect} from "react";
import '../../assets/style/style.scss';

function Advertising () {
    useEffect(() => {
        document.title = 'Advertising'
    }, []);
    return (
        <div>
            <div className="adv_header">
                <h3>MARVEL CORPORATE INFORMATION</h3>
            </div>
            <div className="adv_desc">
                <h3>ADVERTISING & CUSTOM SOLUTIONS</h3>
                <p>With a portfolio of over 9,000 characters we ARE the comic industry leaders. Marvel Entertainment has the tools, creative staff and experience to create truly original programs that convey the essence of your brand's message and take consumers to a whole new world.</p> <br/><br/>
                <p>As the media landscape is forever changing and growing, Marvel is continuously on the forefront, creating new and innovative ways to share our partner's stories through our print, custom and digital vehicles.</p><br/><br/>
                <h4>For Questions on Marvel Partnerships</h4><br/><br/>
                <p>Are you a company or an agency interested in a Marvel partnership including Marvel Promotions, Custom Programs, or Marvel Print/Digital Advertising? If so, contact: advertising@marvel.com</p><br/><br/>
                <p>Review our policy regarding unsolicited creative ideas or suggestions pertaining to ongoing Marvel publishing, theatrical or animated content.</p>
            </div>
        </div>
    )
}

export default Advertising;