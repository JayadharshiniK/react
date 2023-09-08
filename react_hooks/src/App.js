import './App.css';
import StateTutorial from "./UseState/StateTutorial";
import ReducerTutorial from './UseReducer/ReducerTutorial';
import EffectTutorial from './UseEffect/EffectTutorial';
import RefTutorial from './UseRef/RefTutorial';
import MemoTutorial from './UseMemo/MemoTutorial';
import LayoutEffectTutorial from './UseLayoutEffect/LayoutEffectTutorial';
import ImperativeHandle from './UseImperativeHandle/ImperativeHandle';
import CallBackTutorial from "./UseCallback/CallbackTutorial";
import ContextTutorial from './UseContext/ContextTutorial';


function App() {
  return (
    <div className="App">
    <StateTutorial />
    <ReducerTutorial />
    <EffectTutorial />
    <RefTutorial />
    <MemoTutorial />
    <LayoutEffectTutorial />
    <ImperativeHandle />
    <CallBackTutorial />
    <ContextTutorial />
    </div>
  );
}

export default App;
