import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { IconWhite } from './IconWhite';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { CartWidget } from './CartWidget';


const theme = createTheme({
    palette: {
        primary: {
            main: '#20272F',
        }
    },
});

function NavBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [open, setOpen] = React.useState(false);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
        setOpen(true);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
        setOpen(false);
    };

    const pages = ['Accesorios', 'Indumentaria', 'Zapatillas'];

    const linkStyle = {
        textDecoration: 'none',
        color: 'inherit',
        '&:hover': {
            textDecoration: 'none',
            color: 'inherit',
        },
    };

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="fixed" color='primary'>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Link to="/">
                                <IconWhite />
                            </Link>
                        </Box>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="menu"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                open={open} 
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Link style={linkStyle} to={`categories/${page}`}>
                                            <Typography textAlign="center">{page}</Typography>
                                        </Link>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        <Box sx={{ display: { xs: 'flex', md: 'none' }, with: '1em', height: '1.5em' }} ></Box>

                        <Box
                            variant="h5"
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            <Box to="/" >
                                <IconWhite />
                            </Box>
                        </Box>

                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Link to={`categories/${page}`} key={page} style={{ textDecoration: 'none' }}>
                                    <Button
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        {page}
                                    </Button>
                                </Link>
                            ))}
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <CartWidget></CartWidget>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
}

export default NavBar;