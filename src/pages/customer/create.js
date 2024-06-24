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
                        <div className="col-12 col-md-6">
                            <label class="required form-label">ตั้งรหัสผ่าน</label>
                            <input
                                placeholder="" type="text" class="form-control" value=""
                            />
                        </div>
                        <div className="col-12 col-md-6">
                            <label class="form-label">ที่อยู่ปัจจุบัน</label>
                            <input
                                placeholder="" type="text" class="form-control" value=""
                            />
                        </div>
                        <div className="col-12 col-md-6">
                            <label class="form-label">บัญชีธนาคาร</label>
                            <select className="form-control">
                                <option value="ธนาคารไทยพาณิชย์ (SCB)">ธนาคารไทยพาณิชย์ (SCB)</option>
                                <option value="ธนาคาร กสิกรไทย (KBANK)">ธนาคาร กสิกรไทย (KBANK)</option>
                                <option value="ธนาคาร กรุงศรีอยุธยา (BAY)">ธนาคาร กรุงศรีอยุธยา (BAY)</option>
                                <option value="ธนาคาร กรุงไทย (KTB)">ธนาคาร กรุงไทย (KTB)</option>
                                <option value="ธนาคาร กรุงเทพ (BBL)">ธนาคาร กรุงเทพ (BBL)</option>
                                <option value="ธนาคาร ทหารไทย (TTB)">ธนาคาร ทหารไทย (TTB)</option>
                                <option value="ธนาคาร ธนชาติ (TBANK)">ธนาคาร ธนชาติ (TBANK)</option>
                                <option value="ธนาคาร ออมสิน (GSB)">ธนาคาร ออมสิน (GSB)</option>
                                <option value="ธนาคาร ยูโอบี (UOB)">ธนาคาร ยูโอบี (UOB)</option>
                                <option value="ธนาคาร ไอซีบีซี (ICBC)">ธนาคาร ไอซีบีซี (ICBC)</option>
                                <option value="ธนาคาร การเกษตรและสหกรณ์ธกส (BAAC)">ธนาคาร การเกษตรและสหกรณ์ธกส (BAAC)</option>                
                                <option value="ธนาคาร ซีไอเอ็มบี ไทย (CIMB)">ธนาคาร ซีไอเอ็มบี ไทย (CIMB)</option>
                                <option value="ธนาคาร อื่นๆ">ธนาคาร อื่นๆ</option>
                            </select>
                        </div>
                        <div className="col-12 col-md-6">
                            <label class="required form-label">หมายเลขบัญชี</label>
                            <input
                                placeholder="" type="text" class="form-control" value=""
                            />
                        </div>
                        <div className="col-12">
                            <label class="form-label">ข้อมูลอื่น</label>
                            <textarea class="form-control" rows={3} placeholder="ใส่คำอธิบาย"value=""></textarea>
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