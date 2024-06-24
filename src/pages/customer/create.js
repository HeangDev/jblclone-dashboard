import React from 'react'
import { Link } from 'react-router-dom';

const create = () => {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <div className="row align-items-center">
                        <div className="col-sm-5">
                            <h5 className="card-title">เพิ่มลูกค้า</h5>
                        </div>
                        <div className="col-sm-7 text-sm-end">
                            <Link to="/customer" className="btn btn-primary">รายชื่อลูกค้า</Link>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <form className="row g-3" autoComplete="off">
                        <div className="col-12 col-md-6">
                            <label class="required form-label">ชื่อลูกค้า</label>
                            <input
                                placeholder="ใส่รชื่อลูกค้า" type="text" class="form-control" value=""
                            />
                        </div>
                        <div className="col-12 col-md-6">
                            <label class="required form-label">เบอร์ติดต่อฉุกเฉิน</label>
                            <input
                                placeholder="ใส่รเบอร์ติดต่อฉุกเฉิน" type="text" class="form-control" value=""
                            />
                        </div>
                        <div className="col-12">
                            <label class="form-label">ข้อมูลอื่น ๆ</label>
                            <textarea class="form-control" rows={3} placeholder="ใส่คำอธิบาย"value=""></textarea>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default create