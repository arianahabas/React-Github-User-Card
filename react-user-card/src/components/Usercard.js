import React, { Component } from 'react';
import styled from 'styled-components';


const UserContainer = styled.div`
    background: rgba(255, 255, 255, 0.7);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content:space-evenly;
    align-items:center;
    padding: 4%;
    width: 55vw;
    margin: 2%;
    height: 100vh;
`
const NameContainer = styled.div`
    text-align: center;
    padding: 4%;

    img{
        border-radius: 15px;
        width:80%;
    }
    
`

const SearchBar = styled.input`
  border: 3px solid black;
  border-radius: 15px;
  margin: 2% 8%;
  width: 70%;
  height:7%;
  font-family: 'Recursive', sans-serif;
`


class UserCard extends Component {
    state = {
        user: [],
    }

    componentDidMount()  {
        this.setState({
            user:this.props.user,
        }) 
    }

    render() {
        return(
            <UserContainer>
                 
                <NameContainer>
                <SearchBar type="text" placeholder="Search.."></SearchBar>
                    <h1>{this.props.user.name}</h1>
                    <h3>GitHub @ {this.props.user.login}</h3>
                    <h4>📍 {this.props.user.location}</h4>
                    <h4> ⚬ {this.props.user.bio} ⚬</h4>
                    <img src={this.props.user.avatar_url}/>
                </NameContainer>
            </UserContainer>
        )
    }
}

export default UserCard