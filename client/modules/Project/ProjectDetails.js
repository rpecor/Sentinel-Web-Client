import React from 'react';
import Panel from './../Common/Panel.js'

export default React.createClass({
    getInitialState: function() {
        return {
            project: {
                owner: {

                },
                members: []
            }
        };
    },
    getProject: function() {
      axios.post('/project/getProjectById', {
          id: this.props.params.projectId
      }).then(function(result) {
          this.setState({
             project: result.data.project
          });
      }.bind(this)).catch(function(err) {
          console.log(err);
      });
    },
    componentDidMount: function() {
        this.getProject();
    },
    renderMembersArray: function(members) {
        var newArray = [];
        newArray = members.map(function(member) {
            return <div className="chip" key={member._id}> {member.firstName} {member.lastName}</div>   
        })
    return newArray;
    },
    render: function() {
        return (
            <div className="container top-margin-small-2">
                <div className="row">
                    <div className="col l6">
                        <Panel>        
                            <div className="header">    
                                <h5>{this.state.project.name}</h5>
                            </div>
                            <div className="description">
                                <p>{this.state.project.description}</p>
                            </div>
                        </Panel>    
                    </div>
                    <div className="col l6">
                        <Panel>
                            <div className="owner">
                                    Owner: <div className="chip">
                                    {this.state.project.owner.firstName} {this.state.project.owner.lastName}
                                    </div>
                            </div>
                            <div className="members margin-top-small-1">
                                Members: {this.renderMembersArray(this.state.project.members)}
                            </div>
                        </Panel> 
                    </div>
                </div>
                <div className="row">
                    <div className="col l12">
                        <Panel>
                            <div className="updatesList">
                                <h6>Update</h6>
                            </div>
                        </Panel>
                    </div>
                </div>
            </div>
        )
    }
})