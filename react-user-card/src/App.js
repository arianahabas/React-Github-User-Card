import React, { Component } from 'react';
import axios from 'axios'
import UserCard from './components/Usercard'
import FollowerCard from './components/FollowerCard';


class App extends Component {
  constructor() {
    super()
    this.state={
      user: [],
      followers: [],
    }
  }


  componentDidMount(){
    // fetch intial data
    axios.all ([
      axios.get(`https://api.github.com/users/arianahabas`),
      axios.get(`https://api.github.com/users/arianahabas/following`)
    ])
    .then(res => {
      console.log(res)
      console.log(res[0].data)
      this.setState({
        user: res[0].data, 
        followers: res[1].data
      });
      
    })
    .catch(err => {
      console.log(err)
    })

  }
  render() {
    return (
      <div>
        <UserCard user={this.state.user}  />
        <FollowerCard followers={this.state.followers} user={this.state.user} />
      </div>
    );
  }

}

export default App