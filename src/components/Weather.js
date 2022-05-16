import React from 'react'
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import { BsFillCloudDrizzleFill, BsFillCloudFog2Fill, BsFillSunFill } from 'react-icons/bs';
import { GiRaining } from 'react-icons/gi'
import { IoIosPartlySunny } from 'react-icons/io'
export default function Weather({ city }) {
  const navigate = useNavigate();
  const weatherIcons = new Map();
  weatherIcons.set("light rain", <GiRaining className="weather-icon" />);
  weatherIcons.set("overcast clouds", <BsFillCloudDrizzleFill className="weather-icon" />);
  weatherIcons.set("few clouds", <IoIosPartlySunny className="weather-icon" />);
  weatherIcons.set("broken clouds", <BsFillCloudFog2Fill className="weather-icon" />);
  weatherIcons.set("clear sky", <BsFillSunFill className="weather-icon" />);
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
        {weatherIcons.get(city.weather[0].description)}
      </Card>
    </Col >
  )
}
