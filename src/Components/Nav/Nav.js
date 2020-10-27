import React, { Component } from 'react'
import MenuLink from '../MenuLink/menuLink'

export default class Nav extends Component {
    render() {
        return (
           
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container">
    
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarsExample07">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
        <MenuLink link="/" name="Main"/>
        </li>
        <li className="nav-item">
        <MenuLink link="/seminars" name="Seminars"/>
         </li>
      </ul>
    </div>

  </div>
</nav>
        )
    }
}
