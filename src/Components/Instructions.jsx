import './IntroScreen2.css'
import './Instructions.css'
import { Link } from 'react-router-dom'
import playBtn from "../Assets/Group 123 (3).png"
import cog from "../Assets/Cog.png"
import star from "../Assets/Star.png"
import backBtn from "../Assets/Group 156.png"
import card from "../Assets/card.png"
import card2 from "../Assets/card(1).png"
import card3 from "../Assets/Group 157.png"

export default function Instructions(){
    return (
        <div className="introDiv">
            <div className="backBtnDiv">
                <Link to="/3">
                    <img src={backBtn} alt="backBtnImg" />
                </Link>
            </div>
            <div className="instructionCont">
                <div className='instructionCard'>
                    <img src={card} alt="card" className='cardImg' />
                    <h3 className='blue'>Select a pink card.</h3>
                    <h2 className='green'>It has images.</h2>
                </div>
                <div className='instructionCard'>
                    <img src={card2} alt="card" className='cardImg' />
                    <h3 className='blue'>Select a blue card.</h3>
                    <h2 className='green'>It has alphabets.</h2>
                </div>
                <div className='instructionCard'>
                    <img src={card3} alt="card" className='cardImg' />
                    <h2 className='green'>If they're the same.</h2>
                    <h3 className='blue'>Its a match !</h3>
                    <h2 className='green'>otherwise retry :(</h2>
                </div>
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
                    <Link to="/5">
                        <img src={playBtn} alt="nextBtn" />
                    </Link>
                </div>
            </div>
        </div>
    )
}