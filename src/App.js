import './App.css';
//include react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col,Button} from 'react-bootstrap';
function App() {
  return (
    <div className="App">
    <input type="text" className="inputValue"></input>
    <Container>
    <Row>
      <Col xs={3}><input type="button" className="Row" value="AC"></input></Col>
      <Col xs={3}><input type="button" className="Row" value="+/-"></input></Col>
      <Col xs={3}><input type="button" className="Row" value="%"></input></Col>
      <Col xs={3}><input type="button" className="operators" value="/"></input></Col>
    </Row>
    <Row>
      <Col xs={3}><input type="button" className="Row" value="7"></input></Col>
      <Col xs={3}><input type="button" className="Row" value="8"></input></Col>
      <Col xs={3}><input type="button" className="Row" value="9"></input></Col>
      <Col xs={3}><input type="button" className="operators" value="X"></input></Col>
    </Row>
    <Row>
      <Col xs={3}><input type="button" className="Row" value="4"></input></Col>
      <Col xs={3}><input type="button" className="Row" value="5"></input></Col>
      <Col xs={3}><input type="button" className="Row" value="6"></input></Col>
      <Col xs={3}><input type="button" className="operators" value="-"></input></Col>
    </Row>
    <Row>
      <Col xs={3}><input type="button" className="Row" value="1"></input></Col>
      <Col xs={3}><input type="button" className="Row" value="2"></input></Col>
      <Col xs={3}><input type="button" className="Row" value="3"></input></Col>
      <Col xs={3}><input type="button" className="operators" value="+"></input></Col>
    </Row>
    <Row>
      <Col xs={6}><input type="button" className="zero" value="0"></input></Col>
      <Col xs={3}><input type="button" className="Row" value="."></input></Col>
      <Col xs={3}><input type="button" className="operators" value="="></input></Col>
    </Row>
  </Container>

    </div>
  );
}

export default App;
