import React from 'react'
import { useSearchParams } from 'react-router-dom'
export default function Detail() {
  const [getParam, setParam] = useSearchParams();
  console.log(getParam.get('id'));
  return (
    <div>Detail</div>
  )
}
