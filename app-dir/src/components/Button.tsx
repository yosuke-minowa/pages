import React from 'react'

function Button(props: any) {
    let label = props.label
    let state = props.state
    return (
        <div>
            <button className={`Button ${state}`}>{label}</button>
        </div >
    )
}

export default Button