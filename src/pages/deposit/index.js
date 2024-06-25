import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'
import { useForm } from "react-hook-form";

import { currencyFormat } from '../../utils/Formatter'

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
    const [withdrawCode, setWithdrawCode] = useState('')
    const [amount, setAmount] = useState('')
    const [description, setDescription] = useState('')
    const [deposit, setDeposit] = useState()
    const [show, setShow] = useState(false);

    const handleCloseModal = () => {
        setShow(false)
        clearErrors()
        setWithdrawCode('')
        setAmount('')
        setDescription('')
    }

    /*const fetchDeposit = async () => {
        await axios.get(`http://127.0.0.1:8000/api/deposit`).then(({ data }) => {
            setDeposit(data)
        })
    }*/

    const handleDelete = async (id) => {
        const isConfirm = await Swal.fire({
            title: 'คุณต้องการที่จะลบหรือไหม?',
            text: "ถ้าลบแล้ว คุณจะเปลี่ยนกลับไม่ได้ นะค่ะ!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'ลบข้อมูล',
            cancelButtonText: 'ยกเลิกการลบ'
        }).then((result) => {
            return result.isConfirmed
        })

        if (!isConfirm) {
            return;
        }

        /*await axios.delete(`http://127.0.0.1:8000/api/deposit/${id}`).then(({ data }) => {
            Swal.fire({
                title: 'ความสำเร็จ!',
                text: "ข้อมูลถูกลบ!",
                icon: "success",
                timer: '1500'
            })
            fetchWithdraw()
        }).catch(({ err }) => {
            console.log(err)
        })*/
    }

    useEffect(() => {
        //fetchDeposit()
        if (!$.fn.dataTable.isDataTable("#tbl_deposit")) {
            $(document).ready(function () {
                setTimeout(function () {
                    $("#tbl_deposit").DataTable({
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
                            <h3 className="card-title">เงินฝาก</h3>
                        </div>
                        <div className="col-sm-7 text-sm-end">
                            <Button variant="primary" onClick={() => setShow(true)}>เพิ่มเงินฝาก</Button>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <table className="table table-striped" id="tbl_deposit" style={{width: "100%"}}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>รหัสถอนเงิน</th>
                                <th>จำนวนเงิน</th>
                                <th>คำอธิบาย</th>
                                <th>วันที่ฝาก</th>
                                <th>ตัวเลือก</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>000000</td>
                                <td>2000</td>
                                <td>-</td>
                                <td>01/01/2021</td>
                                <td>
                                    <button type="button" className="btn btn-danger btn-sm me-2"><i className="bi bi-trash3" onClick={() => handleDelete(1)} ></i> ลบข้อมูล</button>
                                    <button type="button" className="btn btn-info btn-sm"><i className="bi bi-pencil-square"></i> แก้ไขข้อมูล</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Modal centered show={show} onHide={handleCloseModal} animation={false}>
                <Form
                    autoComplete="off"
                    onSubmit={handleSubmit(() => {
                        const formData = new FormData()
                        formData.append('withdrawCode', withdrawCode)
                        formData.append('amount', amount)
                        formData.append('description', description)

                        axios.post(`http://127.0.0.1:8000/api/deposit`, formData).then(({data}) => {
                            console.log(data)
                            Swal.fire({
                                title: 'ความสำเร็จ!',
                                text: "ใส่ข้อมูลแล้ว!",
                                icon: "success",
                                timer: '1500'
                            })
                            setWithdrawCode('')
                            setAmount('')
                            setDescription('')
                        }).catch(({err}) => {
                            console.log(err)
                        })
                    })}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>เพิ่มเงินฝาก</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group className="mb-3">
                            <Form.Label className="required">รหัสถอนเงิน</Form.Label>
                            <Form.Control
                                {...register("withdrawCode", { required: 'กรุณากรอกรหัสถอนเงิน.' })}
                                type="text" placeholder="ใส่รหัสถอนเงิน" id="withdrawCode" value={withdrawCode}
                                onChange={(e) => {setWithdrawCode(e.target.value)}}
                            />
                            {errors.withdrawCode && <Form.Control.Feedback type="invalid">{errors.withdrawCode?.message}</Form.Control.Feedback>}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="required">จำนวนเงิน</Form.Label>
                            <Form.Control
                                {...register("withdrawCode", { required: 'กรุณากรอกจำนวนเงิน.' })}
                                type="text" placeholder="ใส่จำนวนเงิน" id="amount" value={amount}
                                onChange={(e) => {setAmount(e.target.value)}}
                            />
                            {errors.amount && <Form.Control.Feedback type="invalid">{errors.amount?.message}</Form.Control.Feedback>}
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>คำอธิบาย</Form.Label>
                            <Form.Control
                                as="textarea" rows={3} placeholder="ใส่คำอธิบาย" id="description" value={description}
                                onChange={(e) => {setDescription(e.target.value)}}
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="light me-auto" onClick={handleCloseModal}>ปิดครับ</Button>
                        <Button variant="primary" type="submit">ยืนยั่น</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}

export default List