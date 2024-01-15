import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Login } from "./pages/common"
import { navigationRoutes } from "./RoutePaths"
import { lazy, Suspense } from "react"

const Register = lazy(() => import("./pages/common/Register"))
const RegisterContinue = lazy(() => import("./pages/common/RegisterContinue"))
const PasswordReset = lazy(() => import("./pages/common/PasswordReset"))

const router = createBrowserRouter([
  {
    path: "/",
    index: true,
    element: <Login />
  },
  {
    path: navigationRoutes.register,
    element: <Register />
  },
  {
    path: navigationRoutes.continueRegister,
    element: <RegisterContinue />
  },
  {
    path: navigationRoutes.forgotPassword,
    element: <Suspense><PasswordReset /></Suspense>
  },
])

export function AuthRoutes() {
  return <RouterProvider router={router} />
}
