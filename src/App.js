import WelcomePage from './components/WelcomePageF/WelcomePage'
import { Route, Switch, useLocation } from 'react-router-dom'
import LoginPage from './components/WelcomePageF/LoginPage'
import RegisterPage from './components/WelcomePageF/RegisterPage'
import { AnimatePresence } from 'framer-motion'
import FAQMain from './components/DashBoardComp/FAQMain'
import HelpMain from './components/DashBoardComp/HelpMain'
import LiveScoreMain from './components/DashBoardComp/LiveScoreMain'
import PredictionTypeMain from './components/DashBoardComp/PredictionTypeMain'
import PredictMain from './components/DashBoardComp/PredictMain'
import ReferAndEarnMain from './components/DashBoardComp/ReferAndEarnMain'
import RegularPredictMain from './components/DashBoardComp/RegularPredictMain'
import SettingsMain from './components/DashBoardComp/SettingsMain'
import WalletMain from './components/DashBoardComp/WalletMain'



const App = () => {
  const location = useLocation();
  return (
    <>
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key}>
        <Route path="/FAQ">
          <FAQMain />
        </Route>

        <Route path="/help">
          <HelpMain />
        </Route>

        <Route path="/livescore">
          <LiveScoreMain />
        </Route>

        <Route path="/predictType">
          <PredictionTypeMain />
        </Route>

        <Route path="/predict">
          <PredictMain />
        </Route>

        <Route path="/ReferAndEarn">
          <ReferAndEarnMain />
        </Route>

        <Route path="/regularPredict">
          <RegularPredictMain />
        </Route>

        <Route path="/settings">
          <SettingsMain />
        </Route>

        <Route path="/wallet">
          <WalletMain />
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
