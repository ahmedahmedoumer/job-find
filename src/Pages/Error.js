import { Link } from 'react-router-dom'
import img from '../assets/images/not-found.svg'
import Wrapper from '../assets/wrappers/ErrorPage'
const Error =()=>{
  return (
    <Wrapper className='full-page'>
    <div>
    <img src={img} alt='Not Found'/>
    <h3>ohh! Page Not Found</h3>
    <p>Sorry we can not find the page you  searched</p>
    <Link to='/'>Go Back To Dashboard</Link>
    </div>

    </Wrapper>
  )
}
export default Error;