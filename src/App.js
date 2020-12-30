import './App.css';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Feed } from './components/Feed';
// import { MessageSender } from './components/MessageSender';

function App() {
  return (
    <div className="app">
      <Header />

      <div className="app__body">
      {/* Side bar component */}
        <Sidebar />
      {/* Feed Component  */}
        <Feed />
      {/* Message sendeer component */}
        {/* <MessageSender /> */}
      </div>
    </div>
  );
}

export default App;
