import React, { useState, useEffect } from 'react'

import $ from "jquery";
import "jquery/dist/jquery.min.js";
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css'
import 'datatables.net-bs5/js/dataTables.bootstrap5'
import 'datatables.net-responsive-bs5/css/responsive.bootstrap5.min.css'
import 'datatables.net-responsive-bs5/js/responsive.bootstrap5'

const ListOvertime = () => {
    useEffect(() => {
        if (!$.fn.dataTable.isDataTable("#tbl_list")) {
            $(document).ready(function () {
                setTimeout(function () {
                    $("#tbl_list").DataTable({
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
                            <h5 className="card-title">My Overtime Requests</h5>
                        </div>
                        <div className="col-sm-7 text-sm-end">
                            
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <table className="table table-striped" id="tbl_list" style={{width: "100%"}}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Date</th>
                                <th>Duration</th>
                                <th>Reason</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>01/01/2025</td>
                                <td>8</td>
                                <td>Annual Leave</td>
                                <td><div className="badge text-bg-warning">Requested</div></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>01/01/2025</td>
                                <td>3</td>
                                <td>Annual Leave</td>
                                <td><div className="badge text-bg-success">Accepted</div></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ListOvertime