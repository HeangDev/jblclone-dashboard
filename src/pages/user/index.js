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
    const [getUser, setGetUser] = useState()

    /*const fetchUser = async () => {
        await axios.get(`http://127.0.0.1:8000/api/user`).then(({ data }) => {
            setGetUser(data)
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

        /*await axios.delete(`http://127.0.0.1:8000/api/user/${id}`).then(({ data }) => {
            Swal.fire({
                title: 'ความสำเร็จ!',
                text: "ข้อมูลถูกลบ!",
                icon: "success",
                timer: '1500'
            })
            fetchUser()
        }).catch(({ err }) => {
            console.log(err)
        })*/
    }

    useEffect(() => {
        //fetchUser()
        if (!$.fn.dataTable.isDataTable("#tbl_user")) {
            $(document).ready(function () {
                setTimeout(function () {
                    $("#tbl_user").DataTable({
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
                            <h3 className="card-title">รายชื่อผู้ใช้</h3>
                        </div>
                        <div className="col-sm-7 text-sm-end">
                            <Link to="/user/create" className="btn btn-primary">เพิ่มผู้ใช้</Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <table className="table table-striped" id="tbl_user" style={{width: "100%"}}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>อิมเมจ</th>
                                <th>ชื่อ</th>
                                <th>ชื่อผู้ใช้</th>
                                <th>หมายเลขโทรศัพท์</th>
                                <th>สถานะ</th>
                                <th>ตัวเลือก</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>-</td>
                                <td>Sim Kimheang</td>
                                <td>admin</td>
                                <td>011263262</td>
                                <td>
                                    {/* <div className="badge text-bg-success">ใช้งานอยู่</div> */}
                                    <div className="badge text-bg-danger">ไม่ได้ผล</div>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-danger btn-sm me-2" onClick={() => handleDelete(1)} ><i className="bi bi-trash3"></i> ลบข้อมูล</button>
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