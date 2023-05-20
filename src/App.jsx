import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
const App = () =>{

  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer  greeting="Compra en línea. Encuentra tus productos favoritos."/>
    </div>
  );
};

export default App;
