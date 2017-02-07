import React from 'react'
import Project from './Project'

export default React.createClass({
  getInitialState: function() {
    return {
      rows: []
    }
  },
  getAllProjects: function() {
    var _this = this;
    axios.get('/project/getAllProjects').then((result) => {
      var rows = _.chunk(result.data.projects, 3);
      _this.setState({
        rows: rows
      });
    });
  },
  componentDidMount: function() {
    this.getAllProjects();
  },
  render() {
    return (
    <div className="container">
    {
       this.state.rows.map((row, index) => (
         <div key={index} className="row top-margin-small-2">
         {
           row.map((project) => {
             return <Project key={project._id} projectId={project._id} name={project.name}
             members={project.members}
             owner={project.owner.firstName + " " + project.owner.lastName}>{project.description}</Project>
           })
         }
         </div>
       ))
     }
    </div>
    )
  }
})
