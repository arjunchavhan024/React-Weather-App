import Button from '@mui/material/Button';
import { useState } from 'react';
import "./Weather.css"
import search_icon from "../assets/search.png"



export default function SearchBox({ updateInfo }) {


    let time = new Date().toLocaleTimeString();
    let [currTime, setCurrTime] = useState();

    const updateTime = ()=> {
       let time = new Date().toLocaleTimeString();
       setCurrTime(time);
    };
    setInterval(updateTime, 1000);





    let [city, setCity] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "4c445e7ae69f638d3409188bd4598549";



    let getWeatherInfo = async () => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description

        }
        console.log(result);
        return result;
        
    
    }

    let handleChange = (evt) => {
        setCity(evt.target.value);
    }

    
        let handleSubmit = async (evt) => {
            evt.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        }



    return(
        <div className='SearchBox'>
            <form action="#" onSubmit={handleSubmit} >
            <input id="city" placeholder="City Name"  required value={city} onChange={handleChange}/>
            <Button type='submit' id='btn' ><img src={search_icon} alt="icon" /></Button>
            <span id='time'>{time}</span>
            </form>
        </div>
    );
}