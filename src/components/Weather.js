import React from 'react'
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
export default function Weather({ city }) {
  const navigate = useNavigate();
  return (
    <Col xs={6} sm={4} lg={2} className="p-0" onClick={() => navigate(`/detail?id=${city.id}`)}>
      <Card className="w-100 h-100">
        <Card.Body>
          <Card.Title>
            {city.name}
          </Card.Title>
          <Card.Text>{city.weather[0].description}</Card.Text>
        </Card.Body>
        <small>{city.main.temp}{city.unit}</small>
        <small>{city.country}</small>
      </Card>
    </Col >
  )
}
