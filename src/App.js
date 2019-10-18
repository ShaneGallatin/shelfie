import React from 'react';
import './App.css';
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import axios from 'axios';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      inventory: []
    }
  }

  componentDidMount(){
    axios.get("/api/inventory")
    .then(response => {
      console.log(response)
      this.setState({inventory: response.data})
    })
    .catch(err => {
      console.log(err);
    })
  }

  render(){
    return (
      <div className="App">
        <Dashboard inventory={this.state.inventory}/>
        <Form />
        <Header />
      </div>
    );

  }
}

export default App;
