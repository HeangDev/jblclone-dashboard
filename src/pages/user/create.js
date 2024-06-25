import React from 'react'
import { Link } from 'react-router-dom';

const create = () => {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <div className="row align-items-center">
                        <div className="col-sm-5">
                            <h5 className="card-title">เพิ่มผู้ใช้</h5>
                        </div>
                        <div className="col-sm-7 text-sm-end">
                            <Link to="/user" className="btn btn-primary">รายชื่อผู้ใช้</Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <form className="row g-3" autoComplete="off">
                        <div className="col-12 col-md-6">
                            <label className="required form-label">ชื่อลูกค้า</label>
                            <input
                                placeholder="ใส่รชื่อลูกค้า" type="text" className="form-control" value=""
                            />
                        </div>
                        <div className="col-12 col-md-6">
                            <label className="required form-label">เบอร์ติดต่อฉุกเฉิน</label>
                            <input
                                placeholder="ใส่รเบอร์ติดต่อฉุกเฉิน" type="text" className="form-control" value=""
                            />
                        </div>
                        <div className="col-12 col-md-6">
                            <label className="required form-label">ตั้งรหัสผ่าน</label>
                            <input
                                placeholder="" type="text" className="form-control" value=""
                            />
                        </div>
                        <div className="col-12 col-md-6">
                            <label className="form-label">ที่อยู่ปัจจุบัน</label>
                            <input
                                placeholder="" type="text" className="form-control" value=""
                            />
                        </div>
                        <div className="d-flex justify-content-end">
                            <button type="submit" className="btn btn-success">ประหยัด</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default create