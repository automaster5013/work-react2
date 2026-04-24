import './App.css'
import Header from './component/Header'
import Body from './component/Body'
import Footer from './component/Footer'

function App() {
  const name = "이정환";
  return (
    <div>
      <Header />
      <Body name={name} location={"부천시"}/>
      <Footer />
      </div>
  )
}

export default App
