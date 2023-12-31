import React from 'react'
import Layout from '../../components/Layout'
import Address from './Address'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <Layout>
    <div className='grid grid-cols-2 px-32 gap-20 mt-20 sm:grid-cols-1 sm:p-5'>
           <Address />
           <ContactForm />

    </div>
   </Layout>
  )
}

export default Contact
