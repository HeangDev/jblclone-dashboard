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
        if (!$.fn.dataTable.isDataTable("#tbl_position")) {
            $(document).ready(function () {
                setTimeout(function () {
                    $("#tbl_position").DataTable({
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
                            <h3 className="card-title">Position List</h3>
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
            <Modal centered show={show} onHide={handleCloseModal} animation={false}>
                <Form
                    autoComplete="off"
                >
                    <Modal.Header closeButton>
                        <Modal.Title>ប្រភេទនៃការហាត់</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

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