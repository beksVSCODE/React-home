import './App.css';
import Todos from './component/Todos'

function App() {
  const todos = [
    {
        title: 'Go to School!',
        isCompleted: false
    },
    {
        title: 'Buy milk!',
        isCompleted: true
    },
    {
        title: 'Drive a Car!',
        isCompleted: false
    },
    {
      title: 'Get good mark!',
      isCompleted: true
  },
  {
    title: 'Learn English!',
    isCompleted: false
  },
  
]
  return (
    <div> 
      <Todos data={todos}/>
    </div>
  );
}

export default App;
