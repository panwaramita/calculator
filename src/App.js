import './App.css';
//include react-bootstrap
import { useEffect,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col,Button} from 'react-bootstrap';
function App() {
  const [inputValues,setinputValues]=useState("0");
  const [preValue,setPreValue]=useState("");
  const [op,setOp]=useState("");
  const [initial,setInitial]=useState(" ");
  const setInput=(e)=>{
    if(initial===" ")
    {
      setinputValues("");
      setInitial("1");
      setinputValues(e.target.value);
      // alert(inputValues);
    }
    // if(op!=" ")
    // {
        
    // setinputValues(" ");
    // setinputValues(inputValues+e.target.value);
    // }
    else
    {
 setinputValues(inputValues+e.target.value);
    }
  }
  const equal=(e)=>{
    setPreValue(inputValues);
  }
  const operatorClick=(e)=>{
    setPreValue(inputValues);
    setOp(e.target.value);
  }
  useEffect(()=>{

  },[]);
  return (
   
    <div className="App">
    <input type="text" className="inputValue" value={inputValues}></input>
    <Container>
    <Row>
      <Col xs={3}><input type="button" className="Row" value="AC"></input></Col>
      <Col xs={3}><input type="button" className="Row" value="+/-"></input></Col>
      <Col xs={3}><input type="button" className="Row" value="%"></input></Col>
      <Col xs={3}><input type="button" className="operators" value="/" onClick={operatorClick}></input></Col>
    </Row>
    <Row>
      <Col xs={3}><input type="button" className="Row" value="7" onClick={setInput}></input></Col>
      <Col xs={3}><input type="button" className="Row" value="8" onClick={setInput}></input></Col>
      <Col xs={3}><input type="button" className="Row" value="9" onClick={setInput}></input></Col>
      <Col xs={3}><input type="button" className="operators" value="X" onClick={operatorClick}></input></Col>
    </Row>
    <Row>
      <Col xs={3}><input type="button" className="Row" value="4" onClick={setInput}></input></Col>
      <Col xs={3}><input type="button" className="Row" value="5" onClick={setInput}></input></Col>
      <Col xs={3}><input type="button" className="Row" value="6" onClick={setInput}></input></Col>
      <Col xs={3}><input type="button" className="operators" value="-" onClick={operatorClick}></input></Col>
    </Row>
    <Row>
      <Col xs={3}><input type="button" className="Row" value="1" onClick={setInput}></input></Col>
      <Col xs={3}><input type="button" className="Row" value="2" onClick={setInput}></input></Col>
      <Col xs={3}><input type="button" className="Row" value="3" onClick={setInput}></input></Col>
      <Col xs={3}><input type="button" className="operators" value="+" onClick={operatorClick}></input></Col>
    </Row>
    <Row>
      <Col xs={6}><input type="button" className="zero" value="0" onClick={setInput}></input></Col>
      <Col xs={3}><input type="button" className="Row" value="." onClick={setInput}></input></Col>
      <Col xs={3}><input type="button" className="operators" value="=" onClick={equal}></input></Col>
    </Row>
  </Container>

    </div>
  );
}

export default App;
