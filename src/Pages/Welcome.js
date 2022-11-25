import WelcomeTxt from "../Components/WelcomeTxt";

const Welcome = ({welcomeText,paragrph}) => {
    return ( 
        <div>
            <WelcomeTxt welcomeText={welcomeText} paragrph={paragrph} />
        </div>

     );
}
 
export default Welcome;