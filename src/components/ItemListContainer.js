import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';

export default function ItemListContainer(props) {

    return (
        <React.Fragment>
            <Container sx={{ position: 'relative', marginTop: '16vh', width: '100%' }}>
                <Box sx={{ height: '20vh', backgroundImage: 'url("/woman-running.jpg")' }}>
                    <Typography variant='h6' style={{ color: '#FFFFFF', paddingTop: '4vh', fontSize:'200%' }}>{props.greeting}</Typography>
                </Box>
            </Container>
        </React.Fragment>
    );
}