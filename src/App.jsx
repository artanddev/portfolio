import './App.css'

import {createBrowserRouter, RouterProvider, Outlet, Navigate } from 'react-router-dom'
import GameDevelopment from './Components/GameDevelopment.jsx'
import NotFoundPage from './Components/NotFoundPage.jsx'
import PortfolioOptions from './Components/PortfolioOptions.jsx'
import Illustrations from './Components/Illustrations.jsx'
import TwoDAssetWork from './Components/TwoDAssetWork.jsx'
import Profile from './Components/Profile'
import Footer from './Components/Footer'

const router = createBrowserRouter(
  [
    {
      element: <HomeLayout />,
      children: [
        { index: true, element: <Navigate to="game-development" replace /> },
        { path: "game-development", element: <GameDevelopment /> },
        { path: "illustrations", element: <Illustrations /> },
        { path: "2d-asset-work", element: <TwoDAssetWork /> },
        { path: "*", element: <NotFoundPage /> }
      ],
    },
    { path: "login", element: null }
  ], {basename: "/portfolio/"});

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

function HomeLayout() {
  return (
    <>
      <Profile />
      <PortfolioOptions />
      <Outlet />
      <Footer />
    </>
  )
}




export default App
