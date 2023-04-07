import React from 'react'
import { Col, Row } from 'react-bootstrap'

const ContactItem = ({item}) => {
  return (
    <div>
      <Row>
        <Col lg={1}>
          <img
          width={50} 
          src="https://i1.sndcdn.com/avatars-000373844735-9n06kq-t240x240.jpg" alt="unknown person" />
        </Col>
        <Col lg={11}>
          <div className='item-name'>{ item.name }</div>
          <div className='item-num'>{ item.phoneNumber }</div>
        </Col>
      </Row>
    </div>
  )
}

export default ContactItem