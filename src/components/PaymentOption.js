import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import paymentOption from "../dist/paymentoption.png";
import paymentOptionColor from "../dist/paymentoptioncolor.png";

const PaymentOption = () => {
  return (
    <Box sx={{ padding: "1rem" }}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Stack spacing={2}>
            <Button
              variant="contained"
              sx={{
                display: "flex",
                placeContent: "space-between",
                fontWeight: "500",
              }}
              fullWidth
            >
              <Typography variant="h7">Pay With UPI</Typography>
              <img
                src={paymentOptionColor}
                sx={{ width: "50px", height: "60px" }}
                alt="logo"
              />
            </Button>
            <Box
              sx={{
                display: "flex",
                placeContent: "center",
              }}
            >
              OR
            </Box>
            <Button
              variant="outlined"
              sx={{
                display: "flex",
                placeContent: "space-between",
                fontWeight: "500",
              }}
              fullWidth
            >
              <Typography variant="h7">Pay with other option</Typography>
              <img
                src={paymentOption}
                sx={{ width: "50px", height: "60px" }}
                alt="logo"
              />
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PaymentOption;
