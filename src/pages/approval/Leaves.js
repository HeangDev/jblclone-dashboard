import React, { useState, useEffect } from 'react'

import $ from "jquery";
import "jquery/dist/jquery.min.js";
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css'
import 'datatables.net-bs5/js/dataTables.bootstrap5'

const Leaves = () => {
    useEffect(() => {
        if (!$.fn.dataTable.isDataTable("#tbl_leaves")) {
            $(document).ready(function () {
                setTimeout(function () {
                    $("#tbl_leaves").DataTable({
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
                            <h5 className="card-title">Leave Requests Submitted</h5>
                        </div>
                        <div className="col-sm-7 text-sm-end">
                            
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="table-responsive-sm">
                        <table className="table table-striped" id="tbl_leaves">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Duration</th>
                                    <th>Type</th>
                                    <th>Status</th>
                                    <th>Requested</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Sim Kimheang</td>
                                    <td>01/01/2025 (Morning)</td>
                                    <td>01/15/2025 (Afternoon)</td>
                                    <td>1 Day</td>
                                    <td>Annual Leave</td>
                                    <td><div className="badge text-bg-warning">Requested</div></td>
                                    <td>01/29/2024</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>John Doe</td>
                                    <td>01/01/2025 (Morning)</td>
                                    <td>01/01/2025 (Morning)</td>
                                    <td>0.5 Half-Day</td>
                                    <td>Annual Leave</td>
                                    <td><div className="badge text-bg-success">Accepted</div></td>
                                    <td>01/29/2024</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Leaves