import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import Weather from '../components/Weather';
import FilteredCities from '../components/FilteredCities';
import './home.scss'
export default function Home() {
  const cities = useSelector(store => store.cities);
  const filterType = useSelector(store => store.filter);
  const myCity = cities.filter(city => city.nearMe === 0);
  const cityNearMe = cities.filter(city => city.nearMe === 1);
  const otherCities = cities.filter(city => city.nearMe === 2);
  cities.forEach(city => console.log(city.weather[0].description))
  return (
    (filterType === 'All') && < Container >
      <h3 className="title">My cities</h3>
      <Row >
        {myCity.length > 0 && myCity.map(city => <Weather key={city.id} city={city} />) || <p>You havent checked any city yet</p>}
      </Row>
      <h3 className="title">Cities near you</h3>
      <Row >
        {cityNearMe.length > 0 && cityNearMe.map(city => <Weather key={city.id} city={city} />) || <p>We couldn't find your location</p>}
      </Row>
      <h3 className="title">Other cities</h3>
      <Row >
        {otherCities.length > 0 && otherCities.map(city => <Weather key={city.id} city={city} />) || <p>You haven't checked other cities</p>}
      </Row>
    </ Container> || <FilteredCities filter={filterType} cities={cities} />
  )
}
