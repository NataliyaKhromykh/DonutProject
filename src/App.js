import After from './After';
import './App.css';
import Dishes from './Components/DishesComponents/Dishes';
import AllCategories from './Components/Filters/AllCategories';
import Header from './Header';
import MainPage from './MainPage';



function App() {
  return (
    <div className="App">
      <div className='mainFP'>
      <Header/>
      <MainPage/>
    </div>
    <div>
      <After/>
    </div>
    <AllCategories/>
<div className='test'>
  <Dishes/>
</div>
    </div>
  );
}

export default App;

