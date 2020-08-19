import React from 'react'
import { Link } from 'react-router-dom'
function Navigation(props) {
    return (
        <div className='Navigation'>
            <ul>
                <li>
                    < Link to='/'>Welcome</Link>
                </li>
                <li>
                    < Link to='/'>Clock</Link>
                </li>
                <li>
                    < Link to='/'>Contact</Link>
                    </li>
                
            </ul>
        </div>
    )
}

export default Navigation