import './App.css';
//include react-bootstrap
import { useEffect,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col,Button} from 'react-bootstrap';
function App() {
  const [inputValues,setinputValues]=useState("0");
  const setInput=(e)=>{
setinputValues(inputValues+e.target.value);
  }
  return (
   
    <div className="App">
    <input type="text" className="inputValue" value={inputValues}></input>
    <Container>
    <Row>
      <Col xs={3}><input type="button" className="Row" value="AC"></input></Col>
      <Col xs={3}><input type="button" className="Row" value="+/-"></input></Col>
      <Col xs={3}><input type="button" className="Row" value="%"></input></Col>
      <Col xs={3}><input type="button" className="operators" value="/"></input></Col>
    </Row>
    <Row>
      <Col xs={3}><input type="button" className="Row" value="7" onClick={setInput}></input></Col>
      <Col xs={3}><input type="button" className="Row" value="8" onClick={setInput}></input></Col>
      <Col xs={3}><input type="button" className="Row" value="9" onClick={setInput}></input></Col>
      <Col xs={3}><input type="button" className="operators" value="X"></input></Col>
    </Row>
    <Row>
      <Col xs={3}><input type="button" className="Row" value="4" onClick={setInput}></input></Col>
      <Col xs={3}><input type="button" className="Row" value="5" onClick={setInput}></input></Col>
      <Col xs={3}><input type="button" className="Row" value="6" onClick={setInput}></input></Col>
      <Col xs={3}><input type="button" className="operators" value="-"></input></Col>
    </Row>
    <Row>
      <Col xs={3}><input type="button" className="Row" value="1" onClick={setInput}></input></Col>
      <Col xs={3}><input type="button" className="Row" value="2" onClick={setInput}></input></Col>
      <Col xs={3}><input type="button" className="Row" value="3" onClick={setInput}></input></Col>
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
