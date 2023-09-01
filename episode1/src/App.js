
// import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './index.css';
import AddItem from './AddItem';

function App() {

  return (
    <div className="App">
      <Header title="To do list" />
      <Content />
      <Footer />
      <AddItem />
    </div>
  )
}


// Header.defaultProps = {
//   title: "To do list"
// }
export default App;
