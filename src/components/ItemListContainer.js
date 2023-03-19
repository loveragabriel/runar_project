import * as React from 'react';
import { Container, Box, Typography } from '@mui/material';

export default function ItemListContainer(props) {
    return (
        <React.Fragment>
            <Container sx={{ position: 'relative', marginTop: '16vh', width: '100%' }}>
                <Box sx={{ height: '20vh' }}>
                    <Typography variant='h6' style={{ color: 'black', paddingTop: '4vh', fontSize: '200%' }}>{props.greeting}</Typography>
                </Box>
            </Container>
        </React.Fragment>
    );
}