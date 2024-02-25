import { Outlet } from 'react-router-dom'
import { BigSidebar, Navbar, SmallSidebar } from '../components'
import Wrapper from "../assets/wrappers/Dashboard"
import { useContext, useState } from 'react'
import { createContext } from 'react'

const DashboardContext = createContext()

const DashboardLayout = () => {
  const user = { name: 'John' }
  const [showSidebar, setShowSidebar] = useState(false)
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const toggleDarkTheme = () => {
    console.log('dark theme');
  }
  const toogleSidebar = () => {
    setShowSidebar(!showSidebar)
  }
  const logoutUser = async () => {
    console.log('logout user');
  }

  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toogleSidebar,
        logoutUser
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  )
}
export const useDashboardContext = () => useContext(DashboardContext)
export default DashboardLayout
