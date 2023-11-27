import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <p>Home</p>
    </div>
  )
}

const About = () => {
  return (
    <div>
      <p>About</p>
    </div>
  )
}

const Contact = () => {
  return (
    <div>
      <p>Contact</p>
    </div>
  )
}

const NavBar = () => {
  return (
    <div>
      <Link to={'/'}>Home</Link>
      <Link to={'/contact'}>Contact</Link>
      <Link to={'/about'}>About</Link>
      <Link to={'/login'}>Login</Link>
    </div>
  )
}

const Login = () => {
  return (
    <div>
      <p>Login</p>
    </div>
  )
}

export const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}
