import React from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap'
import './detail.scss'
export default function Detail() {
  const [getParam, setParam] = useSearchParams();
  const navigate = useNavigate();
  let city = { id: getParam.get('id') }
  city = useSelector(store => {
    for (let thisCity of store.cities) {
      if (thisCity.id === city.id)
        return thisCity;
    }
  });
  const icon = useSelector(store =>
    store.weatherIcons.get(city && city.weather[0].description));
  return (
    <div id="detail">
      {city && <Container>
        <Row>
          <h1>{city.name}</h1>
          <h4>{city.weather[0].description}</h4>
          <small>max-tmp: {city.main.temp_max}</small>
          <small>min-temp{city.main.temp_min}</small>
          {icon}
        </Row>
        <Row ><Col xs={6} md={4}>Cloud</Col> <Col xs={6} sm={4}>{city.clouds.all}%</Col></Row>
        <Row><Col xs={6} md={4}>Wind</Col> <Col xs={6} md={4}>
          speed: {city.wind.speed} |
          deg: {city.wind.deg}° |
          gust: {city.wind.gust} </Col></Row>
        <Row ><Col xs={6} md={4}>Humidity</Col> <Col xs={6} md={4}>{city.main.humidity}%</Col></Row>
        <Row ><Col xs={6} md={4}>Sea level</Col > <Col xs={6} md={4}>{city.main.sea_level || "Not available"}</Col></Row>
        <Row ><Col xs={6} md={4}>Population</Col> <Col xs={6} md={4}>{city.population || 'Not available'}</Col></Row>
        <Row><Col xs={6} md={4}>Approximate distance</Col> <Col xs={6} md={4}>{city.distance && city.distance + "KM" || 'Not available'}</Col></Row>
        <Row><Col xs={6} md={4}>Coordinate</Col> <Col xs={6} md={4}><div>Lat: {city.coord.lat}</div><div>Lat: {city.coord.lat}</div></Col></Row>
        {icon}
      </Container> || <p className="warning">No city found</p>}
      <button className="home" onClick={() => navigate('/')}>Home</button>
    </div>
  )
}
