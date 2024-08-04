import React, { useRef, useState } from 'react';
import logo from '../ui/themes/giphy.gif';
import { Button } from '../ui/components/Button';
import '../ui/styles/App.css';
import Sidebar from '../ui/components/Sidebar';
import { handleSubmit } from '../data/getData'; 
import Card from '../ui/components/Card';


function App() {
  const formRef = useRef(null);
  const [data, setData] = useState(null);
  
  return (
    <div className="App">
      <Sidebar setData={setData}/>
      <header>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className='main'>
        <br/>
        <form className="form" ref={formRef} onSubmit={(event) => handleSubmit(event, formRef, setData)}>
          <h3>Qual o seu consumo mensal de energia ?</h3>
          <input type="text" id="valor" name="valor" required />
          <Button val={"Enviar"}  styleType={'submit-button'} />
        </form>
        <Card data={data}/> 
      </div>
    </div>
  );
}

export default App;
