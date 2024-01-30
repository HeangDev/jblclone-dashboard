import React, { useState, useEffect } from 'react'

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import $ from "jquery";
import "jquery/dist/jquery.min.js";
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css'
import 'datatables.net-bs5/js/dataTables.bootstrap5'

const Index = () => {
    const [show, setShow] = useState(false);
    const handleCloseModal = () => {
        setShow(false)
    }
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
                            <h3 className="card-title">Department List</h3>
                        </div>
                        <div className="col-sm-7 text-sm-end">
                            <Button variant="primary" onClick={() => setShow(true)}>Add Department</Button>
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
                                    <th>Description</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Software Engineer I</td>
                                    <td>-</td>
                                    <td><div className="badge text-bg-success">Active</div></td>
                                    <td>
                                        <button type="button" className="btn btn-danger btn-sm me-lg-2"><i class="bi bi-trash3"></i> Delete</button>
                                        <button type="button" className="btn btn-info btn-sm"><i class="bi bi-pencil-square"></i> Edit</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Software Engineer II</td>
                                    <td>-</td>
                                    <td><div className="badge text-bg-danger">Unactive</div></td>
                                    <td>
                                        <button type="button" className="btn btn-danger btn-sm me-lg-2"><i class="bi bi-trash3"></i> Delete</button>
                                        <button type="button" className="btn btn-info btn-sm"><i class="bi bi-pencil-square"></i> Edit</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Modal centered show={show} onHide={handleCloseModal} animation={false}>
                <Form
                    autoComplete="off"
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Add Department</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group className="mb-3">
                            <Form.Label className="required">Name</Form.Label>
                            <Form.Control
                                type="text" placeholder="Enter Department Name"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea" rows={3} placeholder="Enter Department Description"
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="light me-auto" onClick={handleCloseModal}>Close</Button>
                        <Button variant="primary" type="submit">Save</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}

export default Index