import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import {Grid, Typography} from "@mui/material";
import {useContext, useState} from "react";
import userContext from "../../contexts/userContext";

function MenuAppBar() {
    const { user } = useContext(userContext);

    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <AppBar position="fixed" style={{background: '#757575'}}>
                <Toolbar>
                    <Grid container direction="row">
                        <Grid item style={{ flexGrow: "1" }}>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Grid>
                        <Grid item display={"flex"} mr={5} alignItems={"center"}>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color={"black"}>
                                {user? user?.surname + ' ' + user?.firstname : 'mama'}
                            </Typography>
                        </Grid>
                        <Grid item display={"flex"} mr={5} alignItems={"center"}>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color={"black"}>
                                {user? user?.level : 'mama'}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                            </Menu>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Toolbar/>
        </>
    ); // Le dernier composant permet que la NavBar ne passe pas par dessus les autres composants
}


export default MenuAppBar