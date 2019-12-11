import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import pythonData from './Data/python.json';
import javaData from './Data/java.json';

export default class App extends Component {
    state = {
        jobsData: []
    }
    componentDidMount() {
        this.mixLangdata();
    }
    mixLangdata = () => {
        var array1 = pythonData,
            array2 = javaData,
            result = [array1, array2]
                .reduce((r, a) => (a.map((a, i) => (r[i] = r[i] || []).push(a)), r), [])
                .reduce((a, b) => a.concat(b));

        console.log(result);
        this.setState({ jobsData: result })
    }
    render() {
        const { jobsData } = this.state;
        return (
            <div className="container-fluid">
                <h1 className="text-center my-4">Java and Python Jobs</h1>
                <div className="col-lg-12">
                    <table className="table table-bordered table-responsive">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Type</th>
                                <th>URL</th>
                                <th>Created At</th>
                                <th>Company</th>
                                <th>Company_Url</th>
                                <th>Location</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>How_to-apply</th>
                                <th>Company_Logo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {jobsData && jobsData.map((employee, i) => (
                                <tr key={i}>
                                    <td>{employee.id}</td>
                                        <td>{employee.type}</td>
                                        <td><a href={employee.url}> {employee.url}</a></td>
                                        <td>{employee.created_at}</td>
                                        <td>{employee.comapany}</td>
                                        <td><a href={employee.company_url} >{employee.company_url}</a></td>
                                        <td>{employee.location}</td>
                                        <td>{employee.title}</td>
                                        <td>
                                        <div dangerouslySetInnerHTML={{ __html: employee.description }}></div>
                                    </td>
                                        <td>{employee.how_to_apply}</td>
                                        <td>{employee.company_logo !== null? 
                                        <img width="100" height="60" src={employee.company_logo} alt={employee.company} />
                                        :
                                        <img width="100" height="60" src={employee.company_logo} alt={employee.company} />
                                        }</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}