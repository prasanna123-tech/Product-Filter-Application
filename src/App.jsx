import React from 'react';
import { useState } from 'react';
import './form.css';
function App() {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleclick = (e) => {
    e.preventDefault();
    if (text === "" && password === "") {
      setError("Email and Password are required");
    }else if (!text.includes("@")) {
      setError("Enter a valid email");
    } else if (password.length < 6) {
      setError("Password must be > or equal to 6 characters");
    } else {
      setError("");
      alert("Form submitted successfully");
    } 
  };

  return (
    <div className="App">

      <form onSubmit={handleclick} className='form'>
        
        <span>Email :</span>
        <input type="email" placeholder="Enter your email" value={text} onChange={(e) => setText(e.target.value)} />
       
        <span>Password :</span>
        <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
        
        <button type="submit">Submit</button>
        <p className='err'>{error}</p>
      </form>
    </div>
  );
}
export default App;