import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import "./PlansCard.css";
import GeneratePlansCard from "./GeneratePlansCard";

const PlansCard = ({ selectedIndex, setSelectedIndex }) => {
  const cardArray = [
    { planTerm: "7 Days", col1: "7000", col2: "700", col3: "6300" },
    { planTerm: "15 Days", col1: "15000", col2: "2250", col3: "12750" },
    { planTerm: "30 Days", col1: "30000", col2: "12750", col3: "24000" },
  ];

  return (
    <>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card
              sx={{
                minWidth: 100,
                minHeight: 200,
                paddingTop: "2rem",
                boxShadow: "none",
              }}
            >
              <CardContent>
                <Stack>
                  <Box>
                    <p className="views"></p>
                  </Box>
                  <Box sx={{ fontWeight: "500" }}>
                    <p className="views">Per Day Price</p>
                  </Box>
                  <Box sx={{ fontWeight: "500" }}>
                    <p className="views">Total Savings</p>
                  </Box>
                  <Box sx={{ fontWeight: "bold" }}>
                    <p className="views">Total Amount</p>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ paddingTop: "6px" }}>
        {" "}
        <Grid container spacing={4}>
          {cardArray.map((row, index) => (
            <Grid item xs={12} sm={3} md={3} key={index}>
              <GeneratePlansCard
                row={row}
                index={index}
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default PlansCard;
