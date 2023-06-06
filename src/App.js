import './App.css';
import Input from './component/Input'
import Button from './component/Button'


function App() {
  return (
    <div> 
      <Input width="200px" height="40px" type="password"/>
      <Button width="200px" height="40px" bacground="red" color="black"/>
    </div>
  );
}

export default App;
