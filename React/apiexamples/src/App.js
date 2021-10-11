import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NewsSearch from './pages/NewsSearch';
import GetBreakingData from './breakingBad/GetBreakingData';
import GiphySearch from './giphyearch/GiphySearch';
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/newsSearch'  component={NewsSearch}/>
        <Route path='/breakingBad' component={GetBreakingData}/>
        <Route path='/giphy' component={GiphySearch}/>
      </Switch>
    </Router>
    
    
    </>
  );
}

export default App;
