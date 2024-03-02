import './IntroScreen2.css'
import textBox from "../Assets/Group 149.png"
import monkey from "../Assets/Group 154.png"
import { Link } from 'react-router-dom'
import nextBtn from "../Assets/Group 123.png"
import cog from "../Assets/Cog.png"
import star from "../Assets/Star.png"
import backBtn from "../Assets/Group 156.png"

export default function IntroScreen2(){
    return (
        <div className="introDiv">
            <div className="backBtnDiv">
                <Link to="/">
                    <img src={backBtn} alt="backBtnImg" />
                </Link>
            </div>
            <div className="textBox2">
                <img src={textBox} alt="textBox" className='imgBox2'/>
                <h1 className="insideText2">Hi , I am Mizo !</h1>
                <h1 className="insideText2">and I love bananas</h1>
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
                    <Link to="/3">
                        <img src={nextBtn} alt="nextBtn" />
                    </Link>
                </div>
            </div>
        </div>
    )
}