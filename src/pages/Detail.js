import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap'
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

    </Container>
  )
}
