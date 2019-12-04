import React from 'react'
import { Image } from 'react-bootstrap'

const LoadingComponent = () => {
    return (
        <div style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}>
            <Image
                alt="loading..."
                src="https://flevix.com/wp-content/uploads/2019/07/Bubble-Preloader-1.gif"
                height="300"
            />
        </div>
    )
}

export default LoadingComponent