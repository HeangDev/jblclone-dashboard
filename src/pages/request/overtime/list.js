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

const ListOvertime = () => {
    const { register, handleSubmit, formState: {errors}, clearErrors } = useForm({criteriaMode: "all"});
    const [show, setShow] = useState(false);

    const handleCloseModal = () => {
        setShow(false)
        clearErrors()
    }
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
                            <Button variant="primary" onClick={() => setShow(true)}>Request Overtime</Button>
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
            <Modal centered show={show} onHide={handleCloseModal} animation={false}>
                <Form
                    autoComplete="off"
                    onSubmit={handleSubmit(() => {
                        
                    })}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Submit an Overtime Request</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group className="mb-3">
                            <Form.Label className="required">Date</Form.Label>
                            <Form.Control
                                type="date" placeholder="Enter Position Name"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="required">Duration</Form.Label>
                            <Form.Control
                                type="number" placeholder="Enter Duration"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="required">Reason</Form.Label>
                            <Form.Control
                                as="textarea" rows={3} placeholder="Enter Reason"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Status</Form.Label>
                            <Form.Select>
                                <option value="0">Planned</option>
                                <option value="1">Requested</option>
                            </Form.Select>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="light me-auto" onClick={handleCloseModal}>Close</Button>
                        <Button variant="primary" type="submit">Request Overtime</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}

export default ListOvertime