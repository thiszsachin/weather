import React, {useState} from 'react';
import './App.css';
import CityInput from './components/CityInput'
import WeatherCity from './components/WeatherCity'
import {Col, Container, Row} from "react-bootstrap";

function App() {
  const [city, setCity] = useState("");
  const [weatherNumber, setWeatherNumber] = useState("")
  const [weather, setWeather] = useState("")
  const [weatherCity, setWeatherCity] = useState("")
  const [weatherImage, setWeatherImage] = useState("https://scx2.b-cdn.net/gfx/news/hires/2018/1-whytheweathe.jpg")
  

  const fetchCityWeather = () => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=4a2d0d7c0535af3cb0ef3369f09130fb`)
      .then((res) => res.json())
      .then(result =>{
        if(result.cod !== "404"){
          setWeatherCity(result.name)
          setWeather(result.weather[0])
          setWeatherNumber(result.main)

          if(result.weather[0].main === "Rain"){
            setWeatherImage("https://cdn.pixabay.com/photo/2014/04/05/11/39/rain-316579_960_720.jpg")
          }
          else if(result.weather[0].main === "Haze"){
            setWeatherImage("https://www.washingtonpost.com/resizer/IrXkBz6n2uNs4_0mTDmtrkDeR0c=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/FQPQPJX64AI6TA2BZQ644UXH3Y.jpg")
          }
          else if(result.weather[0].main === "Clouds"){
            setWeatherImage("https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/weather/cloud/cumulus-cloud.jpg")
          }
          else if(result.weather[0].main==="Smoke"){
            setWeatherImage("https://scx2.b-cdn.net/gfx/news/2018/forestservic.jpg")
          }
          else{
            setWeatherImage("https://scx2.b-cdn.net/gfx/news/hires/2018/1-whytheweathe.jpg")
          }
        }else{
          setWeather("404")
        }
    })
  }

  return (
    <div className="App" style={{background: `url(${weatherImage})`, backgroundRepeat: "no-repeat"}}>
      <Container>
        <Row>
          <Col className="m-auto" xs={10} md={6}>
            <CityInput city={city} setCity={setCity} fetchCityWeather={fetchCityWeather}/>
            <WeatherCity weatherNumber={weatherNumber} weatherCity={weatherCity} weather={weather}/>
          </Col>
        </Row>
      </Container>   
      <p className="footer">
                Designed by :
                <a rel="noreferrer" target="_blank" href="https://github.com/thiszsachin/">thiszsachin</a>
            </p>
    </div>
  );
}

export default App;
