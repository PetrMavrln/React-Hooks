import React, { useEffect, useRef, useState } from 'react';
import useScroll from '../hooks/useScroll';

const List = () => {
    const [toDo, setToDo] = useState([]);
    const [page, setPage] = useState(1);
    const limit = 20;
    const parentRef = useRef();
    const childRef = useRef();
    const intersected = useScroll(parentRef, childRef, () => fetchToDo(page, limit));

    function fetchToDo(page, limit) {
        fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`)
            .then(response => response.json())
            .then(json => {
                setToDo(prev => [...prev, ...json]);
                setPage(prev => prev + 1);
            });
    }

    return (
        <div ref={parentRef} style={{height: '80vh', overflow: 'auto'}}>
            {toDo.map( toDo => 
                <div key={toDo.id} style={{padding:15,margin: '5px 0', border: '2px solid black'}}>
                    {toDo.id}. {toDo.title}
                </div>    
            )}
            <div ref={childRef} style={{height: 20, background: 'red'}}/>
        </div>
    );
};

export default List;