import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css'
import SevereColdSharpIcon from '@mui/icons-material/SevereColdSharp';
import ThunderstormSharpIcon from '@mui/icons-material/ThunderstormSharp';
import WbSunnySharpIcon from '@mui/icons-material/WbSunnySharp';

export default function InfoBox({info}){
    let img="https://thumbs.dreamstime.com/z/blue-sky-horizontal-beautiful-cumulus-clouds-bright-clear-summer-season-good-weather-out-door-activity-skycap-nature-196184076.jpg?ct=jpeg";
    let hot='https://media.istockphoto.com/id/1391812484/photo/senior-man-with-towel-suffering-from-heat-stroke-outdoors-low-angle-view.jpg?s=2048x2048&w=is&k=20&c=GzQTCssKSUrv5FAIxmDfwyv84Hv02pbBykuIvxXkx-M='
    let cold='https://media.istockphoto.com/id/527543176/photo/teenager-girl-walks-under-snowfall-at-the-street-in-manhattan.jpg?s=2048x2048&w=is&k=20&c=CpeFf9g9RjR-cyp-JhHagTG3CNpiJJUH3UxZ7k2Vhk8='
    let rain='https://media.istockphoto.com/id/1476190237/photo/summer-rain-raindrops-bad-weather-depression.jpg?s=2048x2048&w=is&k=20&c=ky5JTM-ZpKr0zoDfB4jnatyATQ-5ZG7kdg9vU8ndrww='
    return(
        <div className='info'>
            <Card sx={{ maxWidth: 250 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={info.humidity>80 ? rain : info.temp>15 ? hot : cold}
                title="clear"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {info.city}&nbsp;&nbsp;
                {info.humidity>80 ?  <ThunderstormSharpIcon/> : info.temp>15 ? <WbSunnySharpIcon/> : <SevereColdSharpIcon/>}
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
    )
}