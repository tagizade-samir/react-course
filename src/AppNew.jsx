import {Link, Outlet, RouterProvider, createBrowserRouter, useNavigate, useParams} from 'react-router-dom'
import './App.css'
import React, {useContext, useEffect, useLayoutEffect, useState} from 'react'

const Root = () => {
  return (
    <div className="container">
      <div className="header">
        <p>Header</p>
      </div>
      <Outlet />
      <div className="header">
        <p>Footer</p>
      </div>
    </div>
  )
}

const Screen1 = () => {
  const context = useContext(AuthContext)

  if (!context.isAuth) {
    return (
      <div>
        <p>Sorry, you are not authorized to see this</p>
        <Link to={'/login'}>Go to login</Link>
      </div>
    )
  }

  return (
    <div>
      <div>1</div>
      <Link to={'/2'}>Go to 2</Link>
    </div>
  )
}

const Screen2 = () => {
  const context = useContext(AuthContext)

  if (!context.isAuth) {
    return (
      <div>
        <p>Sorry, you are not authorized to see this</p>
        <Link to={'/login'}>Go to login</Link>
      </div>
    )
  }

  return (
    <div>
      <div>2</div>
      <Link to={'/1'}>Go to 1</Link>
      <Link to={'/3'}>Go to 3</Link>
    </div>
  )
}

const Screen3 = () => {
  return (
    <div>
      <div>3</div>
      <Link to={'/2'}>Go to 2</Link>
      <Link to={'/4'}>Go to 4</Link>
    </div>
  )
}

const notesArray = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
]

const Screen4 = () => {
  return (
    <div>
      <div>4</div>
      {notesArray.map(({id}) => (
        <div key={id}>
          <p>NOTE {id}</p>
          <Link to={`/notes/${id}`}>Go to note with id {id}</Link>
        </div>
      ))}
      <Link to={'/3'}>Go to 3</Link>
    </div>
  )
}

const NoteDetails = () => {
  const {noteId} = useParams()
  return (
    <div>
      <div>
        <p>Note number {noteId}</p>
      </div>
    </div>
  )
}

const ScreenError = () => {
  return (
    <div>
      <div>Error</div>
    </div>
  )
}

const Login = () => {
  const context = useContext(AuthContext)

  const handleLogin = () => {
    if (!context.setIsAuth) return

    context.setIsAuth(true)
  }

  const handleLogout = () => {
    if (!context.setIsAuth) return

    context.setIsAuth(false)
  }
  return (
    <div>
      <div>Login</div>
      {context.isAuth ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
      <Link to={'/1'}>Go to 1</Link>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ScreenError />,
    children: [
      {
        path: '/1',
        element: <Screen1 />,
      },
      {
        path: '/2',
        element: <Screen2 />,
      },
      {
        path: '/3',
        element: <Screen3 />,
      },
      {
        path: '/4',
        element: <Screen4 />,
      },
      {
        path: '/notes/:noteId',
        element: <NoteDetails />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
])

const AuthContext = React.createContext({
  isAuth: false,
  setIsAuth: () => {},
})

export function App() {
  const [isAuth, setIsAuth] = useState(false)

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  )
}
