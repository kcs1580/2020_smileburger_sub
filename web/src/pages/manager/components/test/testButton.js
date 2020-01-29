import React from 'react';
import Button from '@material-ui/core/Button'
import testInput from './dataupload'

const TestButton = () => {
    return (
        <Button variant="outlined" onClick={testInput} >
            <h3>test임</h3>
        </Button>

    )
}

export default TestButton