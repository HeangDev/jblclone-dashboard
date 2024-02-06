import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import axios from 'axios'

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import $ from "jquery";
import "jquery/dist/jquery.min.js";
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css'
import 'datatables.net-bs5/js/dataTables.bootstrap5'
import 'datatables.net-responsive-bs5/css/responsive.bootstrap5.min.css'
import 'datatables.net-responsive-bs5/js/responsive.bootstrap5'
const SummaryLeaves = () => {
    const { register, handleSubmit, formState: {errors}, clearErrors } = useForm({criteriaMode: "all"});
    const [show, setShow] = useState(false);

    const handleCloseModal = () => {
        setShow(false)
        clearErrors()
    }

    useEffect(() => {
        if (!$.fn.dataTable.isDataTable("#tbl_summary")) {
            $(document).ready(function () {
                setTimeout(function () {
                    $("#tbl_summary").DataTable({
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
                            <h5 className="card-title">My Summary</h5>
                        </div>
                        <div className="col-sm-7 text-sm-end">
                            <Button variant="primary" onClick={() => setShow(true)}>Create New</Button>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <table className="table table-striped" id="tbl_summary" style={{width: "100%"}}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Leaves Type</th>
                                <th>Available</th>
                                <th>Taken</th>
                                <th>Entitled</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Annual leave</td>
                                <td>16</td>
                                <td>2</td>
                                <td>18</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default SummaryLeaves