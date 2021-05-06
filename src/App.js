import './App.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

function App() {
  return (
    <div className="app">
      <ChatEngine
			projectID='97b7214a-bf53-477d-842c-d3c04ea25afa'
			userName='Mohan'
			userSecret='12345'
      height="100vh"
      renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps} /> }
		/>
    </div>
  );
}

export default App;
