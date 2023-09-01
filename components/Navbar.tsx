import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Link from 'next/link';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            < i className="d-inline-block align-text-top bi bi-cup-straw">
            Bar
            </i>
          </a>
          <div className='ms-auto p-2'>

          <Link href={'/'} className='p-1'>Menu</Link>
          <Link href={'/cart'}  className='p-1'>Cart</Link>
          <Link href={'/orders'} className='p-1'>Orders</Link>
          <Link href={'/addTopic'} className ='p-1'> Add Drink</Link>
          </div>
          
        </div>
      </nav>
    </div>
  )
}
