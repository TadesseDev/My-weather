import React from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom';
export default function Error() {
  const [getParam, setParam] = useSearchParams();
  const errorMessage = getParam.get('message');
  const navigate = useNavigate();
  return (
    <div id="error" style={{ "text-align": "center" }}>
      <h1>Error</h1>
      <h3>{errorMessage}</h3>
      <button className="home" onClick={() => navigate('/')}>Home</button>
    </div>
  )
}
