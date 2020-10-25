import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MenuLink extends Component {
  render() {
    return <div className="menuLink">
      <Link className="nav-link" to={this.props.link}>{this.props.name}</Link>
    </div>
  }
}
