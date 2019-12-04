import React from 'react'
import { Button, ButtonToolbar } from 'react-bootstrap'

const RefreshComponent = ({ handleClick }) => {
    return (

        <div style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}>
            <ButtonToolbar>
                <Button variant="outline-info" onClick={() => handleClick()}>
                    Refresh
						</Button>
            </ButtonToolbar>
        </div>

    )
}

export default RefreshComponent