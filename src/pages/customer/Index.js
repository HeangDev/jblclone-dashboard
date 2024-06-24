import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import axios from 'axios'

import $ from "jquery";
import "jquery/dist/jquery.min.js";
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css'
import 'datatables.net-bs5/js/dataTables.bootstrap5'
import 'datatables.net-responsive-bs5/css/responsive.bootstrap5.min.css'
import 'datatables.net-responsive-bs5/js/responsive.bootstrap5'

const List = () => {
    useEffect(() => {
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
                                    <button type="button" className="btn btn-danger btn-sm me-2"><i className="bi bi-trash3"></i> ลบข้อมูล</button>
                                    <button type="button" className="btn btn-info btn-sm"><i className="bi bi-pencil-square"></i> แก้ไขข้อมูล</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default List