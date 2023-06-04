
import './App.css';
import {Button, ButtonText, ButtonoutLine} from './Button/Button';

function App() {
  return (
    <div>

<h1 className="text-3xl font-bold underline bg-stone-500">
      ARC Institution 
    </h1> 
      <br/><br/><br/>

    <Button lable='add'></Button><br/><br/>
    <ButtonoutLine lable='success'></ButtonoutLine> <br/><br/>
    <ButtonText lable='success'></ButtonText>


    </div>
    
  );
}

export default App;
