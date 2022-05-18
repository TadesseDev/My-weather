import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Weather({ city }) {
  const navigate = useNavigate();
  const weatherIcons = useSelector((store) => store.weatherIcons);
  return (
    <Col
      xs={6}
      sm={6}
      lg={3}
      className="p-0"
      onClick={() => navigate(`/detail?id=${city.id}`)}
      title="city-weather"
    >
      <Card className="w-100 h-100">
        <Card.Body>
          <Card.Title>
            {city.name}
          </Card.Title>
          <Card.Text>{city.weather[0].description}</Card.Text>
        </Card.Body>
        <small>
          {city.main.temp}
          {city.unit}
        </small>
        <small>{city.country}</small>
        {weatherIcons.get(city.weather[0].description) || weatherIcons.get("default")}
      </Card>
    </Col>
  );
}

Weather.propTypes = {
  city: PropTypes.func.isRequired,
};
