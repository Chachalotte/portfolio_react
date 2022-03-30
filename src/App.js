import './App.css';
// import { Home } from '../src/Pages/Homes/home';
import ReactDOM from 'react-dom';
import headerBackground from '../src/Assets/header_background.jpg'
  function Home(props) {
    return (
      
    <div className="App-header" style={{ backgroundImage: `url(${headerBackground})` }}>
        <h1 class=" text-3xl font-bold underline">WELCOME</h1>
        <p class="title">I'M A {props.title}</p>
        <img src={headerBackground} alt="headerBackground" />
    </div>
    
    
    ) 
  };
  
  function propsTitle() {
    return (
      <div>
        <Home title="developer" />
        <Home title="graphist" />
      </div>
    );
  }
  
  ReactDOM.render(
    <propsTitle />,
    document.getElementById('root')
  );

  export default propsTitle;