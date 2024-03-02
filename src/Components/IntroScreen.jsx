import './IntroScreen.css'
import textBox from "../Assets/Group 149.png"
import monkey from "../Assets/Group 153.png"
import { Link } from 'react-router-dom'
import startBtn from "../Assets/Group 123(1).png"
import cog from "../Assets/Cog.png"
import star from "../Assets/Star.png"

export default function IntroScreen(){
    return (
        <div className="introDiv">
            <div className="backBtnDiv"></div>
            <div className="textBox">
                <img src={textBox} alt="textBox" className='imgBox'/>
                <h1 className="insideText">Welcome Kiddo !</h1>
            </div>
            <div className="monkey">
                <img src={monkey} alt="monkey" />
            </div>
            <div className='bottomDiv'>
                <div className='settingDiv'>
                    <div>
                        <img src={cog} alt="cogImg" />
                    </div>
                    <div>
                        <img src={star} alt="starImg" />
                    </div>
                </div>
                <div className='next'>
                    <Link to="/2">
                        <img src={startBtn} alt="nextBtn" />
                    </Link>
                </div>
            </div>
        </div>
    )
}