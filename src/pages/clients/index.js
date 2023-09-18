import React from 'react'
import Layout from '../../components/Layout'
import Intro from './Intro'
import ClientsList from './ClientsList'

const Client = () => {
  return (
    <Layout>
    <Intro />
    <ClientsList />
   </Layout>
  )
}

export default Client
