import WelcomePage from './components/WelcomePageF/WelcomePage'
import { Route, Switch, useLocation } from 'react-router-dom'
import LoginPage from './components/WelcomePageF/LoginPage'
import RegisterPage from './components/WelcomePageF/RegisterPage'
import { AnimatePresence } from 'framer-motion'
import DashBoard from './components/DashBoardComp/DashBoard'



const App = () => {
  const location = useLocation();
  return (
    <>
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key}>
      <Route path="/dashboard">
          <DashBoard />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/">
          <WelcomePage />
        </Route>
      </Switch>
      </AnimatePresence>
      </>
  )
}

export default App
