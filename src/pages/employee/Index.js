import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import axios from 'axios'

import $ from "jquery";
import "jquery/dist/jquery.min.js";
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css'
import 'datatables.net-bs5/js/dataTables.bootstrap5'
import 'datatables.net-responsive-bs5/css/responsive.bootstrap5.min.css'
import 'datatables.net-responsive-bs5/js/responsive.bootstrap5'

const List = () => {
    useEffect(() => {
        if (!$.fn.dataTable.isDataTable("#tbl_employee")) {
            $(document).ready(function () {
                setTimeout(function () {
                    $("#tbl_employee").DataTable({
                        pageLength: 10,
                        processing: true,
                        destroy: true,
                        responsive: true,
                    });
                }, 0);
            });
        }
    }, [])
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <div className="row align-items-center">
                        <div className="col-sm-5">
                            <h3 className="card-title">Employee List</h3>
                        </div>
                        <div className="col-sm-7 text-sm-end">
                            <Link to="/employee/create" className="btn btn-primary">Add Employee</Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <table className="table table-striped" id="tbl_employee" style={{width: "100%"}}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Gender</th>
                                <th>Phone Number</th>
                                <th>Email</th>
                                <th>Hire Date</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Sim Kimheang</td>
                                <td>Male</td>
                                <td>011263262</td>
                                <td>simkimheang4@gmail.com</td>
                                <td>01/01/2021</td>
                                <td><div className="badge text-bg-success">Working</div></td>
                                <td>
                                    <button type="button" className="btn btn-danger btn-sm me-2"><i className="bi bi-trash3"></i> Delete</button>
                                    <button type="button" className="btn btn-info btn-sm"><i className="bi bi-pencil-square"></i> Edit</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default List