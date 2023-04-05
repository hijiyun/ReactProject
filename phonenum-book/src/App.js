import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import ContactForm from './component/ContactForm';
import ContactList from './component/ContactList';

function App() {
  return (
    <div>
      <h1 className='title'>전화번호부</h1>
      <Container>
        <Row>
          <Col> <ContactForm /> </Col>
          <Col> <ContactList /> </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
