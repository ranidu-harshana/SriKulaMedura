import './Profile.css'

import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getReservationByBillNo} from "../../repository/reservationRespository";
import {payAmountOnline} from "../../repository/billingRepo";

const Profile = () => {
    const {billNo} = useParams()
    const navigate = useNavigate();
    const [reservationData, setReservationData] = useState({})
    const [payAmount, setPayAmount] = useState("")
    const [pay, setPay] = useState(false)

    useEffect(() => {
        getReservationByBillNo(billNo)
            .then(res => {
                if (res.status === 200) {
                    setReservationData(res.data)
                } else {
                    navigate('/login');
                }
            })
            .catch(() => {
                navigate('/login');
            })
    }, [billNo, navigate])

    console.log(reservationData)
    if(pay) {
        return <Payment id={reservationData.reservationId} amount={payAmount} pay={pay}/>
    }
    return (
        <>
            <div className="container justify-content-center">
                <div className="row mt-4 mb-4">
                    <div className={'tab-content-container-heading col-12'}>
                        <div className="row text-center mt-4">
                            <h2>Hi {reservationData?.customerName} </h2>
                        </div>
                        <div className="row">
                            <div className="col-6 d-flex justify-content-end">Due Amount </div>
                            <div className="col-6">Rs. {reservationData?.dueAmount}</div>
                        </div>
                        <div className="row">
                            <div className="col-6 d-flex justify-content-end">Bill Number </div>
                            <div className="col-6">{reservationData?.bill_number}</div>
                        </div>
                        <div className="row">
                            <div className="col-4"></div>
                            <div className="col-2 d-flex justify-content-end"><input type="text" className={'form-control-md'} value={payAmount} onChange={(e)=>setPayAmount(e.target.value)}/> </div>
                            <div className="col-2"><button className={'btn btn-md btn-success'} onClick={()=>setPay(true)}>Pay</button></div>
                            <div className="col-4"></div>
                        </div>
                    </div>
                </div>

                <div className={'row mt-4 mb-4 column-gap-4'}>
                    <div className={'tab-content-container-table col'}>
                        <table className="table table-hover">
                            <thead>
                            <tr>
                                <th scope="col"><b>#</b></th>
                                <th scope="col"><b>Amount</b></th>
                                <th scope="col"><b>Reason</b></th>
                                <th scope="col"><b>Date</b></th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                reservationData?.additionalPayments?.map((additionalPayment, index) => (
                                    <tr key={index}>
                                        <th scope="row">{additionalPayment?.id}</th>
                                        <td>{additionalPayment?.payment}</td>
                                        <td>{additionalPayment?.reason}</td>
                                        <td>{additionalPayment?.created_at}</td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>

                    <div className={'tab-content-container-table col'}>
                        <table className="table table-hover">
                            <thead>
                            <tr>
                                <th scope="col"><b>#</b></th>
                                <th scope="col"><b>Amount</b></th>
                                <th scope="col"><b>Date</b></th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                reservationData?.interimPayments?.map((interimPayment, index) => (
                                    <tr key={index}>
                                        <th scope="row">{interimPayment?.id}</th>
                                        <td>{interimPayment?.interim_payment}</td>
                                        <td>{interimPayment?.created_at}</td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;

const Payment = ({id, amount, pay}) => {
    const navigate = useNavigate();

    if (!pay) navigate('/login')

    const [paymentData, setPaymentData] = useState()
    const [city, setCity] = useState("")

    useEffect(() => {
        payAmountOnline(id, amount)
            .then((response) => {
                setPaymentData({...response.data})
            })
    }, [id, amount])

    let PAYHERE_RETURN_URL = "http://sample.com/return";
    return (<>
        <form method="post" action="https://sandbox.payhere.lk/pay/checkout">
            <input type="hidden" name="merchant_id" value={paymentData?.merchant_id || ""} readOnly/>
            <input type="hidden" name="return_url" value={PAYHERE_RETURN_URL} readOnly/>
            <input type="hidden" name="cancel_url" value="http://sample.com/cancel" readOnly/>
            <input type="hidden" name="notify_url" value="http://localhost:8080/api/v1/online-payment/notify_url" readOnly/>
            Item Details<br/>
            <input type="text" name="order_id" value={paymentData?.bill_number || ""} readOnly/><br/>
            <input type="text" name="items" value="Interim Payment" readOnly/><br/>
            <input type="text" name="currency" value="LKR" readOnly/><br/>
            <input type="text" name="amount" value={paymentData?.amount_payable || ""} readOnly/><br/>
            <br/><br/>Customer Details<br/>
            <input type="text" name="first_name" value={paymentData?.name || ""} readOnly/><br/>
            <input type="hidden" name="last_name" value="" readOnly/>
            <input type="hidden" name="email" value={paymentData?.email || ""} readOnly/><br/>
            <input type="text" name="phone" value={paymentData?.mobno || ""} readOnly/><br/>
            <input type="text" name="address" value={paymentData?.address || ""} readOnly/><br/>
            <input type="hidden" name="city" value={city} onChange={(e)=>setCity(e.target.value)}/><br/>
            <input type="hidden" name="country" value="Sri Lanka" readOnly/>
            <input type="hidden" name="hash" value={paymentData?.hash || ""} readOnly/>
            <input type="submit" value="Buy Now"/>
        </form>
    </>);
}

