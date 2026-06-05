import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button"
import './SearchBox.css'
import { useState } from 'react';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { Alert } from '@mui/material';

export default function SearchBox(){
    let[city,setCity]=useState("");
    // console.log(import.meta.env);
    const url="https://api.openweathermap.org/data/2.5/weather";
    const key=import.meta.env.VITE_API_KEY;

    let getWeatherInfo=async(city)=>{
        let response=await fetch(`${url}?q=${city}&appid=${key}&units=metric`);
        let jsonResponse=await response.json();
        // console.log(jsonResponse);
        let result={
            city:city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description,
        }
        console.log(result);
    }

    let handleChange=(event)=>{
        setCity(event.target.value);
    }

    let handleSubmit=(event)=>{
        event.preventDefault();
        console.log(city);
        setCity('');
        getWeatherInfo(city);
    }

    return(
        <div className="SearchBox">
            <h3>Search for Weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required onChange={handleChange} value={city}/><br />
                <Button variant="contained" type='submit'>Search</Button>
            </form>
            
        </div>
    );
}

{/*
<Button>Click Me!</Button>
<Button variant='contained' onClick={handleClick} color='success'>Click Me 2!</Button>
<Button variant='contained' onClick={handleClick} disabled>Click Me 3!</Button>
<Button variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>
<Alert severity='error'>Alert Button given</Alert> 
*/}