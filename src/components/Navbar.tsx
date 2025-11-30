import { NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'
import { useState } from 'react'

export default function Navbar() {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const showHamburger = ['/', '/landing2', '/landing3', '/app'].includes(location.pathname)
  return (
    <nav className="nav">
      <div className="nav__left">
        {showHamburger && (
          <button className="hamburger" aria-label="Open menu" onClick={() => setOpen(true)}>
            <span/>
            <span/>
            <span/>
          </button>
        )}
        <div className="nav__brand">Flite</div>
      </div>
      <div className="nav__links">
        <NavLink to="/app" className={({ isActive }: { isActive: boolean }) => isActive ? 'link active' : 'link'}>App</NavLink>
        <NavLink to="/" className={({ isActive }: { isActive: boolean }) => isActive ? 'link active' : 'link'}>Values</NavLink>
        <NavLink to="/landing2" className={({ isActive }: { isActive: boolean }) => isActive ? 'link active' : 'link'}>Portfolio</NavLink>
        <NavLink to="/landing3" className={({ isActive }: { isActive: boolean }) => isActive ? 'link active' : 'link'}>My Profile</NavLink>
      </div>
      {showHamburger && open && (
        <>
          <div className="nav-backdrop" onClick={() => setOpen(false)} />
          <aside className="nav-drawer">
            <div className="nav-drawer__head">
              <span>Menu</span>
              <button className="nav-drawer__close" aria-label="Close menu" onClick={() => setOpen(false)}>×</button>
            </div>
            <div className="nav-drawer__links">
              <NavLink to="/landing3" onClick={() => setOpen(false)} className="drawer-link">Overview</NavLink>
              <a href="#features" onClick={() => setOpen(false)} className="drawer-link">Solutions</a>
              <a href="#pricing" onClick={() => setOpen(false)} className="drawer-link">Investment</a>
              <NavLink to="/pricing" onClick={() => setOpen(false)} className="drawer-link">Reach Us</NavLink>
              <hr className="drawer-divider" />
              <NavLink to="/app" onClick={() => setOpen(false)} className="drawer-link">App</NavLink>
              <NavLink to="/" onClick={() => setOpen(false)} className="drawer-link">Values</NavLink>
              <NavLink to="/landing2" onClick={() => setOpen(false)} className="drawer-link">Portfolio</NavLink>
              <NavLink to="/landing3" onClick={() => setOpen(false)} className="drawer-link">My Profile</NavLink>
            </div>
          </aside>
        </>
      )}
    </nav>
  )
}
