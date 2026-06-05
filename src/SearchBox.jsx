import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button"
import './SearchBox.css'
import { useState } from 'react';


export default function SearchBox({updateInfo}){
    let[city,setCity]=useState("");
    let [err,setErr]=useState(false);
    // console.log(import.meta.env);
    const url="https://api.openweathermap.org/data/2.5/weather";
    const key=import.meta.env.VITE_API_KEY;

    let getWeatherInfo=async()=>{
        try{
            let response=await fetch(`${url}?q=${city}&appid=${key}&units=metric`);
            let jsonResponse=await response.json();
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
            return result;
        }catch(err){
            throw err;
        }

    }

    let handleChange=(event)=>{
        setCity(event.target.value);
    }

    let handleSubmit=async (event)=>{
        try{
            event.preventDefault();
            console.log(city);
            setCity('');
            let newInfo=await getWeatherInfo();
            updateInfo(newInfo);
        }catch(err){
            setErr(true);
        }

    }

    return(
        <div className="SearchBox">
            <h3>Search for Weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required onChange={handleChange} value={city}/><br />
                <Button variant="contained" type='submit' style={{marginTop:'1rem',marginBottom:'1rem'}}>Search</Button>
                {err && <p style={{color: 'red'}}>No such place exists in our API</p>}
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