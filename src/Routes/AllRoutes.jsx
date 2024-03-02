import { Routes, Route } from "react-router-dom";
import IntroScreen from "../Components/IntroScreen";
import IntroScreen2 from "../Components/IntroScreen2";
import IntroScreen3  from "../Components/IntroScreen3";
import Instructions from "../Components/Instructions";
import Activity from "../Components/Activity";
import Victory from "../Components/Victory";


export default function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={<IntroScreen />}></Route>
            <Route path="/2" element={<IntroScreen2 />}></Route>
            <Route path="/3" element={<IntroScreen3 />}></Route>
            <Route path="/4" element={<Instructions />}></Route>
            <Route path="/5" element={<Activity />}></Route>
            <Route path="/6" element={<Victory />}></Route>
        </Routes>
    )
}