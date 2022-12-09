import React, { Component } from 'react';

export class RegisterData extends Component {
    static displayName = RegisterData.name;

    constructor(props) {
        super(props);
       
        this.state = {
            Card_ID: "",
            Firstname: "",
            Lastname: "",
            DateOfBirth: "",
            Email: "",
            Address: "",
            PhoneNumber: "",
            CreatedDate: null,
            Person_ID: 0
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

        fetch("api/register/person", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)
        }).then(response => response.json())
            .then(data => {
                console.log(data);
                //window.location.href = '/';
            });
    }

    render() {
        return (
            <div>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label for="Card_ID" className="form-label">Card ID</label>
                        <input type="text" className="form-control" name="Card_ID" value={this.state.Card_ID} onChange={this.handleChange} placeholder="Card ID Number"/>
                    </div>
                    <div className="mb-3">
                        <label for="Firstname" className="form-label">First Name</label>
                        <input type="text" className="form-control" name="Firstname" value={this.state.Firstname} onChange={this.handleChange} />
                    </div>
                    <div className="mb-3">
                        <label for="Lastname" className="form-label">Last Name</label>
                        <input type="text" className="form-control" name="Lastname" value={this.state.Lastname} onChange={this.handleChange} />
                    </div>
                    <div className="mb-3">
                        <label for="DateOfBirth" className="form-label">Date of birth</label>
                        <input type="text" className="form-control" name="DateOfBirth" value={this.state.DateOfBirth} onChange={this.handleChange} placeholder="YYYY-MM-DD"/>
                    </div>
                    <div className="mb-3">
                        <label for="Email" className="form-label">Email</label>
                        <input type="text" className="form-control" name="Email" value={this.state.Email} onChange={this.handleChange} placeholder="yourmail@email.com" />
                    </div>
                    <div className="mb-3">
                        <label for="Address" className="form-label">Address</label>
                        <input type="text" className="form-control" name="Address" value={this.state.Address} onChange={this.handleChange} />
                    </div>
                    <div className="mb-3">
                        <label for="PhoneNumber" className="form-label">Phone number</label>
                        <input type="text" className="form-control" name="PhoneNumber" value={this.state.PhoneNumber} onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
            </div>
        );
    }
}
