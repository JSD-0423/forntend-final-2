import * as React from "react";
import PropTypes from "prop-types";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import { blue } from "@mui/material/colors";
import { useState } from "react";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";

export function SimpleDialog(props) {
  const [name, setName] = useState(localStorage.getItem("name") || "");
  const { onClose, selectedValue, open } = props;

  const navigate = useNavigate();
  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    localStorage.setItem("auth", "");
    localStorage.setItem("name", "");
    setName("");
    onClose(value);
    navigate("signIn", { replace: true });
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Welcome to our Website</DialogTitle>
      <List sx={{ pt: 0 }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
              <PersonIcon />
            </Avatar>
          </ListItemAvatar>
          {name ? (
            <ListItemText primary={name} />
          ) : (
            <ListItemText primary={"You should Log in first"} />
          )}
        </ListItem>
        {name ? (
          <ListItem disableGutters>
            <ListItemButton
              autoFocus
              onClick={() => handleListItemClick("sign out")}
            >
              <ListItemAvatar>
                <Avatar>
                  <PowerSettingsNewIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Sign Out" />
            </ListItemButton>
          </ListItem>
        ) : (
          <ListItem disableGutters>
            <ListItemButton
              autoFocus
              onClick={() => handleListItemClick("sign out")}
            >
              <ListItemAvatar>
                <Avatar>
                  <LoginIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Sign In" />
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};
