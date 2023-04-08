import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(null);
  const { contact } = useSelector(state => state);
  const dispatch = useDispatch();

  const addContact = (event) => {
    event.preventDefault();
    // 중복 체크
    if (contact.find((item) => item.name === name || item.phoneNumber === phoneNumber)) {
      alert('이미 추가된 연락처입니다.');
    } else {
      dispatch({ type: "ADD_CONTACT", payload: { name, phoneNumber } });
      console.log(name, phoneNumber)
      setName(prevName => {
        if (prevName === name) return prevName;
        return '';
      });
      setPhoneNumber('');
    }
  }

  return (
    <div>
      <Form onSubmit={addContact}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>이름</Form.Label>
          <Form.Control type="text" placeholder="이름을 입력해 주세요" onChange={(event) => setName(event.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContact">
          <Form.Label>전화번호</Form.Label>
          <Form.Control type="number" placeholder="전화번호를 입력해주세요" onChange={(event) => setPhoneNumber(event.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">
          추가
        </Button>
      </Form>
    </div>
  )
}

export default ContactForm;