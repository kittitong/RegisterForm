import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

export class RegisterCompany extends Component {
    static displayName = RegisterCompany.name;

    constructor(props) {
        super(props);

        this.state = {
            Tax_ID: "",
            CompanyName: "",
            Email: "",
            Address: "",
            PhoneNumber: "",
            Person_Card_ID: "",
            Person_Firstname: "",
            Person_Lastname: "",
            Person_DateOfBirth: "",
            Person_Email: "",
            Person_Address: "",
            Person_PhoneNumber: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        let company = {
            Company_ID: 0,
            Tax_ID: this.state.Tax_ID,
            CompanyName: this.state.CompanyName,
            Email: this.state.Email,
            Address: this.state.Address,
            PhoneNumber: this.state.PhoneNumber,
            ContactPerson_ID: 0,
            CreatedDate: null,
            Person_ID: 0,
            Person: {
                Card_ID: this.state.Person_Card_ID,
                Firstname: this.state.Person_Firstname,
                Lastname: this.state.Person_Lastname,
                DateOfBirth: this.state.Person_DateOfBirth,
                Email: this.state.Person_Email ? this.state.Person_Email : this.state.Email,
                Address: this.state.Person_Address ? this.state.Person_Address : this.state.Email,
                PhoneNumber: this.state.Person_PhoneNumber ? this.state.Person_PhoneNumber : this.state.PhoneNumber,
                CreatedDate: null,
                Person_ID: 0
            }
        };
        fetch("api/register/company", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(company)
        }).then(response => response.json())
            .then(data => console.log(data));
    }

    render() {
        return (
            <div>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label for="CompanyName" className="form-label">Company name</label>
                        <input type="text" className="form-control" name="CompanyName" value={this.state.CompanyName} onChange={this.handleChange} />
                    </div>
                    <div className="mb-3">
                        <label for="Tax_ID" className="form-label">Taxt ID</label>
                        <input type="text" className="form-control" name="Tax_ID" value={this.state.Tax_ID} onChange={this.handleChange} />
                    </div>
                    <div className="mb-3">
                        <label for="Email" className="form-label">Email</label>
                        <input type="text" className="form-control" name="Email" value={this.state.Email} onChange={this.handleChange} />
                    </div>
                    <div className="mb-3">
                        <label for="Address" className="form-label">Address</label>
                        <input type="text" className="form-control" name="Address" value={this.state.Address} onChange={this.handleChange} />
                    </div>
                    <div className="mb-3">
                        <label for="PhoneNumber" className="form-label">Phone number</label>
                        <input type="text" className="form-control" name="PhoneNumber" value={this.state.PhoneNumber} onChange={this.handleChange} />
                    </div>
                    <Paper>
                        <h3>Contact person</h3>
                        <div className="mb-3">
                            <label for="Person_Card_ID" className="form-label">Card ID</label>
                            <input type="text" className="form-control" name="Person_Card_ID" value={this.state.Person_Card_ID} onChange={this.handleChange} />
                        </div>
                        <div className="mb-3">
                            <label for="Person_Firstname" className="form-label">First Name</label>
                            <input type="text" className="form-control" name="Person_Firstname" value={this.state.Person_Firstname} onChange={this.handleChange} />
                        </div>
                        <div className="mb-3">
                            <label for="Person_Lastname" className="form-label">Last Name</label>
                            <input type="text" className="form-control" name="Person_Lastname" value={this.state.Person_Lastname} onChange={this.handleChange} />
                        </div>
                        <div className="mb-3">
                            <label for="Person_DateOfBirth" className="form-label">Date of birth</label>
                            <input type="text" className="form-control" name="Person_DateOfBirth" value={this.state.Person_DateOfBirth} onChange={this.handleChange} placeholder="YYYY-MM-DD" />
                        </div>
                        <div className="mb-3">
                            <label for="Person_Email" className="form-label">Email</label>
                            <input type="text" className="form-control" name="Person_Email" value={this.state.Person_Email} onChange={this.handleChange} placeholder="yourmail@email.com" />
                        </div>
                        <div className="mb-3">
                            <label for="Person_Address" className="form-label">Address</label>
                            <input type="text" className="form-control" name="Person_Address" value={this.state.Person_Address} onChange={this.handleChange} />
                        </div>
                        <div className="mb-3">
                            <label for="Person_PhoneNumber" className="form-label">Phone number</label>
                            <input type="text" className="form-control" name="Person_PhoneNumber" value={this.state.Person_PhoneNumber} onChange={this.handleChange} />
                        </div>
                     </Paper>
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
            </div>
        );
    }
}
