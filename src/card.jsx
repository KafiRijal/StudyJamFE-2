import { Github } from './App'
import { FrontendMentor } from './App'
import { Linkedin } from './App'
import { Twitter } from './App'
import { Instagram } from './App'
const Card = () => {
    const githubOnClick = () => {
        Github();
    };
    const feOnClick = () => {
        FrontendMentor();
    };
    const linkedinOnClick = () => {
        Linkedin();
    };
    const twitterOnClick = () => {
        Twitter();
    };
    const instagramOnClick = () => {
        Instagram();
    };
    return(
        <div className="container">
        <img className="image" src="/fotoDiri.jpeg" alt=""/>
        <h3 className="name">Kafi Rijal Rabbani Sopian</h3>
        <p className="location">Indonesia, Depok</p>
        <p className="ocupation">Front-end developer</p>
        <button className="button1" onClick={githubOnClick}>Github</button>
        <button className="button2" onClick={feOnClick}>Frontend Mentor</button>
        <button className="button3" onClick={linkedinOnClick}>Linkedin</button>
        <button className="button4" onClick={twitterOnClick}>Twitter</button>
        <button className="button5" onClick={instagramOnClick}>Instagram</button>
    </div>
    )
}

export { Card }