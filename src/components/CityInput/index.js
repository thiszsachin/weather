import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const CityInput = ({city, setCity, fetchCityWeather}) => {
    const [err, setErr] = React.useState("")

    const handleInputChange = (event) => {
        setCity(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(!city){
            setErr("City field is empty")
        }
        else{
            setErr("")
            fetchCityWeather();
        }
    }

    return (
    <Container className="m-auto p-5">
        <h2 className="text-center text-success m-3">Weather App</h2>
        <Form onSubmit={handleSubmit} style={{textAlign: "center"}}>
            <Form.Group controlId="formBasicEmail">
                <Form.Control
                value={city}
                type="text" 
                placeholder="Enter City Name" 
                onChange={handleInputChange} />
                <small className="text-danger">{err}</small>
            </Form.Group>

            <Button  className="m-2" variant="success" onClick={handleSubmit}>
                Submit
            </Button>
        </Form>
    </Container>
    );
};

export default CityInput;