import './App.css'
import Header from './component/Header'
import Body from './component/Body'
import Footer from './component/Footer'

function ChildComp() {
  return <div>child component</div>;
}

function Conunter() {
  let count = 0;
  return (
    <div>
      <p>Counter : {count}</p>
      <button onClick={() => {
        count++;
        console.log(count);
      }}
      > Increase
      </button>
    </div>
  );
}

function App() {
  return (
   <div className="App">
     <Conunter />
   </div>
 );
}
export default App
