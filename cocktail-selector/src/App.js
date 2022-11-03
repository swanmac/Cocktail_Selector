import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Nav from './components/Nav'
import './App.css';

function App() {
  
  return (
    <div className="App">
    <div>
      <Header/>
    </div>

    <div>
      <Nav/>
  </div>

  <div>
      <Main/>
  </div>

  <div>
    <Footer/>
  </div>


  </div>
  );
}

export default App;
