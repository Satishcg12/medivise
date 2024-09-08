import CryptoJS from 'crypto-js'

const EsewaPayButton = ({amount ,tax_amount,total_amount,id, }: {amount: number,tax_amount: number,total_amount: number,id: string}) => {
    const uuid = Date.now().toString()
    const message = `total_amount=${amount},product_code=EPAYTEST`
    const secret = '8gBm/:&EnhH.1/q'

    const hash = CryptoJS.HmacSHA256(message, secret)
    const hashInBase64 = CryptoJS.enc.Base64.stringify(hash);


  return  <>
  <form action="https://rc-epay.esewa.com.np/api/epay/main/v2/form" method="POST">
    <input type="text" id="amount" name="amount" value={amount} required/>
    <input type="text" id="tax_amount" name="tax_amount" value ={tax_amount} required/>
    <input type="text" id="total_amount" name="total_amount" value={total_amount} required/>
    <input type="text" id="transaction_uuid" name="transaction_uuid" value={uuid} required/>
    <input type="text" id="product_code" name="product_code" value ="EPAYTEST" required/>
    <input type="text" id="product_service_charge" name="product_service_charge" value="0" required/>
    <input type="text" id="product_delivery_charge" name="product_delivery_charge" value="0" required/>
    <input type="text" id="success_url" name="success_url" value={`localhost:3000/paymentSuccess?id=${uuid}`} required/>
    <input type="text" id="failure_url" name="failure_url" value="https://google.com" required/>
    <input type="text" id="signed_field_names" name="signed_field_names" value="total_amount,transaction_uuid,product_code" required/>
    <input type="text" id="signature" name="signature" value={hashInBase64} required/>
    <input value="Submit" type="submit"/>
    </form>
  </> 
  
}

export default EsewaPayButton