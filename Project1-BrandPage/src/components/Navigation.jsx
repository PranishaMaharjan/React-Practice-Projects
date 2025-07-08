const Navigation=()=>{
  return (
    <div>
      <nav>
        <div className="logo">
          <img src="/logo/brand_logo.png" alt="logo"/>
        </div>

        <ul className="nav-ul">
          <li href="#">
            menu
          </li>
           <li href="#">
            location
          </li>
           <li href="#">
            about
          </li>
           <li href="#">
            contact
          </li>
        </ul>

        <button>Login</button>
      </nav>
    </div>
  )
}

export default Navigation;