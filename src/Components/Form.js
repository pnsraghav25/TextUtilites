import React,{useState} from 'react'

export default function Form(props) {
  const handleUpCLick =()=>{
    let newtext=text.toUpperCase();
    setText(newtext)
    props.showalert("Changed to Uppercase!!!","success")
  }
  const handleLowCLick =()=>{
    let newtext=text.toLowerCase();
    setText(newtext)
    props.showalert("Changed to Lowercase!!!","success")

  }
  const handleCopy =()=>{
    var text = document.getElementById("exampleFormControlTextarea1")
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showalert("Copied to Clipboard!!!","success")

  }
  const handleOnChange =(event)=>{
    setText(event.target.value);
  }
  const [text, setText] = useState('Enter text:');
  // const [text, setText] = useState('------------Result------------');
  return (
    <div>
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className={`form-label fw-bold fs-4 text-${props.mode === 'light'? 'dark':'light'}`}>{props.heading}</label>
            <textarea className="form-control" style={{backgroundColor: props.mode === 'light'? 'white':'#b4b7da'}} onChange={handleOnChange} id="exampleFormControlTextarea1" value={text} rows="10"></textarea>
            <button className="btn btn-primary m-3"onClick={handleUpCLick}>Convert to Uppercase</button>
            <button className="btn btn-primary m-3"onClick={handleLowCLick}>Convert to Lowercase</button>
            <button className="btn btn-primary m-3"onClick={handleCopy}>Copy Text to Clipboard</button>
            <div className={`container text-${props.mode === 'light'? 'dark':'light'}`}>
              <h1>Your Text Summary</h1>
              <p>Your Text contains {text.split(" ").length} words and {text.length} Characters</p>
            </div>
        </div>
    </div>
  )
}
