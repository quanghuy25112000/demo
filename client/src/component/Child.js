import React from 'react'

 const  Child=(props)=> {
     console.log(props);
    return (
        <div>
            {props.name}
        </div>
    )
}
export default Child