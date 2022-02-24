import React from 'react'
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3'
import './flutter.css'
export default function FlutterPayment() {
  const config = {
    public_key: 'FLWPUBK_TEST-fc565be8ee79208557a72a5425c9afe5-X',
    tx_ref: Date.now(),
    amount: 100,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'user@gmail.com',
      phonenumber: '07064586146',
      name: 'joel ugwumadu',
    },
    customizations: {
      title: 'my Payment Title',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  }

  const handleFlutterPayment = useFlutterwave(config)

  return (
    <div className='flutter'>
      <h1>Hello Test user</h1>

      <button
        className='bg-green-500'
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
              console.log(response)
              closePaymentModal() // this will close the modal programmatically
            },
            onClose: () => {},
          })
        }}
      >
        Payment with React hooks
      </button>
    </div>
  )
}
