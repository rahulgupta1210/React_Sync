import React from 'react';
import './App.css';
import User from './users/User';
import Form from './users/form';

// function App() {
//   return (
//     <div className="App">
//     <Users/>
//     </div>
//   );
// }
const testData = [
  { name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook" },
  { name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu" },
  { name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook" },
];

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = testData;
  }

 
  render() {
    return (
      <div>
        <Form/>
        <div className="App-main">This is the main header</div>
        <User profiles={this.state} />
      </div>
    )
  }
}



export default App;
