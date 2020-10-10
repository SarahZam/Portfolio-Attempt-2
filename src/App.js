import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Sarah Zaman',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Experience', path: '/experience'},
        {title: 'Projects', path: '/projects'}
      ],
      home: {
        title: 'Hi. I\'m Sarah',
        subTile: 'Projects that make a difference',
        text: 'Checkout my projects below'
      },
      about: {
        title: 'Get to know me a little better'
      },
      projects: {
        title: 'Catch a glimpse of what I\'ll bring to your team'
      },
      experience: {
        title: 'My Work Experience'
      }
    }
  }

  render(){
    return (
        <div className="App">

        </div>
    );
  }

}

export default App;
