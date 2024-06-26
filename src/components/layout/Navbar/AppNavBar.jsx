import * as React from 'react';
import { Container, AppBar, Box, Toolbar, IconButton, Badge ,MenuItem, Menu, Button, Divider, Drawer, List, ListItem, ListItemButton, ListItemText, CardMedia } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import { AccountCircleOutlined, SearchOutlined, ShoppingBagOutlined } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../../assets/blifelogo.png'

const drawerWidth = 240;
const navItems = [{ texto: 'Productos', path: '/productos' }, { texto: 'Promociones', path: '/promociones' }, { texto: 'Nosotros', path: '/nosotros' }];

export default function AppNavBar(props) {
  //estados para controlar los menus
  const { window } = props;
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  // funciones de cmabio para los menus
  const container = window !== undefined ? () => window().document.body : undefined;
  const handleDrawerToggle = () => { setMobileOpen((prevState) => !prevState) }
  const handleProfileMenuOpen = (event) => { setAnchorEl(event.currentTarget) };
  const handleMobileMenuClose = () => { setMobileMoreAnchorEl(null)};
  const handleMobileMenuOpen = (event) => { setMobileMoreAnchorEl(event.currentTarget) };
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const menuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';

  // componentes de menus
  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <Box sx={{ my: 2, display: "flex", justifyContent: "center"}}>
        <CardMedia component="img" image={logo} width={`90px`} draggable="false" sx={{ aspectRatio: "83/25",  width: "100px", userSelect: "none" }}/>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}  component={Link} to={item.path} >
              <ListItemText primary={item.texto} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const renderMobileMenu = (
    <Menu anchorEl={mobileMoreAnchorEl} id={mobileMenuId} keepMounted open={isMobileMenuOpen} onClose={handleMobileMenuClose}
      anchorOrigin={{ vertical: 'top',horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <MenuItem dense>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <SearchOutlined />
        </IconButton>
        <p>Search</p>
      </MenuItem>
      <MenuItem dense>
        <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
          <AccountCircleOutlined />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem dense onClick={handleProfileMenuOpen}>
        <IconButton size="large" aria-label="account of current user" color="inherit">
          <Badge badgeContent={2} color="error">
            <ShoppingBagOutlined />
          </Badge>
        </IconButton>
        <p>Shopping Cart</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box>
      <AppBar elevation={0} sx={{bgcolor: "#FFF", color: "#000"}}>
        <Container maxWidth="xl">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between"}}>
            <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" onClick={handleDrawerToggle} sx={{ mr: 2, display: { xs: 'block', sm: 'none', md: 'none' } }}>
              <MenuIcon />
            </IconButton>
            <Box component={Link} to='/' sx={{ width: {xs: "100%", sm: "auto"}, display: "flex", justifyContent: "center"}}>
              <CardMedia component="img" draggable="false"
                image={logo}
                width={`90px`}
                sx={{ aspectRatio: "83/25",  width: {xs: "100px", sm: "120px", md: "140px"}, userSelect: "none" }}
              />
            </Box>

            <Box sx={{ display: { xs: 'none', sm: 'block', md: 'block' }, color: "#343434" }}>
              {navItems.map((item) => (
                <Button key={item.path} color="inherit" component={Link} to={item.path} sx={{ fontWeight: 700, fontSize: 16,lineHeight: "19.84px",letterSpacing: "-2%",color: "#343434",textTransform: "capitalize", borderRadius: "22px", px: { sm: 1, md: 2}, py:0.3, m:0.2, bgcolor: item.path === location.pathname ? "#EDA836" : "none", '&:hover' : {bgcolor: "#EDA836"} }}>
                  {item.texto}
                </Button>
              ))}
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <SearchOutlined/>
              </IconButton>
              <IconButton size="large" /* edge="end" */ aria-label="account of current user" aria-controls={menuId} aria-haspopup="true" onClick={handleProfileMenuOpen} color="inherit">
                <AccountCircleOutlined />
              </IconButton>
              <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
                <Badge badgeContent={2} color="error">
                  <ShoppingBagOutlined />
                </Badge>
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton size="large"aria-label="show more"aria-controls={mobileMenuId}aria-haspopup="true"onClick={handleMobileMenuOpen}color="inherit">
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      
      <Box component="nav">
        <Drawer container={container} variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} ModalProps={{ keepMounted: true }} sx={{ display: { xs: 'block', sm: 'none', md: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }}}>
          {drawer}
        </Drawer>
      </Box>
      {renderMobileMenu}
      <Toolbar />
    </Box>
  );
}