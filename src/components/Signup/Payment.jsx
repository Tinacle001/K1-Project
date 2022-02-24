import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Payment.css'
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3'
import { getUser } from '../../utils/common'
import logo from '../../img/logo_new.png'
const Payment = () => {
  const user = getUser()
  const month = new Date().getMonth()
  // console.log(user, month)
  // Boluwaji12345
  // devcentng@gmail.com,
  const config = {
    public_key: 'FLWPUBK_TEST-39aa884a8a9cc49067e9124c30edd0e9-X',
    tx_ref: Date.now(),
    amount: 900,
    name: 'K1 De Ultimate Monthly Subscription plan',
    interval: 'monthly',
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: user.username + '@gmail.com',
      phonenumber: '+2348131609892',
      name: user.name,
    },
    customizations: {
      title: 'K1 De Ultimate Subscription',
      description: `Suscription plan for the month of ${month}`,
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  }

  const handleFlutterPayment = useFlutterwave(config)
  return (
    <div className='payment'>
      <div className='payment_container'>
        <div className='payment_box'>
          <h1>Set up your Payment</h1>
          <p className='font-bold'>
            Your membership starts as soon as you set up payment No commitments.
            Cancel online anytime
          </p>
          <p className='font-bold mt-3 text-center'>
            Additional bank fees may apply.
          </p>
          <p className='italic text-center'>
            By checking the checkbox below, you agree to our Terms of Use,
            Privacy Statement. You may cancel at any time to avoid future
            charges.
          </p>
          <label class='md:w-2/3 block text-gray-500 font-bold'>
            <input className='mr-2' type='checkbox' />
            <span className='text-sm captcha text-black'>
              <Link to='#' className='decoration-black'>
                Terms of Use
              </Link>
            </span>
          </label>
          {/* <Link to='/welcome'>
            <button className='payment_btn'>Sign Up</button>
          </Link> */}
          <button
            className='payment_btn'
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
            Start Membership
          </button>
        </div>
      </div>
    </div>
  )
}

export default Payment
