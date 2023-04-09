import React from 'react'
import styled from 'styled-components'
import main from '../assets/images/main-alternative.svg'
import { Logo } from '../components'
import { Link } from 'react-router-dom'


const Landing = () => {
  return (
    <Wrapper>
    <nav>
    <Logo/>
    </nav>
      <div className='container page'>
          <div className='info'>
            <h1>Job <span>Tracking</span> App</h1>
            <p>Photovoltaic solar panels have limited distribution and use in Ethiopia due to high import   tariffs, lack of widespread financing arrangements, mismatch between PV-panel design and Ethiopian architectural design, the failure of available devices to target the essential needs and financial capabilities of rural and urban Ethiopians, and the absence of a local technical support network and coordinated </p>
      <Link to='/register' className='btn btn-hero'>Login/Register</Link>
      </div>
      <img src={main} alt="job Hunt" className='img main-img'/>
      </div>
    </Wrapper>
  )
}
const Wrapper=styled.main`
nav{
  width: var(--fluid-width);
  max-width: var(--max-width);
  margin: 0 auto;
  height: var(--nav-height);
  display: flex;
  align-items: center;
}
.page{
  min-height: calc(100vh- var(--nav-height));
  display: grid;
  align-items: center;
  margin-top: -3rem;
}
h1{
  font-weight: 700;
  span{
    color: var(--primary-500);
  }
}
  p{
    color: var(--grey-600);
  }
  .main-img{
    display: none;
  }
  @media(min-width:927px) {

    .page{
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img{
      display: block;
    }
  }
`

export default Landing
