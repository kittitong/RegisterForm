import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';


export class Home extends Component {
    static displayName = Home.name;
    constructor(props) {
        super(props)
        this.state = {
            UserPersonData: [],
            UserCompanyData: []

        }
    }
    componentDidMount() {
        axios.get('api/register/user-person').then(response => {
            console.log(response.data);
            this.setState({
                UserPersonData: response.data.person,
                UserCompanyData: response.data.company
            });
        });
    }

    render() {
        console.log(this.state.UserPersonData);
        return (
            <React.Fragment>
            <Paper>
                <h2>Registered Person</h2>
                <TableContainer name="UserPerson" component={Paper}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="right">Card ID</TableCell>
                                <TableCell align="right">First name</TableCell>
                                <TableCell align="right">Last name</TableCell>
                                <TableCell align="right">Date Of birth</TableCell>
                                <TableCell align="right">Email</TableCell>
                                <TableCell align="right">Address</TableCell>
                                <TableCell align="right">Phone number</TableCell>
                                <TableCell align="right">Created date</TableCell>
                            
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                this.state.UserPersonData.map((p, index) => {
                                    return <TableRow key={index}>
                                        <TableCell align="right">{p.card_ID}</TableCell>
                                        <TableCell align="right">{p.firstname}</TableCell>
                                        <TableCell align="right">{p.lastname}</TableCell>
                                        <TableCell align="right">{p.dateOfBirth}</TableCell>
                                        <TableCell align="right">{p.email}</TableCell>
                                        <TableCell align="right">{p.address}</TableCell>
                                        <TableCell align="right">{p.phoneNumber}</TableCell>
                                        <TableCell align="right">{p.createdDate}</TableCell>
                                    </TableRow>
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                </Paper>
                <br />
            <Paper>
                <h2>Registered Company</h2>
                <TableContainer name="UserCompany" component={Paper}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                    <TableCell align="right">Tax ID</TableCell>
                                    <TableCell align="right">Company name</TableCell>
                                    <TableCell align="right">Email</TableCell>
                                    <TableCell align="right">Address</TableCell>
                                    <TableCell align="right">Phone number</TableCell>
                                    <TableCell align="right">Created date</TableCell>
                                    <TableCell align="right">Contact First name</TableCell>
                                    <TableCell align="right">Contact Last name</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                this.state.UserCompanyData.map((p, index) => {
                                    return <TableRow key={index}>
                                        <TableCell align="right">{p.tax_ID}</TableCell>
                                        <TableCell align="right">{p.companyName}</TableCell>
                                        <TableCell align="right">{p.email}</TableCell>
                                        <TableCell align="right">{p.address}</TableCell>
                                        <TableCell align="right">{p.phoneNumber}</TableCell>
                                        <TableCell align="right">{p.createdDate}</TableCell>
                                        <TableCell align="right">{p.person.firstname}</TableCell>
                                        <TableCell align="right">{p.person.lastname}</TableCell>
                                    </TableRow>
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                </Paper>
            </React.Fragment>
        );
    }
}
