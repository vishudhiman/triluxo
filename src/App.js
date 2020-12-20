import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./pages/Home";
// cities
import Cities from "./pages/Cities";
import AddCity from "./components/Cities/AddCity";
import EditCity from "./components/Cities/EditCity";
import ViewCities from "./components/Cities/ViewCities";
// hotels
import Hotels from "./pages/Hotels";
import AddHotel from "./components/Hotels/AddHotel";
import EditHotel from "./components/Hotels/EditHotel";
import ViewHotels from "./components/Hotels/ViewHotels";
// Attractions
import Attractions from "./pages/Attractions";
import AddAttraction from "./components/Attractions/AddAttraction";
import EditAttraction from "./components/Attractions/EditAttraction";
import ViewAttractions from "./components/Attractions/ViewAttractions";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        <Switch>
          <Route path="/login" exact component={Login} />
        </Switch>
        <Switch>
          <Route path="/signup" exact component={SignUp} />
        </Switch>
        <Switch>
          <Route path="/cities" exact component={Cities} />
          <Route path="/cities/addCity" exact component={AddCity} />
          <Route path="/cities/editCity" exact component={EditCity} />
          <Route path="/cities/viewCities" exact component={ViewCities} />
        </Switch>
        <Switch>
          <Route path="/hotels" exact component={Hotels} />
          <Route path="/hotels/addHotel" exact component={AddHotel} />
          <Route path="/hotels/editHotel" exact component={EditHotel} />
          <Route path="/hotels/viewHotels" exact component={ViewHotels} />
        </Switch>
        <Switch>
          <Route path="/attractions" exact component={Attractions} />
          <Route
            path="/attractions/addAttraction"
            exact
            component={AddAttraction}
          />
          <Route
            path="/attractions/editAttraction"
            exact
            component={EditAttraction}
          />
          <Route
            path="/attractions/viewAttraction"
            exact
            component={ViewAttractions}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
