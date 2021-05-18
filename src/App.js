import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Category from './components/Category/Category'
import Subcategory from './components/Subcategory/Subcategory'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
      <Header/>
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/category' component={Category} />
        <Route path='/subcatergory' component={Subcategory} />
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
