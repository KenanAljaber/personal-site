import myPhoto from "../assets/myPhoto.png"
import "../styles/about-me.css"
const AboutMe = () => {
    return ( 
<div className="aboutMe-Container">
        <img src={myPhoto}/>
        <div className="aboutMe-disc-container">
            <h1>Kenan Aljaber</h1>
            <p>Hi, I’m a Full-Stack Developer and Mechatronics Engineer, bla bla bla Hi,
                 I’m a Full-Stack Developer and Mechatronics Engineer, bla bla bla Hi,
                  I’m a Full-Stack Developer and Mechatronics Engineer,
                 bla bla bla Hi, I’m a Full-Stack Developer and Mechatronics Engineer, bla bla bla </p>
        </div>

</div>

     );
}
 
export default AboutMe;