import React, { Component } from 'react'
import MenuLink from '../../MenuLink/menuLink'
import Seminar from '../../Seminar/Seminar'

export default class Seminars extends Component {  
    
    constructor() {
    super();
    this.state = { seminars: []};
  }

  componentDidMount() {
    this.fetchSeminars();
    console.log("test");
  }


    fetchSeminars() {
        fetch("https://localhost:44318/api/seminars/")
          .then((response) => response.json())
          .then((json) => this.setState({ seminars: json }));
    }
   
 render() {

    return (
        <>
             <div class="row">

<div class="col-12 bg-primary text-white">
<h2>Kommande seminarier</h2>
</div>
</div>
<div class="row resa-grid-row bg-light">

<div class="col-12">
SRF:s seminarier är öppna för alla, medlemmar deltar alltid utan kostnad eller till självkostnadspris. Vi förbehåller oss rätten att ställa in seminarier senast en vecka innan om vi inte har minst 10 deltagare anmälda. No show debiteras.

</div>
</div>

{ this.state.seminars.map((seminar) => (
    <Seminar seminar={seminar}/>

))}








            
        </>
    )
}
   
}
