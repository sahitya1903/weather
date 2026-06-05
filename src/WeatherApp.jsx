import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){
    let [weatherInfo,setWeatherInfo]=useState(
        {
        city:'Delhi',
        temp: 34.78,
        tempMin: 34.78,
        tempMax: 34.78,
        humidity: 29,
        feelsLike: 34.16,
        weather: "clear sky"
        }
    );

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign: 'center'}}>
            <h3>Weather App</h3>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}