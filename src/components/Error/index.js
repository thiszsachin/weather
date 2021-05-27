import { Alert } from "react-bootstrap";
import React from 'react';

const Error = () => {
    return (
        <Alert variant="danger">
            <Alert.Heading>City not found.</Alert.Heading>
        </Alert>
    );
};

export default Error;