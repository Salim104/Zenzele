import React from 'react'
import Navbar from '../Components/Navbar.js'
import styled  from 'styled-components'
import Hero from '../Components/Hero.js'


const Wrapper_gl = styled.section`
       padding-inline: 2rem;
       background-color:  #F5F5F5;
       padding-block:0.2rem;
`
const Wrapper_g = styled.section`
       padding-inline: 2rem;
       background-color:  #CDDEA8;
       padding-block:0.2rem;
`

function home() {
  return (
    <>
    <Wrapper_gl>
       <Navbar></Navbar>
    </Wrapper_gl>

    <Wrapper_g>
     <Hero></Hero>
    </Wrapper_g>
    </>
  )
}

export default home