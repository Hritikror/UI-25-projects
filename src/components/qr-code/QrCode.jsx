import React, { useState } from 'react'
import QRCode from "react-qr-code";

const QrCode = () => {

    const [qrCode, setQrCode] = useState('');
    const [input, setInput] = useState('');


  return (
    <div style={{textAlign:'center'}}>
      <h1>QR Code Generator</h1>
      <div>
        <input type='text' name='qr-code' placeholder='Enter Your Value' onChange={(e)=>setInput(e.target.value)} value={input}></input>
        <button onClick={()=>{setQrCode(input);setInput('');}} disabled={input && input.trim() !== "" ? false : true}>Generate</button>
      </div>
      <div>
        <QRCode
            id='qr-code-value'
            value={qrCode}
            size={400} bgColor="#fff"
        />
      </div>
    </div>
  )
}

export default QrCode;
