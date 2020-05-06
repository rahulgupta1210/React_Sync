import React, { Component } from 'react';
import './../App.css';

class Users extends Component {
  render() {
    const profile = this.props;
    return (
      <div className="github-profile">
        <img className="img" src={profile.avatar_url} />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    )
  }
}

export default Users;