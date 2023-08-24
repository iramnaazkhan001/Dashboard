import React from 'react';
import {Route,Routes, useNavigate} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import PeopleIcon from '@mui/icons-material/People';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Home from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import SalesReport from './SalesReport';
import Customers from './Customers';
import Leaderboard from './Leaderboard';
import Order from './Order';
import Dashboard from './Home';

 const drawerWidth = 240;
export default function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const Navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{backgroundColor:"rgb(1,184,170)" ,height:'100%'}}>
      <Toolbar />
      <Divider />
      <List>
      
          <ListItem  disablePadding onClick={()=>Navigate("/home")}>
            <ListItemButton>
              <ListItemIcon>
             <Home/>
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem  disablePadding onClick={()=>Navigate("/leaderboard")}>
            <ListItemButton>
              <ListItemIcon>
             <LeaderboardIcon/>
              </ListItemIcon>
              <ListItemText>Leaderboard</ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem  disablePadding onClick={()=>Navigate("/order")}>
            <ListItemButton>
              <ListItemIcon>
             <AddShoppingCartIcon/>
              </ListItemIcon>
              <ListItemText>Order</ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem  disablePadding onClick={()=>Navigate("/salesreport")}>
            <ListItemButton>
              <ListItemIcon>
             <QueryStatsIcon/>
              </ListItemIcon>
              <ListItemText>SalesReport</ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem  disablePadding onClick={()=>Navigate("/customers")}>
            <ListItemButton>
              <ListItemIcon>
             <PeopleIcon/>
              </ListItemIcon>
              <ListItemText>Customers</ListItemText>
            </ListItemButton>
          </ListItem>
      </List>
      <Divider />
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar style={{backgroundColor:'rgb(40,39,44)'}}>
          <IconButton
            color="rgb(250,121,143)"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
      
        <Drawer
          container={container}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Routes>
            <Route exact path="/home" element={<Dashboard/>}/>
            <Route  path="/leaderboard" element={<Leaderboard/>}/>
            <Route  path="/order" element={<Order/>}/>
            <Route path="/salesreport" element={<SalesReport/>}/>
            <Route path="/customers" element={<Customers/>}/>
        </Routes>
      </Box>
    </Box>
  );
}
