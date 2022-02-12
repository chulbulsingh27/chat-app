import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';

import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />;

    return (
        <ChatEngine
            height="100vh"
            projectID="1ed12b12-1fd5-409d-9960-5c18062119b6"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    );
};

// infinite scroll, logout, more customizations...

export default App;