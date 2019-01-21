import React from 'react';
import ReactDOM from 'react-dom';


function getTime(){
    return(new Date().toLocaleTimeString())
}


const App = () => {
  
    return <div>
        {getTime()}
    </div>
};

ReactDOM.render(<App/>,document.getElementById("root"));