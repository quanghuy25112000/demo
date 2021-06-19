import React from 'react'
import Child from './Child'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";
function Parent() {
    let a = 'abc'
    const history = useHistory()
    const next = () => {
            
            //  <div>
            //      render={() => <Child name={a} />}
            //  </div>
            
        // <Child name={"a"} />
        history.push('/c')

    }
    return (
        <div>
            <Child name={"o"}/>
            <button onClick={next}>click</button>
        </div>
    )
}
export default Parent
