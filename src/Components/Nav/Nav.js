import React, { Component } from 'react'
import MenuLink from '../MenuLink/menuLink'

export default class Nav extends Component {
    render() {
        return (
           
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container">
    
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarsExample07">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
        <MenuLink link="/" name="Main"/>
        </li>
        <li class="nav-item">
        <MenuLink link="/seminars" name="Seminars"/>
         </li>
      </ul>
    </div>

  </div>
</nav>
        )
    }
}
