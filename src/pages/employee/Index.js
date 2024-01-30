import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import $ from "jquery";
import "jquery/dist/jquery.min.js";
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css'
import 'datatables.net-bs5/js/dataTables.bootstrap5'

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
                }, 500);
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
                    <div className="table-responsive-sm">
                        <table className="table table-striped" id="tbl_employee">
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

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default List