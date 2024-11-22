import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"
import "./Weather.css"
import { colors } from "@mui/material";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Mumbai",
        feelsLike: 25.95,
        humidity:  17,
        temp: 26.91,
        tempMax: 26.91,
        tempMin: 26.91,
        weather: "clear sky",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }


    return(
        <div className="weather">
            <h1 style={{color: "white", margin: "0 0 10px 0"}}>Weather App</h1>
            < SearchBox updateInfo={updateInfo}/>
            < InfoBox info={weatherInfo} />
        </div>
    )
}