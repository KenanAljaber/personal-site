const WelcomeTxt = ({ welcomeText, paragrph }) => {
    return (
        <div className="welcomeTxt-container">

            <h1 className="welcome-welcomeText">{welcomeText}</h1>
            <p className="welcome-p"> {paragrph}</p>


        </div>

    );
}

WelcomeTxt.defaultProps = {
    welcomeText: "Welcome to my Playground",
    paragrph: "Hi Everyone!, my name is Kenan Aljaber and this is my playground," +
        "check some of my projects. If you like what you see don’t hesitate to contact me, I’ll be glad to help you"
};

export default WelcomeTxt;