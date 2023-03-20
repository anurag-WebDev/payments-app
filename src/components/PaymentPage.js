import Box from "@mui/material/Box";
import PaymentDialog from "./PaymentDialog";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import { React, useEffect, useState } from "react";
// import "./PaymentPage.css";
// import PlansDetails from "./PlansDetails";

const PaymentPage = () => {
  const [open, setOpen] = useState(false);

  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    handleClickOpen();
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  console.log(isSelected);
  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <AppBar position="static" sx={{ backgroundColor: "dimgray" }}>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, textAlign: "center" }}
              >
                Payment
              </Typography>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <PaymentDialog
              open={open}
              isSelected={isSelected}
              setIsSelected={setIsSelected}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PaymentPage;
