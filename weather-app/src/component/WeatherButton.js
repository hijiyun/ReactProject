import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = () => {
  return (
    <div>
      <Button variant="warning">Current Location</Button>{' '}
      <Button variant="secondary">Seoul</Button>{' '}
      <Button variant="success">Japan</Button>{' '}
    </div>
  )
}

export default WeatherButton
