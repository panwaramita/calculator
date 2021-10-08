import './App.css';
import { useEffect,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col,Button} from 'react-bootstrap';
function App() {
  const [inputValues,setinputValues]=useState("0");
  const [preValue,setPreValue]=useState("");
  const [curValue,setCurValue]=useState("");
  const [op,setOp]=useState("");
  const [initial,setInitial]=useState(" ");
  const [operatorType,setOperatorType]=useState("");
  const setInput=(e)=>{
    if(inputValues.includes(".") && e.target.value===".") return;
    if(initial===" ")
    {
      setinputValues("");
      setInitial("1");
      setinputValues(e.target.value);
    }
    else
    {
 setinputValues(inputValues+e.target.value);
    }
    if(op!=="")
    {
      setinputValues(e.target.value);
        setOp("");
      // alert(inputValues)
      // if(inputValues==="")
      // setinputValues(e.target.value);
      // else
      //  setinputValues(inputValues+e.target.value);
    }
  }
  const percentage=(e)=>{
    const perValue=String(parseFloat(inputValues)/100);
          setinputValues(perValue);
  }
  const equal=async(e)=>{
    switch (operatorType) {
      case "+":
        const plusValue=String(parseFloat(preValue)+parseFloat(inputValues));
        setinputValues(plusValue);
        break;
        case "-":
        const minusValue=String(parseFloat(preValue)-parseFloat(inputValues));
        setinputValues(minusValue);
        break;
        case "/":
        const divValue=String(parseFloat(preValue)/parseFloat(inputValues));
        setinputValues(divValue);
        break;
        case "X":
        const multiValue=String(parseFloat(preValue)*parseFloat(inputValues));
        setinputValues(multiValue);
        break;
      default:
        break;
    }
  }
  const operatorClick=(e)=>{
    setPreValue(inputValues);
    setOp(e.target.value);
    setOperatorType(e.target.value);
  }
  const clear=(e)=>{
    setInitial(" ");
    setinputValues("0");
    setPreValue("");
  }

  const plusMinus=(e)=>{
    if(inputValues.includes("-"))return;
    setinputValues("-"+inputValues);
  }
  useEffect(()=>{

  },[]);
  return (
   
    <div className="App">
    <input type="text" className="inputValue" value={inputValues}></input>
    <Container>
    <Row>
      <Col xs={3}><input type="button" className="Row" value="AC" onClick={clear}></input></Col>
      <Col xs={3}><input type="button" className="Row" value="+/-" onClick={plusMinus}></input></Col>
      <Col xs={3}><input type="button" className="Row" value="%" onClick={percentage}></input></Col>
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
