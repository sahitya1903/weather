export default function InfoBox(){
    let info={
        temp: 34.78,
        tempMin: 34.78,
        tempMax: 34.78,
        humidity: 29,
        feelsLike: 34.16,
        weather: "clear sky"
        }
    

    return(
        <div>
            <h3>Weather Info: {info.weather}</h3>
        </div>
    )
}