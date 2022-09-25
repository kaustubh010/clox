import React from "react";
import FeatherIcon from "feather-icons-react";
import Image from "next/image";
import userimg from "../../../assets/images/users/user2.jpg";
import { FaUserCircle } from 'react-icons/fa'
import Link from 'next/link'
import {
  Box,
  Menu,
  Typography,
  ListItemButton,
  List,
  ListItemText,
  Button,
  Divider,
} from "@mui/material";
const ProfileDD = ({logout}) => {
  const [anchorEl4, setAnchorEl4] = React.useState(null);

  const handleClick4 = (event) => {
    setAnchorEl4(event.currentTarget);
  };

  const handleClose4 = () => {
    setAnchorEl4(null);
  };
  return (
    <>
      <Button
        aria-label="menu"
        color="inherit"
        aria-controls="profile-menu"
        aria-haspopup="true"
        onClick={handleClick4}
      >
        <Box display="flex" alignItems="center">
          <FaUserCircle className='text-2xl' />
        </Box>
      </Button>
      <Menu
        id="profile-menu"
        anchorEl={anchorEl4}
        keepMounted
        open={Boolean(anchorEl4)}
        onClose={handleClose4}
        sx={{
          "& .MuiMenu-paper": {
            width: "385px",
          },
        }}
      >
        <Box>
          <Box p={2} pt={0}>
            <List
              component="nav"
              aria-label="secondary mailbox folder"
              onClick={handleClose4}
            >
              <Link href={'/account'}><ListItemButton>
                <ListItemText primary="My Account" />
              </ListItemButton></Link>
              <Link href={'/orders'}><ListItemButton>
                <ListItemText primary="Orders" />
              </ListItemButton></Link>
            </List>
          </Box>
          <Divider />
          <Box p={2}>
            <Button onClick={logout} fullWidth variant="contained" color="error">
              Logout
            </Button>
          </Box>
        </Box>
      </Menu>
    </>
  );
};

export default ProfileDD;
