import React from 'react'

export default React.createClass({

  render() {
    return (
        <div className="card" style={this.props.style}>
            <div className="card-content">
                {this.props.children}
           </div>
        </div>
    )
  }
})
