import logo from './logo.svg';
import './App.css';
import Menu from './components/MenuComponent1';
import { Component } from 'react';
import { DISHES } from './shared/dishes';
import { Navbar, NavbarBrand } from 'reactstrap';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render(){
    return(
      <div>
        <Navbar dark color="primary">

          <div className="container">
            <NavbarBrand href="/"> Resturant</NavbarBrand>
            
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
  
  
}

export default App;
