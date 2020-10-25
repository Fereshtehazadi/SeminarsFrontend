import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import resebild from '../../img/resebild.jpg';


export default class Header extends Component {
    render() {
        return (
            <>
         <Nav/>     
        <div class="row">
    
            <div class="col-4  align-self-center">
                <div class="d-lg-none text-center"><h1>RF</h1></div>
                <div class="d-none d-lg-block"><h1>Reseförbundet</h1> </div>	
            </div>
            <div class="col-6">
            <img src={resebild} alt="resebild" className="img-fluid" />
            
            </div>   

        </div>
  </>              
            
        )
    }
}
