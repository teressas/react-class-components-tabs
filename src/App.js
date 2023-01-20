import React, { Component } from 'react';
import './style.css';
/*
2. (REDO) Given the following UI and HTML code, use React Class Components with 
TypeScript to implement the following features, while matching the styling as closely as 
possible. 
- By default, the London tab is selected and only its content is displayed. 
- When the user clicks on a tab, it is the only one that becomes highlighted, and only the 
corresponding content will be displayed.  

*/
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cities: [
        { name: "London", content: "London is the capital city of England." },
        { name: "Paris", content: "Paris is the capital of France." },
        { name: "Tokyo", content: "Tokyo is the capital of Japan." }
    ],
      selectedCity: { name: "London", content: "London is the capital city of England." }
    };
  }

  handleClick = (i) => {
    console.log(this.state.cities[i])
    this.setState((prevState) => ({
      selectedCity: this.state.cities[i]
      
    }));
    
  };
  render() {
    return (
      <div className="container">
        {/* {JSON.stringify(this.state.selectedCity.name)} */}
         <div className="tab">
          {this.state.cities.map((item,i) => (
            // console.log("item",item)

            <button key={i} onClick={(i) => this.setState({ selectedCity: item })} className={this.state.selectedCity.name == item.name ? 'active' : ''}>{item.name}</button>
          ))}
          
        </div>
        <div>
          {Object.entries(this.state.selectedCity).map(([key,value]) => (
            // console.log("item",item)
            <>
            {key == 'name' ? <h2>{value}</h2> : <p>{value}</p>}
          </>
          ))}
        </div>
      </div>
    );
  }
}

