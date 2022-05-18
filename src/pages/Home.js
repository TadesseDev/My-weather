import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Weather from '../components/Weather';
import FilteredCities from '../components/FilteredCities';
import './home.scss';

export default function Home() {
  const cities = useSelector((store) => store.cities);
  const filterType = useSelector((store) => store.filter);
  const myCity = cities.filter((city) => city.nearMe === 0);
  const cityNearMe = cities.filter((city) => city.nearMe === 1);
  const otherCities = cities.filter((city) => city.nearMe === 2);
  return (
    (filterType === 'All'
      && (
        <>
          <h3 className="title">My cities</h3>
          <Container>
            <Row>
              {((myCity.length > 0 && myCity.map((city) => <Weather key={city.id} city={city} />)) || (<p className="warning">You haven&apos;t checked any city yet</p>))}
            </Row>
            <hr />
          </Container>
          <h3 className="title">Cities near you</h3>
          <Container>
            <Row>
              {(cityNearMe.length > 0 && cityNearMe.map((city) => <Weather key={city.id} city={city} />)) || <p className="warning">We couldn&apos;t find your location<br /> make sure to allow a location</p>}
            </Row>
            <hr />
          </Container>
          <h3 className="title">Other cities</h3>
          <Container>
            <Row>
              {(otherCities.length > 0 && otherCities.map((city) => <Weather key={city.id} city={city} />)) || <p className="warning">You haven&apos;t checked other cities</p>}
            </Row>
          </Container>
        </>
      )
    ) || <FilteredCities filter={filterType} cities={cities} />
  );
}
