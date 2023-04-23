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

const linkStyle = {
    textDecoration: 'none',
    color: 'inherit',
    '&:hover': {
        textDecoration: 'none',
        color: 'inherit',
    },
};

const pages = ['Accesorios', 'Indumentaria', 'Zapatillas'];

function NavBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
   
    const theme = createTheme({
        palette: {
            primary: {
                main: '#20272F',
            }
        },
    });
    return (
        <ThemeProvider theme={theme}>
            <AppBar position="fixed" color='primary'>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>                 
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <MenuIcon />
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <Box variant="h1" >
                                <IconWhite />
                            </Box>
                        </Link>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                               
                                
                            </IconButton>
                            
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Link style={linkStyle} to={`/Category/${page}`}>
                                            <Typography textAlign="center">{page}</Typography>
                                        </Link>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        
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
                              <Box variant="h1" sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
                              <IconWhite to="/" style={{ textDecoration: 'none' }} />
                              </Box>

                        </Box>
                        
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Link  to={`/Category/${page}`} key={page} style={{ textDecoration: 'none' }}>
                                    <Button
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >{page}
                                    </Button>
                                </Link>
                            ))}
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                           <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                            <CartWidget></CartWidget>

                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
}
export default NavBar;