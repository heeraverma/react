import "@fontsource/roboto";
import './App.css';
import './header.css';
import Header from './Header';
import Body from './Body';


function App() {
  return (
    <div className="App">
      <div className="back-image">
        <Header />
        <Body />
      </div>
    </div>
  );
}

export default App;
