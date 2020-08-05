import React, { Component } from 'react';
import styled from 'styled-components';


const UserContainer = styled.div`
    border: 3px solid red;
    display: flex;
    flex-direction: column;
    justify-content:space-evenly;
    align-items:center;
    padding: 3%;
    width: 50vw;
    margin: 2%;
`
const NameContainer = styled.div`
    text-align: center;
    border: 2px solid black;
    padding: 4%;
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