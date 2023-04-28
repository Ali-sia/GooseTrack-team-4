import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { InitialElement } from './InitialElement';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme, light, dark } from 'theme';
import { ThemeHandleContext } from 'context/ThemeContext'; 

import MainLayout from './MainLayout/MainLayout';
import AccountPage from '../pages/AccountPage/AccountPage';
import CalendarPage from 'pages/CalendarPage/CalendarPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import LoginPage from '../pages/LoginPage/LoginPage';

export const App = () => {
  const [currentTheme, setCurrentTheme] = useState(localStorage.getItem("theme")
                                                  ? localStorage.getItem("theme")
                                                  : "light");

  const themeGlobal = { ...theme, colors: {light, dark}[currentTheme] };

  return (
    <ThemeHandleContext.Provider value={{ currentTheme, setCurrentTheme }}>
      <ThemeProvider theme={themeGlobal}>
    <BrowserRouter basename="goose-track-team-4">
      {/* <Suspense fallback={null}> */}
          <Routes>
        <Route path="/" element={<InitialElement />}>
          {/* routes for authorization */}
          <Route
            path="/register"
            element={
              <RegisterPage />
              // <h2>register</h2>
              // <RestrictedRoute
              //   redirectTo="/contacts"
              //   component={<RegisterPage />}
              // />
            }
          />
          <Route
            path="/login"
            element={
              <LoginPage />
              // <h2>login</h2>
              // <RestrictedRoute
              //   redirectTo="/contacts"
              //   component={<LoginPage />}
              // />
            }
          />

          <Route element={<MainLayout />}>
            <Route
              path="/account"
              element={
                <AccountPage />
                // <PrivateRoute redirectTo="/login" component={<AccountPage />} />
              }
            />
            <Route
              path="/calendar"
              element={
                <Navigate to={`/calendar/month/${Date.now()}`} replace />
              }
            />
            <Route
              path="/calendar/month/:currentDay"
              element={<CalendarPage />}
            />
            {/* <Route
              index
              path="/month/:currentDate"
              element={
                <h2>calendar month</h2>
                // <PrivateRoute redirectTo="/login" component={<AccountPage />} />
              }
            />
            <Route
              index
              path="/day/:currentDate"
              element={
                <h2>calendar day</h2>
                // <PrivateRoute redirectTo="/login" component={<AccountPage />} />
              }
            />*/}
          </Route>
        </Route>

        <Route path="*" element={<h1>not found page</h1>} />
      </Routes>
      {/* </Suspense> */}
    </BrowserRouter>
    </ThemeProvider>
    </ThemeHandleContext.Provider>
  );
};
