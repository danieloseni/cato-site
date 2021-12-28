import 'css/style.scss'

import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom';

import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';
import Dashboard from 'components/dashboard/Dashboard';
import Register from 'components/register/Register';


function App() {
  return (
    <Router>
            <Header />
                <Switch>
                    <Route path = "/" exact element = {<Dashboard />} />
                    <Route path = "/register/*" element = {<Register />} />
                    {/* <Route path = "/register/participant" element = {<Register />} /> */}
                    {/* <Route path = "/organizers" component = {Organizers} /> */}
                </Switch>

                {/* <Route exact path= "/register" component = {Register} /> */}

            {/* <Footer /> */}
       </Router>
  );
}

export default App;
