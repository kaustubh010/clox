import React from 'react'
import Error from 'next/error'

const Notfound = () => {
    return (
        <Error statusCode={404} />
    )
}

export default Notfound