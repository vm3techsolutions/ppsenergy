import React from 'react'
import ContactBanner from './ContactBanner'
import RequestAQuote from '../home/RequestAQuote'
import MapAddress from './MapAddress'
import Adresses from './Adresses'

export default function page() {
  return (
    <>
    <ContactBanner/>
    <Adresses/>
    <RequestAQuote/>
    <MapAddress/>
    </>
  )
}
