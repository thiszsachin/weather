import React from 'react';
import { Alert, Col, Row } from 'react-bootstrap';
import Error from '../Error';
import {FaTemperatureHigh} from "react-icons/fa"
import {WiHumidity} from "react-icons/wi"

import {RiCelsiusFill} from "react-icons/ri"





const WeatherCity = ({weather, weatherCity, weatherNumber}) => {
    if(weather === "404"){
        return <Error/>
    }else if(weather){
        return (
            <Alert variant="success">
                <Alert.Heading>{weatherCity}</Alert.Heading>
                <p>{weather.main}</p>
                <hr/>
                <Row>
                {/* <span className="text-info">Temperature</span> */}
                    <Col xs={6}><FaTemperatureHigh/> : {weatherNumber.temp} <RiCelsiusFill/></Col>
                    <Col xs={6}><WiHumidity/> : {weatherNumber.humidity}</Col>
                </Row>
                <hr/>
                <p className="mb-0">{weather.description}</p>
            </Alert>
        );
    }else{
        return <></>
    }

};

export default WeatherCity;
