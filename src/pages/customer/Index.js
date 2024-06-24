import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import axios from 'axios'
import { useForm } from "react-hook-form";

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import $ from "jquery";
import "jquery/dist/jquery.min.js";
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css'
import 'datatables.net-bs5/js/dataTables.bootstrap5'
import 'datatables.net-responsive-bs5/css/responsive.bootstrap5.min.css'
import 'datatables.net-responsive-bs5/js/responsive.bootstrap5'

const List = () => {
    const { register, handleSubmit, formState: {errors}, clearErrors } = useForm({criteriaMode: "all"});
    const [showChangePassword, setShowChangePassword] = useState(false);

    const [getCustomer, setGetCustomer] = useState()

    const [passwords, setPasswords] = useState('')

    const handleCloseChangePassword = () => {
        setShowChangePassword(false)
        clearErrors()
        setPasswords('')
    }

    /*const fetchCustomer = async () => {
        await axios.get(`http://127.0.0.1:8000/api/customer`).then(({ data }) => {
            setGetCustomer(data)
        })
    }*/

    const handleDelete = async (id) => {
        const isConfirm = await Swal.fire({
            title: 'คุณต้องการที่จะลบ หรือไหม ?',
            text: "ถ้าลบแล้ว คุณจะเปลี่ยนกลับไม่ได้ นะค่ะ!!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'ลบข้อมูล !',
            cancelButtonText: 'ยกเลิกการลบ !'
        }).then((result) => {
            return result.isConfirmed
        })

        if (!isConfirm) {
            return;
        }

        /*await axios.delete(`http://127.0.0.1:8000/api/customer/${id}`).then(({ data }) => {
            Swal.fire({
                title: 'ความสำเร็จ!',
                text: "ข้อมูลถูกลบ!",
                icon: "success",
                timer: '1500'
            })
            fetchCustomer()
        }).catch(({ err }) => {
            console.log(err)
        })*/
    }

    useEffect(() => {
        //fetchCustomer()
        if (!$.fn.dataTable.isDataTable("#tbl_employee")) {
            $(document).ready(function () {
                setTimeout(function () {
                    $("#tbl_employee").DataTable({
                        pageLength: 10,
                        processing: true,
                        destroy: true,
                        responsive: true,
                        language: {
                            "emptyTable": "ไม่มีข้อมูลในตาราง",
                            "info": "แสดง _START_ ถึง _END_ จาก _TOTAL_ แถว",
                            "infoFiltered": "(กรองข้อมูล _MAX_ ทุกแถว)",
                            "infoThousands": ",",
                            "lengthMenu": "แสดง _MENU_ แถว",
                            "loadingRecords": "กำลังโหลดข้อมูล...",
                            "processing": "กำลังดำเนินการ...",
                            "zeroRecords": "ไม่พบข้อมูล",
                            "paginate": {
                                "first": "หน้าแรก",
                                "previous": "ก่อนหน้า",
                                "next": "ถัดไป",
                                "last": "หน้าสุดท้าย"
                            },
                            "search": "ค้นหา:",
                            "infoEmpty": "แสดงทั้งหมด 0 to 0 of 0 รายการ",
                        }
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
                            <h5 className="card-title">รายชื่อลูกค้า</h5>
                        </div>
                        <div className="col-sm-7 text-sm-end">
                            <Link to="/customer/create" className="btn btn-primary">เพิ่มลูกค้า</Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <table className="table table-striped" id="tbl_employee" style={{width: "100%"}}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>ชื่อลูกค้า</th>
                                <th>เบอร์ติดต่อฉุกเฉิน</th>
                                <th>บัญชีธนาคาร</th>
                                <th>ปริมาณ</th>
                                <th>ข้อมูลอื่น ๆ</th>
                                <th>สถานะ</th>
                                <th>ตัวเลือก</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Sim Kimheang</td>
                                <td>011263262</td>
                                <td>000000</td>
                                <td>2000</td>
                                <td>-</td>
                                <td><div className="badge text-bg-success">Working</div></td>
                                <td>
                                    <button type="button" className="btn btn-danger btn-sm me-2" onClick={() => handleDelete(1)}><i className="bi bi-trash3"></i> ลบข้อมูล</button>
                                    <button type="button" className="btn btn-warning btn-sm me-2" onClick={() => setShowChangePassword(true)}><i className="bi bi-key"></i> เปลี่ยนรหัสผ่าน</button>
                                    <button type="button" className="btn btn-success btn-sm me-2"><i className="bi bi-piggy-bank"></i> เงินฝาก</button>
                                    <button type="button" className="btn btn-light btn-sm me-2"><i className="bi bi-wallet2"></i> เบิกเงิน</button>
                                    <Link to="" className="btn btn-info btn-sm"><i className="bi bi-pencil-square"></i> แก้ไขข้อมูล</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <Modal centered show={showChangePassword} onHide={handleCloseChangePassword} animation={false}>
                <Form
                    autoComplete="off"
                    onSubmit={handleSubmit(() => {
                        const formData = new FormData()
                        formData.append('password', passwords)

                        axios.post(`http://127.0.0.1:8000/api/change_password`, formData).then(({data}) => {
                            console.log(data)
                            Swal.fire({
                                title: 'ความสำเร็จ!',
                                text: "ใส่ข้อมูลแล้ว!",
                                icon: "success",
                                timer: '1500'
                            })
                            setPasswords('')
                        }).catch(({err}) => {
                            console.log(err)
                        })
                    })}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>เปลี่ยนรหัสผ่าน</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group className="mb-3">
                            <Form.Label className="required">รหัสผ่านใหม่</Form.Label>
                            <Form.Control
                                {...register("password", { required: 'กรุณากรอกรหัสถอนเงิน.' })}
                                type="password" placeholder="ใส่รรหัสผ่านใหม่" id="password" value={passwords}
                                onChange={(e) => {setPasswords(e.target.value)}}
                            />
                            {errors.passwords && <Form.Control.Feedback type="invalid">{errors.passwords?.message}</Form.Control.Feedback>}
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="light me-auto" onClick={handleCloseChangePassword}>ปิดครับ</Button>
                        <Button variant="primary" type="submit">ยืนยั่น</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}

export default List