import React, { Component } from 'react';



export default class SignUp extends Component {

    
    constructor(){
        super();
        this.state = { name: "", email: "", phone: "", company:"" };
      }
      
 
      showConfirmation(){
       window.location = '/Confirmation';
        //this.props.history.push('/Confirmation');
      }
      saveVisitor() {
        fetch("https://localhost:44318/api/Visitors", {
          method: "POST",
          body: JSON.stringify({
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            company: this.state.company,
            seminarId: parseInt(this.props.seminarId),
          }),
          headers: { "Content-type": "application/json; charset=UTF-8" },
//        });
        }).then(() => this.showConfirmation());
      }

    render() {
        return (
            <>
         <div className="row">
            <div className="col-12 bg-primary text-white">
            <h2>Anmälan</h2>
            </div>
        </div>

 <div className="row resa-grid-row">

        <div className="col-12">

                
            <div className="form-group">
                <label for="inputNamn">Namn</label>
                <input value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })} 
             type="text" className="form-control" id="inputNamn" placeholder="Ange namn"></input>

            </div>
         

            <div className="form-group">
                <label for="inputEmail">E-post</label>
                <input value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })} 
            type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Ange e-post"/>
                <small id="emailHelp" className="form-text text-muted">Vi kommer inte att dela din e-post med obehöriga.</small>
            </div>

            <div className="form-group">
                <label for="inputTelNummer">Telfonnummer</label>
                <input value={this.state.phone}
            onChange={(e) => this.setState({ phone: e.target.value })}
             type="text" className="form-control" id="inputTelNummer" placeholder="Ange tel nummer"/>
            </div>

            <div className="form-group">
                <label for="inputFötetag">Företag</label>
                <input value={this.state.company}
            onChange={(e) => this.setState({ company: e.target.value })}
                 type="text" className="form-control" id="inputFöretag" placeholder="Ange företag"/>
            </div>


            <button onClick={() => this.saveVisitor()} type="submit" className="btn btn-primary">Anmäl</button>
            

        </div>
</div>

            </>
        )
    }
}

