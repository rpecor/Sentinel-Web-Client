import React from 'react'

export default React.createClass({

  render() {
    return (
      <div className={"col " + this.props.columns}>
        <div className="card" style={{height: this.props.height}}>
           <div className="card-content">
             <span className="card-title black-text">{this.props.title}</span>
             <p className="black-text">{this.props.children}</p>
           </div>
           <div className="card-action">
             {this.props.footer}
           </div>
         </div>
       </div>
    )
  }
})
