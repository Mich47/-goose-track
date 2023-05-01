import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './MainLayout/MainLayout';
import { RestrictedRoute } from './AuthRouts/RestrictedRoute';
import { PrivateRoute } from './AuthRouts/PrivateRoute';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import AccountPage from 'pages/AccountPage/AccountPage';
import CalendarPage from 'pages/CalendarPage/CalendarPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ChoosedMonth from './ChoosedMonth/ChoosedMonth';
import ChoosedDay from './ChoosedDay/ChoosedDay';
import StartPage from 'pages/StartPage/StartPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route>
          <Route path="" element={<RestrictedRoute />}>
            <Route index element={<StartPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>
          <Route path="" element={<PrivateRoute />}>
            <Route path="" element={<MainLayout />}>
              <Route path="calendar" element={<CalendarPage />}>
                <Route path="month/:currentDate" element={<ChoosedMonth />} />
                <Route path="day/:currentDay" element={<ChoosedDay />} />
              </Route>
              <Route path="account" element={<AccountPage />} />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer />
    </>
  );
};
