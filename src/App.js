import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <div className="App">
            <button onClick={() => toast('Hello toast!')}>Show Toast</button>
            <ToastContainer />
        </div>
    );
}

export default App;