import React, { Component } from 'react'

export default class SignUp extends Component {
    render() {
        return (
            <>
         <div class="row">
            <div class="col-12 bg-primary text-white">
            <h2>Anmälan</h2>
            </div>
        </div>

 <div class="row resa-grid-row">

        <div class="col-12">

                <form action="Bekraftelse.html">
            <div class="form-group">
                <label for="inputNamn">Namn</label>
                <input type="text" class="form-control" id="inputNamn" placeholder="Ange namn"></input>

            </div>

            <div class="form-group">
                <label for="inputEmail">E-post</label>
                <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Ange e-post"/>
                <small id="emailHelp" class="form-text text-muted">Vi kommer inte att dela din e-post med obehöriga.</small>
            </div>

            <div class="form-group">
                <label for="inputTelNummer">Telfonnummer</label>
                <input type="text" class="form-control" id="inputTelNummer" placeholder="Ange tel nummer"/>
            </div>

            <div class="form-group">
                <label for="inputFötetag">Företag</label>
                <input type="text" class="form-control" id="inputFöretag" placeholder="Ange företag"/>
            </div>


            <button type="submit" class="btn btn-primary">Anmäl</button>
            </form>

        </div>
</div>

            </>
        )
    }
}

