import React, { Component } from 'react';
import axios from 'axios'
import UserCard from './components/UserCard'
import FollowerCard from './components/FollowerCard';
import styled from 'styled-components'
import img from '../src/background.jpg'


const Container = styled.div`
  background-image: url(${img});
  display: flex;
`

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
      <Container>
        <UserCard user={this.state.user}  />
        <FollowerCard followers={this.state.followers}/>
      </Container>
    );
  }

}

export default App