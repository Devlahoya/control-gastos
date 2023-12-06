import React from 'react'

const Mensaje = ({children, tipo}) => {
    return (
        <div className={`alert ${tipo}`}>{children}</div>
    )
}

export default Mensaje
