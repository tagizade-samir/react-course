import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import {ROUTES} from './constants/routes'
import {Main} from './screens/main/Main'
import {Notes} from './screens/notes/Notes'

const NavBar = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: 'grey',
        gap: 20,
        padding: '20px 0px',
      }}>
      <Link style={{color: 'white', fontSize: 18}} to={ROUTES.MAIN}>
        Home
      </Link>
      <Link style={{color: 'white', fontSize: 18}} to={ROUTES.NOTES}>
        Notes
      </Link>
    </div>
  )
}

export const App = () => {
  return (
    <BrowserRouter>
      <div style={{width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <NavBar />
        <Routes>
          <Route path={ROUTES.MAIN} element={<Main />} />
          <Route path={ROUTES.NOTES} element={<Notes />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
