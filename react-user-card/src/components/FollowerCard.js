import React, { Component } from 'react';
import styled from 'styled-components';

const FollowersContainer = styled.div`
    background: rgba(255, 255, 255, 0.7);
    border-radius: 15px;
    display:flex;
    flex-wrap:wrap;
    padding: 3%;
    width: 40vw;
    margin: 2%;

    h1 {
        width: 100%;
    }
`
const ImgContainer = styled.div `
    width: 30%;
    display:flex;
    flex-direction: column;
    align-items:center;
    padding: 1%;
    height: 30%;

    img{
        width:70%;
        border-radius: 15px;
    }
`
class FollowerCard extends Component {
    state = {
        followers: [],
    }

    componentDidMount()  {
        this.setState({
            followers:this.props.followers
        })
    }

    render() {
        return(
            <FollowersContainer>
                 <h1>Check out my followers...</h1>
                {this.props.followers.map(follower => (
                    <ImgContainer>
                        <img src={follower.avatar_url} />
                        <h3>{follower.login}</h3>
                    </ImgContainer>
                ))}
            </FollowersContainer>
         
        )
    }
}

export default FollowerCard