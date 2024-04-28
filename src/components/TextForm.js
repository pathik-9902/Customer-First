import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked")
        setText(text.toUpperCase())
    }

    const handleLowClick = () => {
        console.log("Lowercase was clicked")
        setText(text.toLowerCase())
    }

    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    }


    const [text, setText] = useState("");

    return (
        <div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter Your Text Below</label>
                <textarea className="form-control" value={text} style={{ color: props.mode === 'light' ? 'black' : 'white', backgroundColor: props.mode === 'light' ? 'white' : 'grey' }} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="6" placeholder='Enter Some Text Here'></textarea>
            </div>
            <button type="button" onClick={handleUpClick} className="btn btn-outline-primary mx-2">Upper Case</button>
            <button type="button" onClick={handleLowClick} className="btn btn-outline-primary mx-2">Lower Case</button>

            <div className="card-header my-4">
                <h2>Your Text Summary</h2>
            </div>

            <div className="container border p-2 mb-2">
                <ul className="list-group list-group-flush" >
                    <li className="list-group-item" style={{color: props.mode==='light'?'black':'white', backgroundColor: props.mode==='light'?'white':'grey'}}>Characters: {text.length}</li>
                    <li className="list-group-item" style={{color: props.mode==='light'?'black':'white', backgroundColor: props.mode==='light'?'white':'grey'}}>Words: {text.split(" ").length['']}</li>
                    <li className="list-group-item" style={{color: props.mode==='light'?'black':'white', backgroundColor: props.mode==='light'?'white':'grey'}}>Reading Time: {0.008 * text.length} Minutes</li>
                </ul>
            </div>

        </div>
    )
}