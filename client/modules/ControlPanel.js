import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
         <ul id="tabs-swipe-demo" className="tabs">
            <li className="tab col s3"><a href="#test-swipe-1">Blinds</a></li>
            <li className="tab col s3"><a className="active" href="#test-swipe-2">Lights</a></li>
            <li className="tab col s3"><a href="#test-swipe-3">Locks</a></li>
          </ul>
          <div id="test-swipe-1" className="col s12 blue">Test 1</div>
          <div id="test-swipe-2" className="col s12 red">Test 2</div>
          <div id="test-swipe-3" className="col s12 green">Test 3</div>
        <div className="container top-margin-small-1">
            <div className="row">
                <div className="col l12">
                    <h5>Control Panel</h5>
                </div>
            </div>
            <div className="row">
              <div className="col l6">
                <span className="ctrl-title-text">Light Control</span>
              </div>
              <div className="col l6">
                <span className="ctrl-title-text">Status</span>
              </div>
            </div>
            <div className="row">
              <div className="col l6">
                <div className="switch">
                <label>
                  Off
                  <input type="checkbox" />
                  <span className="lever"></span>
                  On
                </label>
              </div>
              </div>
              <div className="col l6">
                <span className="ctrl-text-c">Connected</span>
              </div>
            </div>
            <div className="row">
              <div className="col l6">
                <span className="ctrl-title-text">Blinds Control</span>
              </div>
              <div className="col l6">
                <span className="ctrl-title-text">Status</span>
              </div>
            </div>
            <div className="row">
              <div className="col l6">
                <div className="switch">
                <label>
                  Off
                  <input type="checkbox" />
                  <span className="lever"></span>
                  On
                </label>
              </div>
              </div>
              <div className="col l6">
                <span className="ctrl-text-not-c">Not Connected</span>
              </div>
            </div>
            <div className="row top-margin-med">
              <div className="col l6">
                <h4>Home Status</h4>
              </div>
              <div className="col l6">
                <h4 className="ctrl-text-c">Secure</h4>
              </div>
              
            </div>
        </div>
      </div>
    );
  }
})
