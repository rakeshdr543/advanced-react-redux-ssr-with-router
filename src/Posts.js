import React from 'react'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Route, Switch, NavLink, BrowserRouter} from 'react-router-dom';

const Posts =()=>{

    const app = useSelector((state)=>state.app)
    const {count} = app
    const dispatch = useDispatch()
    const increment = () => {
        dispatch({type:'INCREMENT_COUNT',payload:count})
    };

    const decrement = () => {
        dispatch({type:'DECREMENT_COUNT',payload:count})

    };
    return (
        <>
            <p>{count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <hr />
            <h2>Posts page
                <Link to='/todos/3'>Children route</Link>
            </h2>
        </>
    )
}
export default Posts