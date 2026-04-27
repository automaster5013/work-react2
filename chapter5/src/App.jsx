import './App.css'
import Header from './component/Header'
import Body from './component/Body'
import Footer from './component/Footer'

function ChildComp() {
  return <div>child component</div>;
}

function App() {
  // const bodyProps = {
  //   name: "이정환", 
  //   location: "부천시", 
  //   favorList: ["파스타", "빵", "떡볶이"], 
   return (
    <div className="App">
      <Header />
      <Body>
        <ChildComp />
      </Body> 
      <Footer />
      </div>
  );
}
export default App
