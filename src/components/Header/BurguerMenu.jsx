import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { ListItemButton } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import Drawer from "@mui/material/Drawer";
import { Link } from "react-router-dom";

export default function BurguerMenu() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={() => setIsDrawerOpen(true)}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        style={{ height: "60vh", width: "50vw" }}
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <List style={{ fontSize: "30px", fontWeight: "600", height: "250px" }}>
          <ListItemButton>
            <Link to="/" style={{textDecoration: 'none', color: 'black'}}>
              <ListItemText  primary="Home" />
            </Link>
          </ListItemButton>
          <ListItemButton>
            <Link to="/products" style={{textDecoration: 'none', color: 'black'}}>
              <ListItemText primary="Productos" />
            </Link>
          </ListItemButton>
          <ListItemButton>
            <Link to="/kits" style={{textDecoration: 'none', color: 'black'}}>
              <ListItemText primary="Kits" />
            </Link>
          </ListItemButton>
        </List>
      </Drawer>
    </Toolbar>
  );
}
