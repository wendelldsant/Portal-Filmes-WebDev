import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import GenreList from './pages/GenreListPage.jsx'
import Home from './pages/Home.jsx'
import MovieListPage from './pages/MovieListPage.jsx'
import MovieByGenrePage from './pages/MoviesByGenrePage.jsx'
import MovieDetailPage from './pages/MovieDetailPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {index: true, element: <Home/>},
      {path: '/movies', element: <MovieListPage/>},
      {path: '/movies/:id', element: <MovieDetailPage/>},
      {path: '/genre', element: <GenreList/>},
      {path: '/genre/:id', element: <MovieByGenrePage/>}
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
