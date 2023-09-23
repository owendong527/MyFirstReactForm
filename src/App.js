import { useState } from "react";
import SubmitButton from "./components/SubmitButton";
// import './App.css';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState({ name: "", email: "" });

  const handleSubmit = () => {
    setData({ name, email });
  };
  return (
    <div className="App">
      <h1>My First React Form</h1>
      <div className="input-area">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name :
            </label>
            <br></br>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <br></br>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Email :
            </label>
            <br></br>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <SubmitButton  handleSubmit={handleSubmit}/>
          
        </form>
      </div>
      <div className="output-area">
        <p>{data.name}</p>
        <p>{data.email}</p>
      </div> 
    </div>
  );
}

export default App;
