import {useEffect} from "react";

function About () {
    useEffect(() => {
        document.title = 'About'
    }, []);
    return (
        <div>
            <div className="about_header">
                <h3>MARVEL CORPORATE INFORMATION</h3>
            </div>
            <div className="about_desc">
                <h3>COMPANY INFO AND CONTACT</h3>
                <p>Marvel Entertainment, LLC, a wholly-owned subsidiary of The Walt Disney Company, is one of the world's most prominent character-based entertainment companies, built on a proven library of more than 8,000 characters featured in a variety of media over seventy-five years. Marvel utilizes its character franchises in entertainment, licensing and publishing. For more information visit marvel.com. © 2023 MARVEL</p>
                <h4>Corporate Headquarters</h4>
                <p><span>Marvel Entertainment, LLC</span> <br/>1290 Avenue of the Americas <br/>
                    New York, NY 10104</p>
                <h4>Business Inquiries</h4>
                <p>For tech support, please visit the <a href="For tech support, please visit the Help Page.
General phone number, Marvel Entertainment, LLC: 212-576-4000">Help Page.</a> <br/>
                    General phone number, Marvel Entertainment, LLC: 212-576-4000</p>
                <h4>Consumer Inquiries</h4>
                <p>For FAQ's related to Marvel Comics and Marvel.com: Visit the <a href="For tech support, please visit the Help Page.
General phone number, Marvel Entertainment, LLC: 212-576-4000">Help Page.</a> <br/>
                    <span>Marvel.com, Marvel Comics app, and Marvel Digital Comics Unlimited Subscriptions:</span> <br/>
                    For any inquiries unresolved by the Help Page, please use the Contact Form <a href="For tech support, please visit the Help Page.
General phone number, Marvel Entertainment, LLC: 212-576-4000">here.</a></p>
                <p className='margin'><span>For Print Subscriptions: </span><br/>
                    Marvel Subscriptions <br/>
                    PO Box 727 <br/>
                    New Hyde Park, NY 11040 <br/>
                    TOLL FREE: 888-511-5480 <br/>
                    <a href="mailto:marvelsubs@midtowncomics.com">marvelsubs@midtowncomics.com</a></p>
                <p className='margin'><span>See also: </span><a href="http://subscriptions.marvel.com/faq.asp">Subscriptions FAQ</a></p>
                <h4>Media Relations</h4>
                <p>Contact <a href="mailto:Ms-comms@marvelstudios.com">Ms-comms@marvelstudios.com</a></p>
                <h2>MARVEL TERMS AND POLICIES</h2>
                <ul>
                    <li><a href="https://privacy.thewaltdisneycompany.com/en/">Marvel.com Privacy Policy</a></li>
                    <li><a href="https://disneytermsofuse.com/">Marvel.com Terms and Conditions</a></li>
                    <li><a href="https://www.marvel.com/corporate/marvel_unlimited_subscriber_agreement">Marvel Unlimited Subscriber Agreement</a></li>
                    <li><a href="https://www.marvel.com/corporate/insider_terms">Marvel Insider Terms of Use</a></li>
                </ul>
            </div>
        </div>
    )
}

export default About;