import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="site-conotainer px-3 bg-green-400">
      <div className='flex items-center justify-between res'>
        <Link className='text-3xl text-slate-800 font-bold py-2' to="/">MyBooks</Link>
        <nav>
          <ul className='flex gap-3'>
            <li>
              <Link className='text-base font-medium text-white' to="/">Home</Link>
            </li>
            <li>
              <Link className='text-base font-medium text-white' to="/about">About</Link>
            </li>
            <li>
              <Link className='text-base font-medium text-white' to="/contact">Contact</Link>
            </li>
            <li>
              <Link className='text-base font-medium text-white' to="/login">Log in</Link>
            </li>
            <li>
              <Link className='text-base font-medium text-white' to="/signup">Sign up</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar