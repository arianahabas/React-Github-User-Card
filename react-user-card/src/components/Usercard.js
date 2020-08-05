import React, { Component } from 'react';
import styled from 'styled-components';


const UserContainer = styled.div`
    background: rgba(255, 255, 255, 0.7);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content:space-evenly;
    align-items:center;
    padding: 5%;
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