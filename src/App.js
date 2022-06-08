import axios from 'axios';
import React from 'react';
import useRequest from './hooks/useRequest';

function App() {
  const [toDo, loading, error] = useRequest(fetchToDo);

  function fetchToDo() {
    return axios.get(`https://jsonplaceholder.typicode.com/todos`);
  }

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>Loading error</h1>
  }

  return (
    <div>
      {toDo && toDo.map( toDo => 
                <div key={toDo.id} style={{padding:15,margin: '5px 0', border: '2px solid black'}}>
                    {toDo.id}. {toDo.title}
                </div>    
            )}
    </div>
  );
}

export default App; 
