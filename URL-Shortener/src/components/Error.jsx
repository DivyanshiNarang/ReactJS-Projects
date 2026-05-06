import React from 'react'

const Error = ({ message }) => {
    if (!message) return null

    return (
        <span className='text-sm text-red-400'>{message}</span>
    )
}

export default Error
