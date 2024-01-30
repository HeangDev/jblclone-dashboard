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

const Index = () => {
    const { register, handleSubmit, formState: {errors}, clearErrors } = useForm({criteriaMode: "all"});
    const [position, setPosition] = useState()
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('')
    const [show, setShow] = useState(false);

    const handleCloseModal = () => {
        setShow(false)
        clearErrors()
        setName('')
        setDescription('')
        setStatus('')
    }

    useEffect(() => {
        if (!$.fn.dataTable.isDataTable("#tbl_position")) {
            $(document).ready(function () {
                setTimeout(function () {
                    $("#tbl_position").DataTable({
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
                            <h5 className="card-title">Position List</h5>
                        </div>
                        <div className="col-sm-7 text-sm-end">
                            <Button variant="primary" onClick={() => setShow(true)}>Add Position</Button>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="table-responsive-sm">
                        <table className="table table-striped" id="tbl_position">
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
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Modal centered show={show} onHide={handleCloseModal} animation={false}>
                <Form
                    autoComplete="off"
                    onSubmit={handleSubmit(() => {
                        
                    })}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Add Position</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group className="mb-3">
                            <Form.Label className="required">Name</Form.Label>
                            <Form.Control
                                type="text" placeholder="Enter Position Name"
                                {...register("name", { required: 'Please Enter Position Name' })}
                                value={name}
                                onChange={(e) => {setName(e.target.value)}}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea" rows={3} placeholder="Enter Position Description"
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