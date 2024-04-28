import React from 'react'

export default function Alert(props) {
    return (
        <div class={`alert alert-${props.mode} alert-dismissible fade show border border-${props.mode}"`} role="alert">
            <h5>{props.mode==='light'?'Light':'Dark'} Mode Enabled</h5>
        </div>
    )
}
