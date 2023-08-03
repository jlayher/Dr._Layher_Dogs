import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Body from './Components/Body/Body';

function App() {
  return (
    <div className="App">
      <Header />
      {/* loop over an array of cards.  Create a card for every dog */}
      <Body/>
      <Footer />
    </div>
  );
}

export default App;
