import React from 'react'
import { useSearchParams } from 'react-router-dom';
export default function Error() {
  const [getParam, setParam] = useSearchParams();
  const errorMessage = getParam.get('message');
  return (
    <div id="error">
      <h1>Error</h1>
      <h3>{errorMessage}</h3>
    </div>
  )
}
