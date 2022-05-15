import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap'
export default function Detail() {
  const [getParam, setParam] = useSearchParams();
  let city = { id: getParam.get('id') }
  city = useSelector(store => {
    for (let thisCity of store.cities) {
      if (thisCity.id === city.id)
        return thisCity;
    }
  });
  return (
    city && <Container>
      <Row>
        <h1>{city.name}</h1>
        <h4>{city.weather[0].description}</h4>
        <small>max-tmp: {city.main.temp_max}</small>
        <small>min-temp{city.main.temp_min}</small>
      </Row>
      <Row ><Col>Cloud</Col> <Col >{city.clouds.all}%</Col></Row>
      <Row><Col>Wind</Col> <Col >
        speed: {city.wind.speed} |
        deg: {city.wind.deg}° |
        gust: {city.wind.gust} </Col></Row>
      <Row ><Col>Humidity</Col> <Col >{city.main.humidity}%</Col></Row>
      <Row ><Col>Sea level</Col> <Col >{city.main.sea_level}%</Col></Row>
      <Row ><Col>Population</Col> <Col >{city.population || 'Not available'}</Col></Row>
      <Row><Col>Approximate distance</Col> <Col >{city.distance && city.distance + "KM" || 'Not available'}</Col></Row>
    </Container> || <div>No city found</div>
  )
}
