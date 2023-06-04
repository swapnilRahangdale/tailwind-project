
import './App.css';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
//import {Button, ButtonText, ButtonoutLine} from './Button/Button';

import { Calendar } from 'primereact/calendar';
import { useState } from 'react';

function App() {
  //2nd
  const [date, setDate] = useState<any>(null);
//3rd
  const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
  return (

    <div>
       <div className="card flex justify-content-center">
            <Button label="Check" icon="pi pi-check" />
            <br/><br/>
            <Calendar value={date} onChange={(e) => setDate(e.value)} />

            <div className="card flex justify-content-center">
            <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                placeholder="Select a City" className="w-full md:w-14rem" />
        </div>
        
        </div>

    </div>

//     <div>

// <h1 className="text-3xl font-bold underline bg-stone-500">
//       ARC Institution 
//     </h1> 
//       <br/><br/><br/>

//     <Button lable='add'></Button><br/><br/>
//     <ButtonoutLine lable='success'></ButtonoutLine> <br/><br/>
//     <ButtonText lable='success'></ButtonText>


//     </div>
    
  );
}

export default App;
