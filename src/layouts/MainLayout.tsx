import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import '../App.css'

export default function MainLayout() {
  const location = useLocation()
  const isAppPage = location.pathname === '/app'
  const navigate = useNavigate()

  function handleGlobalSearchSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    navigate('/')
  }
  return (
    <>
      <Navbar />
      <div className="global-search-bar">
        <form className="global-search-form" onSubmit={handleGlobalSearchSubmit}>
          <input
            type="text"
            placeholder="Type / to search"
            className="global-search-input"
          />
        </form>
      </div>
      <div className={isAppPage ? 'app-container app-container--full' : 'app-container'}>
        <Outlet />
      </div>
    </>
  )
}
