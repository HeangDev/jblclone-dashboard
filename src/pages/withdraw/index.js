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
    const [getWithdraw, setGetWithdraw] = useState()
    const [showWithdraw, setShowWithdraw] = useState(false);

    const handleCloseModal = () => {
        setShowWithdraw(false)
        clearErrors()
    }
    const handleOpenModal = () => {
        setShowWithdraw(true)
    }

    /*const fetchWithdraw = async () => {
        await axios.get(`http://127.0.0.1:8000/api/withdraw`).then(({ data }) => {
            setGetWithdraw(data)
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

        /*await axios.delete(`http://127.0.0.1:8000/api/withdraw/${id}`).then(({ data }) => {
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
        //fetchWithdraw()
        if (!$.fn.dataTable.isDataTable("#tbl_withdraw")) {
            $(document).ready(function () {
                setTimeout(function () {
                    $("#tbl_withdraw").DataTable({
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
                            <h3 className="card-title">เบิกเงิน</h3>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <table className="table table-striped" id="tbl_withdraw" style={{width: "100%"}}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>ชื่อ</th>
                                <th>หมายเลขโทรศัพท์</th>
                                <th>จำนวนเงิน</th>
                                <th>วันที่ถอน</th>
                                <th>สถานะ</th>
                                <th>ตัวเลือก</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Sim Kimheang</td>
                                <td>011263262</td>
                                <td>{currencyFormat(2000)}</td>
                                <td>01/01/2021</td>
                                <td><div className="badge text-bg-success">Working</div></td>
                                <td>
                                    <button type="button" className="btn btn-danger btn-sm me-2" onClick={() => handleDelete(1)} ><i className="bi bi-trash3"></i> ลบข้อมูล</button>
                                    <button type="button" className="btn btn-info btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="bi bi-pencil-square"></i> แก้ไขข้อมูล</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="modal fade" id="exampleModal">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <form autoComplete="off">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">เบิกเงิน</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label className="required form-label">จำนวนเงิน</label>
                                    <input
                                        placeholder="ใส่รจำนวนเงิน" type="text" className="form-control" value=""
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">สถานะ</label>
                                    <input
                                        placeholder="ใส่รสถานะ" type="text" className="form-control" value=""
                                    />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-light me-auto" data-bs-dismiss="modal">ปิดครับ</button>
                                <button type="button" className="btn btn-primary">ยืนยั่น</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default List