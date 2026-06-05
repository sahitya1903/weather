import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css'

export default function InfoBox(){
    let info={
        city:'Delhi',
        temp: 34.78,
        tempMin: 34.78,
        tempMax: 34.78,
        humidity: 29,
        feelsLike: 34.16,
        weather: "clear sky"
        }
    

    return(
        <div className='info'>
            <h3>Weather Info: {info.weather}</h3>
            <div className='card'>
            <Card sx={{ maxWidth: 250 }}>
            <CardMedia
                sx={{ height: 140 }}
                image="https://thumbs.dreamstime.com/z/blue-sky-horizontal-beautiful-cumulus-clouds-bright-clear-summer-season-good-weather-out-door-activity-skycap-nature-196184076.jpg?ct=jpeg"
                title="clear"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {info.city}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} component='div'>
                    <div>Temperature: {info.temp}&deg;C</div>
                    <div>Min Temperature: {info.tempMin}&deg;C</div>
                    <div>Max Temperature: {info.tempMax}&deg;C</div>
                    <div>Humidity: {info.humidity}</div>
                    <div>The weather can be described as <i>{info.weather}</i> and feels like: {info.feelsLike}&deg;C</div>
                </Typography>
            </CardContent>
            </Card>
            </div>
        </div>
    )
}