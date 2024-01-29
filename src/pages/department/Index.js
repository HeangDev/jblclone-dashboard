import React, { useState, useEffect } from 'react'

import $ from "jquery";
import "jquery/dist/jquery.min.js";
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css'
import 'datatables.net-bs5/js/dataTables.bootstrap5'

const Index = () => {
    useEffect(() => {
        if (!$.fn.dataTable.isDataTable("#tbl_department")) {
            $(document).ready(function () {
                setTimeout(function () {
                    $("#tbl_department").DataTable({
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
                            <h3 className="card-title">Department List</h3>
                        </div>
                        <div className="col-sm-7 text-sm-end">
                            <button type="button" className="btn btn-primary">Add Department</button>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="table-responsive-sm">
                        <table className="table table-striped" id="tbl_department">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
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

export default Index