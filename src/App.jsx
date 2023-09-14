import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';


function App() {

  function handleClick(){
    alert('button clicked');
  }

  const handleClick2=()=>{
    alert('button clicked2')
  }

  const addToNine=(num)=>{
    alert( num+6 );
  }
  return (
    <>

      <h1>React core concept 2</h1>
      

    <Friends></Friends>



    <Users></Users>



     <Team></Team>


      <Counter></Counter>


      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me2</button>
      <button onClick={()=>{alert('clickme3')}}>Click me3</button>

      {/* (vajailla) */}
      <button onClick={() =>addToNine(3)}>Three</button>
    
    </>
  )
}

export default App