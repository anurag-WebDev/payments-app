import Divider from "@mui/material/Divider";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Grid, Typography, Box, DialogContent } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import WifiIcon from "@mui/icons-material/Wifi";
import Battery90Icon from "@mui/icons-material/Battery90";
import PlansCard from "./PlansCard";
import GenerateDurationCard from "./GenerateDurationCard";
import PaymentOption from "./PaymentOption";
import { useState } from "react";

const PaymentDialog = ({ open, isSelected, setIsSelected }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const date = new Date();
  const showTime = date.getHours() + ":" + date.getMinutes();

  let durationArray = [
    { duration: "7 Days" },
    { duration: "15 Days" },
    { duration: "30 Days" },
  ];

  return (
    <Dialog open={open} sx={{ paddingTop: "5rem", borderRadius: "20px" }}>
      <DialogContent sx={{}}>
        <Box>
          <Box
            sx={{
              display: "flex",
              placeContent: "space-between",
              width: "100%",
              padding: "0.5rem",
            }}
          >
            <Box>{showTime}</Box>
            <Box>
              <SignalCellularAltIcon />
              <WifiIcon />
              <Battery90Icon />
            </Box>
          </Box>
          <Box sx={{ display: "flex", paddingBottom: "0.5rem" }}>
            <Box>
              {" "}
              <ArrowBackIcon color="black" />
            </Box>
            <Box sx={{ width: "100%", textAlign: "center" }}>
              <Typography variant="h6">Payment</Typography>
            </Box>
          </Box>
          <Divider color="black" />
          <Box sx={{ display: "flex", padding: "1rem" }}>
            <PlansCard
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
            />
          </Box>
        </Box>
        <Box sx={{ display: "flex", padding: "1rem" }}>
          <Grid container spacing={2}>
            {durationArray.map((data, index) => (
              <Grid item xs={4} sm={4} key={index}>
                <GenerateDurationCard
                  data={data}
                  selectedIndex={selectedIndex}
                  setSelectedIndex={setSelectedIndex}
                  index={index}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        <PaymentOption />
        <Box sx={{ display: "flex", placeContent: "center", padding: "1rem" }}>
          <Typography variant="caption">
            * Terms and Conditions Applied
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentDialog;
