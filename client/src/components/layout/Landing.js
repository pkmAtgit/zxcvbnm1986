import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
 constructor(props){
  super(props)
  this.state = {
    lat:'',
    lang: ''
  }
 }

  
  showPosition(position) {
    console.log(position);
    
  }
  render() {
    navigator.geolocation.getCurrentPosition(this.showPosition);
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
            <div className="col-md-6 mt-5 ml-auto mr-auto">
            <form className="">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="button">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </form>
                   
            </div>
          </div>
      </div>
    );
  }
}

export default Landing;
