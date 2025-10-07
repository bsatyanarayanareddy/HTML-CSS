import React,{useState} from "react";
function Box() {
    const [text,setText]=useState("satya");
    function callback(event){
        setText(event.target.value);
    }
  return <div className="Box">
    <input type="text" placeholder="Enter some text here" value={text} onChange={callback}/>
    <p>you entered :{text}</p>
    </div>;
}
export default Box;