import logo from './logo.svg';
import './App.css';
import { RunGame } from './RunGame';
import { useState } from 'react';
import { Welcome } from './Welcome';
import { socket, SocketContext } from './context/socket';

function App() {
  const [playState, setPlayState] = useState('Welcome')

  return (
<div>

    {playState === 'Welcome' ? <Welcome changePlayState={ setPlayState }/> : <RunGame />}
    
    	}	<SocketContext.Provider  value={socket}> 
            <div className="container">	</div>
          </SocketContext.Provider>
    </div>
  );

  // return (
	// 	<SocketContext.Provider  value={socket}> 
	// 		<div className="container"> 
	// 		</div>
	// 	</SocketContext.Provider>
	// );
}

export default App;
