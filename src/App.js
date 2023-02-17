import React, { useState } from "react";
import { Confirm } from "./components/Confirm";
import { Form } from "./components/Form";
import { Info } from "./components/Info";

function App() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [cvc, setCvc] = useState('');
  const [valid, setValid] = useState(false);



  return (
    <div className="wrapper">
      <Info name={name}
        number={number}
        month={month}
        year={year}
        cvc={cvc}
      />
      <div className="action">
        {
          valid ?

            <Confirm setValid={setValid} /> :

            <Form name={name} setName={setName}
              number={number} setNumber={setNumber}
              month={month} setMonth={setMonth}
              year={year} setYear={setYear}
              cvc={cvc} setCvc={setCvc}
              setValid={setValid}
              valid={valid}
            />
        }
      </div>
    </div >
  )
}

export default App;
