import React, {useState} from 'react'

export default function TextForm(props) {
    const[text,setText] = useState("");
    //in above line text is a state variable and we can change its value using the function based
    // component setText()
    const changeText = () =>{
        console.log("upperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "success");
    }
    const handleOnChnage = (event) =>{
        setText(event.target.value); //so that we can edit in the textArea  
    }
    // const wordCount = (text) => {
    //     let regx = /\s+\S+/;
    //     let numOfWords = text.split(regx);
    //     return numOfWords.length;
    // }
  return (
    <>
    <div className='container my-3' style = {{color : props.mode==='light'?'black':'white'}}>
        <h1>Enter Your Text</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} style = {{backgroundColor : props.mode==='light'?'white':'#2e4457', color:props.mode==='light'?'black':'white'}} onChange={handleOnChnage} id="textArea" rows="9"></textarea>
        </div>
        <button disabled = {text.length === 0} className="btn btn-outline-primary" onClick={changeText}>Convert to Upper Case</button>
    </div>
    <div className="container"style = {{color : props.mode==='light'?'black':'white'}}>
        <h2>Text Summary</h2>
        <p>{text.split(" ").filter((element) =>{return element.length!==0 }).length} words and {text.split(" ").filter((element) =>{return element.length!==0 }).length} characters.</p>
        <p>You can read the text in {0.008 * text.split(" ").filter((element) =>{return element.length!==0 }).length} seconds.</p>
        <h2>Preview</h2>
        <p>{text.length > 0?text:'Enter some Text to Preview'}</p>
    </div>
    </>
  )
}
