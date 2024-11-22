import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


export default function InfoBox({ info }) {
    const INIT_URL = "https://plus.unsplash.com/premium_photo-1677105700661-dbfad22793ca?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const HOT_URL = "https://media.istockphoto.com/id/961975724/photo/sun-in-a-blue-sky-50-megapixels.jpg?s=2048x2048&w=is&k=20&c=5gTiFJZtyAc0hjiaD36v6T7M8UlMWnmH4mloFcpZzGk=";
    const COLD_URL = "https://images.unsplash.com/photo-1599059021750-82716ae2b661?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1544610081-2ca38cf4b6e0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    
    return(
        <div className="InfoBox">
            <br />
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                 sx={{ height: 140 }}
                 image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                 title="green iguana"
                />
                <CardContent>
                   <Typography gutterBottom variant="h5" component="div">
                     {info.city} {info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
                   </Typography>
                   <Typography variant="body2" color="text.secondary" component={"span"}>
                     <p>Tempareture = {info.temp}&deg;C</p>
                     <p>Humidity = {info.humidity}</p>
                     <p>The weather can be describe as <i>{info.weather} </i> an Feels LIke = {info.feelsLike}&deg;C</p>
                     <p>Min Tempareture = {info.tempMin}&deg;C</p>
                     <p>Max Tempareture = {info.tempMax}&deg;C</p>
                   </Typography>
                </CardContent>
                
            </Card>
            </div>

        </div>
    )
}