import React from 'react'
import './hero.css';
import styled from 'styled-components'


const MainHeading = styled.h1`
      font-family: 'Inter';
font-style: normal;
font-weight: 800;
font-size: 72px;
line-height: 77px;
color: #1D7E38;

`

function Hero() {
  return (
    <div className='hero_container'>

      <div className='hero_disc'>
           <MainHeading>ZENZELE</MainHeading>
      <p className='maindisc'> Zenzele is a community based insurance which seeks </p>
      <p>
        to enable low income communities to have access to <br/>  
        quality health care services
      </p>
      </div>
      <div className='hero_img'>

      </div>
    </div>
  )
}

export default Hero