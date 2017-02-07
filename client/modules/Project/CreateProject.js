import React from 'react'
import ReactDOM from 'react-dom'
import Select from 'react-select'
import InputText from './../Common/InputText'


export default React.createClass({
  getInitialState: function() {
    return {
      projectName: '',
      description: '',
      owner: '0',
      users: [],

    }
  },
  getAllUsersFromServer: function() {
    var _this = this;
    axios.get('/getAllUsers').then((result) => {
        var users = result.data.users.map((user) => {
          return ({value: user._id, label: user.firstName + " " + user.lastName});
        })
      _this.setState({
        users: users
      })
    })
  },
  componentDidMount: function() {
    this.getAllUsersFromServer();
  },
  updateProjectName: function(value) {
    this.setState({
      projectName: value
    });
  },
  updateDescription: function(value) {
    this.setState({
      description: value
    })
  },
  handleSelectMembers: function(value) {
    console.log(value);
    this.setState({
      members: value
    });
  },
  handleSelectOwner: function(object) {
    this.setState({
      owner: object.value
    })
  },
  handleSubmit: function(e) {
    e.preventDefault();
    axios.post('/project/postCreateProject', {
      projectName: this.state.projectName,
      description: this.state.description,
      owner: this.state.owner,
      members: this.state.members
    })
    .then(function (response) {
      console.log(response);
      swal("Successfully Created a project")
    })
    .catch(function (error) {
      console.log(error);
    });
  },
  render: function() {
    return (
      <div className="container top-margin-small-2">
        <h5 className="center-align top-margin-small-2">Create Project</h5>
        <div className="form-login top-margin-small-2">
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                  <InputText type="text" placeholder="Project Name" name="projectName" id="projectName"
                  value={this.state.projectName}
                  updateValue={this.updateProjectName}
                  handleSubmit={this.handleSubmit} />
              </div>
              <div className="row">
                  <InputText type="text" placeholder="Description" name="description" id="description"
                  value={this.state.description}
                  updateValue={this.updateDescription}
                  handleSubmit={this.handleSubmit} />
              </div>
              <div className="row">
                <label>Select Members</label>
                <Select name="select-members" multi={true} value={this.state.members} options={this.state.users} onChange={this.handleSelectMembers} />
              </div>
              <div className="row">
              <label>Select Owner</label>
                <Select name="select-owner" value={this.state.owner} options={this.state.users} onChange={this.handleSelectOwner} />
              </div>
              <br />
              <div className="row">
                <input type="submit" className="btn" />
              </div>
            </form>
        </div>
      </div>
    )
  }
});
