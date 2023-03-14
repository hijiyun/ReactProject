import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities}) => {
  console.log("cities?",cities )
  return (
    <div>
      <Button variant="warning">Current Location</Button>{' '}
      <Button variant="secondary">Seoul</Button>{' '}
      <Button variant="success">Japan</Button>{' '}
    </div>
  )
}

export default WeatherButton
