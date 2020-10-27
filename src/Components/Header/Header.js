import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import resebild from '../../img/resebild.jpg';


export default class Header extends Component {
    render() {
        return (
            <>
         <Nav/>     
        <div className="row">
    
            <div className="col-4  align-self-center">
                <div className="d-lg-none text-center"><h1>RF</h1></div>
                <div className="d-none d-lg-block"><h1>Reseförbundet</h1> </div>	
            </div>
            <div className="col-6">
            <img src={resebild} alt="resebild" className="img-fluid" />
            
            </div>   

        </div>
  </>              
            
        )
    }
}
