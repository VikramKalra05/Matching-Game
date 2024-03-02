import { Link, useNavigate } from "react-router-dom"
import backBtn from "../Assets/Group 156.png"
import "./IntroScreen.css"
import { useEffect, useState } from "react"
import blueCard from "../Assets/card(1).png"
import pinkCard from "../Assets/card.png"
import apple from "../Assets/apple.png"
import orange from "../Assets/orange.png"
import letterA from "../Assets/letterA.png"
import letterO from "../Assets/letterO.png"
import "./activity.css"

export default function Activity(){
    const navigate = useNavigate();
    const [currentFruit, setCurrentFruit] = useState(null);
    const [currentId, setCurrentId] = useState(null);
    const [turns, setTurns] = useState(1);
    const [pinkSection, setPinkSection] = useState([
        pinkCard,
        pinkCard,
        pinkCard,
        pinkCard,
        pinkCard,
        pinkCard
    ])
    const [blueSection, setBlueSection] = useState([
        blueCard,
        blueCard,
        blueCard,
        blueCard,
        blueCard,
        blueCard,
    ])
    

    useEffect(() => {
        const victory = ( ) => {
            if(turns === 13){
                navigate("/6")
            }
        }
        victory();
    }, [turns])

    const handleBtn = (fruit, turn, id) => {
        var success = true;
        if(turn === 1){
            setTurns(turns + 1);
            setCurrentFruit(fruit)
            setCurrentId(id)
            setPinkSection(pinkSection.map((ele, key) => {
                if(key === id){
                    if(fruit === "apple"){
                        return apple
                    }else{
                        return orange;
                    }
                }else{
                    return ele;
                }
            }))
        }else if(turn === 2){
            setBlueSection(blueSection.map((ele, key) => {
                if(key === id){
                    if(currentFruit === fruit){
                        setTurns(turns + 1);
                        success = true;
                        if(fruit === "apple"){
                            return letterA
                        }else{
                            return letterO;
                        }
                    }else{
                        setTurns(turns - 1);
                        success = false;
                        return blueCard;
                    }
                }else{
                    return ele;
                }
            }))
            setCurrentFruit(null);
        }

        if(!success){
            setPinkSection(pinkSection.map((ele, key) => {
                if(key == currentId){
                    return pinkCard;
                }else{
                    return ele;
                }
            }))
        }
    };    

    return (
        <div className="introDiv">
            <div className="backBtnDiv">
                <Link to="/4">
                    <img src={backBtn} alt="backBtnImg" />
                </Link>
            </div>
            <div className="activity">
                <div className="pinkCont">
                {pinkSection.map((ele, id) => {
                    var fruit;
                    var disabledCheck = true;
                    if(id%2 == 0){
                        fruit = 'apple'
                    }else{
                        fruit = 'orange'
                    }
                    if(turns % 2 == 0){
                        disabledCheck = true;
                    }else{
                        disabledCheck = false;
                    }
                    return (
                        <button key={id} onClick={() => handleBtn(fruit, 1, id)} disabled={disabledCheck}>
                            <img src={ele} alt="card" className="card" id={turns % 2 == 0 ? "gray" : null}/>
                        </button>
                    )
                })}
        
                </div>
                <div className="blueCont">
                {blueSection.map((ele, id) => {
                    var fruit;
                    if(id%2 == 0){
                        fruit = 'orange'
                    }else{
                        fruit = 'apple'
                    }
                    return (
                        <button key={id} onClick={() => handleBtn(fruit, 2, id)} disabled={turns % 2 == 0 ? false : true}>
                            <img src={ele} alt="card" className="card" id={turns % 1 == 0 ? "gray" : null}/>
                        </button>
                    )
                })}
                </div>
            </div>
        </div>
    )
}