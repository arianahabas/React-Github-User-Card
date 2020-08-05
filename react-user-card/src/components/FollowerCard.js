import React, { Component } from 'react';
import styled from 'styled-components';

const FollowersContainer = styled.div`
    border: 3px solid green;
    display: flex;
    flex-direction: column;
    justify-content:space-evenly;
    align-items:center;
    padding: 3%;
    width: 50vw;
    margin: 2%;

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
                <h1>{this.props.user.name}'s Followers</h1>
                {this.props.followers.map(follower => (
                    <div>
                        <img src={follower.avatar_url} />
                        <h1>{follower.login}</h1>
                        <h2>{follower.name}</h2>
                    </div>
                ))}
            </FollowersContainer>
        )
    }
}

export default FollowerCard