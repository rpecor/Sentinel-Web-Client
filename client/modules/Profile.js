import React from 'react'
import Panel from './Common/Panel'

export default React.createClass({
  getInitialState: function() {
    return {
      user: {
        _id: ""
      }
    }
  },
  componentDidMount: function() {
    axios.get("/getLoggedInUser").then(function(result) {
      this.setState({
        user: result.data.user
      })
    }.bind(this));
  },

  render() {
    return (
      <div className="container top-margin-small-1">
        <div className="row">
          <div className="col l4">
            <h5>Profile</h5>
            <img src={"/resources/img/" + this.state.user._id +".jpg"} className="top-margin-small-0 z-depth-4 profile-picture" />
          </div>
          </div>
          <div className="row">
            <div className="col l12">
                Name: {this.state.user.firstName} {this.state.user.lastName}< br />
                Email: { this.state.user.email }<br />
                ID: { this.state.user._id }
            </div>
        </div>
      </div>
    )
  }
});
