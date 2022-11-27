import myPhoto from "../assets/myPhoto.png"
import "../styles/about-me.css"
const AboutMe = () => {
    return ( 
<div className="aboutMe-Container">
        <img src={myPhoto}/>
        <div className="aboutMe-disc-container">
            <h1>Kenan Aljaber</h1>
            <p>Hi, I’m a Software developer, I'm so apassionate about programming and algorithms,
                I've been attending courses on Coursera platform so I can improve my skills,
                right now I'm participing in the Kruger Star program presented by the 
                company <a style={{textDecoration:"none",color:"blue"}} href="https://krugercorp.com/" target="_blank">Kruger CO</a>. 
            </p>
        </div>

</div>

     );
}
 
export default AboutMe;