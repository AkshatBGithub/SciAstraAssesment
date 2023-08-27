import './Navbar.css'
export default function Navbar() {

  return (
    
    <div className='navbar'>
        
      <ul className='navbar__list'>
        <li className="navbar__item">Home</li>
        <li className="navbar__item">Courses</li>
        <li className="navbar__item">Selection</li>
        <li className="navbar__item">Blocks</li>
        <li className="navbar__item">Materials</li>
        <li className="navbar__item">Contact Us</li>
        
      </ul>
      <div className="navbar__login">
        Login
      </div>
    </div>
    
  )

}