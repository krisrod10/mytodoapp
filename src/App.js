import React from 'react'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
      todo: [],
      test: "",
    };
    //Fix the 'this' binding = HARD WAY
    // this.handleClick = this.handleClick.bind(this);
  }
  // componentDidMount(){
  //console.log("I mounted")
  //}

  componentDidUpdate() {
    // console.log("After Update", this.state.isClicked);
    console.log("Updated text:", this.state.text);
  }

  // this.setState({ isClicked: true, ....})
  handleClick = () => {
    console.log("Clicked");
    // console.log("In function", this);
    console.log(this.state.isClicked);
    this.setState({
      isClicked: !this.state.isClicked,
    });
    console.log("Before", this.state.isClicked);
    // everytime you push your button it will be adding todos with your text input when clicked on the button
  }

  handleChange = (event) => {
    console.log("event", event);
    this.setState({
      text: event.target.value,
    })
  }

handleDelete = () => {
  console.Log()
}


  render() {
    return (
      <div className="App">
        <h1>TODO App</h1>
        <input onChange={this.handleChange} />
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}


export default App;
