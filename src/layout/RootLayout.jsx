import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

function RootLayout() {
  return (
    <>
      <Navbar />
      <main className="site-container px-3">
        <Outlet />
      </main>
    </>
  )
}

export default RootLayout