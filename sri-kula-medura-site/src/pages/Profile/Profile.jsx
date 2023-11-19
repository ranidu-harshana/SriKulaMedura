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
            .catch(err => {
                navigate('/login');
            })
    }, [billNo, navigate])

    console.log(reservationData)
    if(pay) {
        return <Payment id={reservationData.id} amount={payAmount}/>
    }
    return (
        <>
            <div className="container">
                <div className="row text-center">
                    Hi {reservationData?.customer?.name}
                </div>
                <input type="text" value={payAmount} onChange={(e)=>setPayAmount(e.target.value)}/>
                <button onClick={()=>setPay(true)}>Pay</button>
            </div>
        </>
    );
}

export default Profile;

const Payment = ({id, amount}) => {
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

