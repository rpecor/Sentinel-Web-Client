import React from 'react'
import Card from './../Common/Card'

export default React.createClass({
  addLinkToTitle: function(name, projectId) {
  return (<a href={"/#/project/"+ projectId} >{name}</a>);
  },
  modifyFooter: function(owner, members) {
    return (
      <div>
        <div>
          Owner: <div className="chip">{owner}</div>
        </div>
        <div>
          Members: {members.map((member, index) => {
              return <div className="chip" key={member._id}>{member.firstName + " " + member.lastName }</div>
          })}
        </div>
      </div>
    )
  },
  render() {
    return (
      <Card height="275px" columns="m4" 
      title={this.addLinkToTitle(this.props.name, this.props.projectId)} 
      footer={this.modifyFooter(this.props.owner, this.props.members)}>
        {this.props.children}
      </Card>
    )
  }
})
