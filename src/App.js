import React from 'react'
import './App.css';
import Listitems from './Listitems';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: '',
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItems = this.delete.bind(this);
  }
  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      }
    })
  }

  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if(newItem.text!==""){
      const newItems=[...this.state.items, newItem]
      this.setState({
        items:newItems,
        currentItem:{
          text:'',
          key:''
        }
      })
    }
  }

  delete(key){
    const filteredItems = this.state.items.filter(item =>
      item.key!==key);
      this.setState({
        item:filteredItems
      })
  }

  render(props) {
    return (
      <div className="App">
        <header>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input type="text" placeholder='Enter Text'
              value={this.state.currentItem.text}
              onChange={this.handleInput} />
            <button type="submit">Add</button>
            
          </form>
        </header>
        <Listitems items={this.state.items}
        deleteitem={this.deleteitem}></Listitems>
      </div>
    )
  }
}

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isClicked: false,
//       todo: [],
//       test: "",
//     };
//     //Fix the 'this' binding = HARD WAY
//     // this.handleClick = this.handleClick.bind(this);
//   }
//   // componentDidMount(){
//   //console.log("I mounted")
//   //}

//   componentDidUpdate() {
//     // console.log("After Update", this.state.isClicked);
//     console.log("Updated text:", this.state.text);
//   }

//   // this.setState({ isClicked: true, ....})
//   handleClick = () => {
//     console.log("Clicked");
//     // console.log("In function", this);
//     console.log(this.state.isClicked);
//     this.setState({
//       isClicked: !this.state.isClicked,
//     });
//     console.log("Before", this.state.isClicked);
//     // everytime you push your button it will be adding todos with your text input when clicked on the button
//   }

//   handleChange = (event) => {
//     console.log("event", event);
//     this.setState({
//       text: event.target.value,
//     })
//   }

// handleDelete = () => {
//   console.Log()
// }


//   render() {
//     return (
//       <div className="App">
//         <h1>TODO App</h1>
//         <input onChange={this.handleChange} />
//         <button onClick={this.handleClick}>Click me</button>
//       </div>
//     );
//   }
// }


export default App;


