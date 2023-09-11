import './App.css';
import CharacterCount from './CharacterCount';
import ResetPasswordForm from './ResetPasswordForm';
import ResetPassword from './ResetPassword';
import DisableSubmit from './DisableSubmit';
import ShowPassword from './ShowPassword';

function App() {
  return (
    <div className="App">
      <CharacterCount/>
      <ResetPasswordForm />
      <ResetPassword />
      <DisableSubmit />
      <ShowPassword />
    </div>
  );
}

export default App;
