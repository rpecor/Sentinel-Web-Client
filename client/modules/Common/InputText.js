import React from 'react'


export default React.createClass({
  updateValue: function(event) {
    this.props.updateValue(event.target.value);
  },
  render: function() {
    return (
      <div className="input-field">
        <label htmlFor={this.props.id}>{this.props.placeholder}</label>
          <input type={this.props.type} placeholder={this.props.placeholder} id={this.props.id} name={this.props.id}
          value={this.props.value}
          onChange={this.updateValue}
          />
      </div>
    )
  }
})
