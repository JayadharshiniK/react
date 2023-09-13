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
import SearchFilter from './SearchFilter/SearchFilter';
import SimpleCounter from './SimpleCounter/SimpleCounter';
import ListOutput from './ListOutput';
import DataFetch from './DataFetch';
import CountdownTimer from './CountdownTimer';
import Form from './Form/Form';


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
      <SearchFilter />
      <SimpleCounter />
      <ListOutput />
      <DataFetch />
      <CountdownTimer />
      <Form />
    </div>
  );
}

export default App;
