import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/AuthPage/Login";
import Onboarding from "./pages/AuthPage/Onboarding";
import SignUp from "./pages/AuthPage/SignUp";
import ForgotPassword from "./pages/AuthPage/ForgotPassword";
import VerifyEmail from "./pages/AuthPage/VerifyEmail";
import ProtectedRoute from "./pages/AuthPage/ProtectedRoute";

import Dashboard from "./pages/DashboardPages/Dashboard";
import ProtectedLayout from "./components/Layout/ProtectedLayout";
import HistoryPage from "./pages/DashboardPages/HistoryPage";
import Budget from "./pages/DashboardPages/Budget";
import Profile from "./pages/DashboardPages/Profile";

function App() {
  const router = createBrowserRouter([
    { path: "/sign-in", element: <Login /> },
    { path: "/sign-up", element: <SignUp /> },
    { path: "/reset-password", element: <ForgotPassword /> },
    { path: "/verify-email", element: <VerifyEmail /> },
    { path: "/", element: <Onboarding /> },
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <ProtectedLayout />
        </ProtectedRoute>
      ),
      children: [
        { path: "dashboard", element: <Dashboard /> },
        { path: "history", element: <HistoryPage /> },
        { path: "budget", element: <Budget /> },
        { path: "profile", element: <Profile /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
