import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { DashboardLayout, HomeLayout, Landing, Login, Register, Error, Stats, AddJob, AllJobs, Profile, Admin } from "./pages"

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <AddJob/>
          },
          {
            path: 'stats',
            element: <Stats />
          },
          {
            path: 'alljobs',
            element: <AllJobs />
          },
          {
            path: 'profile',
            element: <Profile />
          },
          {
            path: 'admin',
            element: <Admin />
          }
        ]
      },
    ]
  },

])

function App() {
  return <RouterProvider router={router} />
}

export default App
