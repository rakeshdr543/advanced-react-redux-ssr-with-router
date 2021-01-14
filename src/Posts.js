import React from 'react'
import {Link} from "react-router-dom";

const Posts =()=>{
    return(
        <h2>Posts page
        <Link to='/todos/3'>Children route</Link>
        </h2>
    )
}
export default Posts