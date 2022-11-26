import "../styles/contact.css"
const Contact = () => {
    return ( 

<div className="contact-container">
    <div >
    <h1>Ready to connect with me? </h1>
    <div className="contact-formContainer">
        <h1>Let's connect!</h1>
        <div className="contact-form-input-container">
        <input className="input-name" type="text" placeholder="First name"/>
        <input className="input-name" type="text" placeholder="Last name"/><br/>
        <input className="input-email" type="text" placeholder="Email Address"/>
        <input className="input-message" type="text" placeholder="Type your message here..."/>
        <div style={{textAlign:"start"}}>
        <button >Get in touch</button>
        </div>
        
        </div>
    </div>
    </div>
</div>

     );
}
 
export default Contact;