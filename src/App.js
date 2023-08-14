import { useState } from 'react';
import './App.css';
import Card from './Components/Card';
import Form from './Components/Form';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import Register from './Components/Register';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
function App() {
  const [mode,setMode] = useState('light')
  const [alert,setAlert] = useState(null)
  const showAlert= (message,type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }
  const togglemode = () =>{
    if(mode === 'light')
    {
      setMode('dark')
      document.body.style.backgroundColor = '#0d1031'
      showAlert("Dark Mode is enabled!!!","success")
    }
    else
    {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode is enabled!!!","success")
    }
  }
  return (
    <>
    <Router>
      <Navbar mode={mode} toggleMode={togglemode} />
      <Alert alert={alert} type="Success"/>
      <div className="container my-3">
        <Routes>
          <Route path="/card" element={<Card  mode={mode}/>}></Route>
          <Route path="/Register" element={<Register  mode={mode}/>}></Route>
          <Route path="/" element={<Form showalert={showAlert} heading="Enter the text"  mode={mode}/>}></Route>
        </Routes>
      </div>
    </Router>
    </>
  );
}
export default App;