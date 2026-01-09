import './navbar.css'

export default function WebNavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><a href="#">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Projects</a></li>
        <li><a href="">Resume</a></li>
      </ul>
    </nav>
  )
}