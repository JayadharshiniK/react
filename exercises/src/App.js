import './App.css';
import CharacterCount from './CharacterCount';
import ResetPasswordForm from './ResetPasswordForm';
import ResetPassword from './ResetPassword';
import DisableSubmit from './DisableSubmit';
import ShowPassword from './ShowPassword';
import SmallFigma from './SmallFigma/SmallFigma';
import SwitchTabs from './SwitchTabs';
import Toasts from './Toasts';
import DarkMode from './DarkMode.js/DarkMode';


function App() {
  return (
    <div className="App">
      <CharacterCount/>
      <ResetPasswordForm />
      <ResetPassword />
      <DisableSubmit />
      <ShowPassword />
      <SmallFigma />
      <SwitchTabs />
      <Toasts />
      <DarkMode />
    </div>
  );
}

export default App;
