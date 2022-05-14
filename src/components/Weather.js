import React from 'react'
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
export default function Weather({ city }) {
  return (
    <Col xs={6} sm={4} lg={2} className="p-0">
      <NavLink to={`/detail?id=${city.id}`}>
        <Card w={100} >
          <Card.Body>
            <Card.Title>
              {city.name}
            </Card.Title>
            <Card.Text>city detail</Card.Text>
          </Card.Body>
        </Card>
      </NavLink>
    </Col >
  )
}
