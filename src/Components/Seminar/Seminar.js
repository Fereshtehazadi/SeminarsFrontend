import React, { Component } from 'react'
import MenuLink from '../MenuLink/menuLink'


export default class Seminar extends Component {
    
    render() {
        var date = new Date(this.props.seminar.date);
       // var dateString = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDay() + " " + date.getHours() + ":" + date.getMinutes();
       var dateString= date.toLocaleString('sv-SE');
       var linkText = "/SignUp/?id=" + this.props.seminar.id;
       return (
            <>
                <div className="row resa-grid-row bg-light text-dark">
                    <div className= "col-sm">
                    <h4>{this.props.seminar.name}</h4>
                   {this.props.seminar.description}<br/>
        <b>Datum och plats:</b> {dateString}, {this.props.seminar.plats}<br/>
                   
                     
                    <br/>
                    <div className= "text-center"> 

                    <MenuLink  link={linkText} name="Anmälan"/>
                    </div>
                   
                    </div>
                
                </div>
            </>
        )
    }
}
