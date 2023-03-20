import { Grid } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const PlansDetails = () => {
  // function createData(name, perDayPrice, totalSavings, totalAmount) {
  //   return { name, perDayPrice, totalSavings, totalAmount };
  // }

  const rows = [
    { name: "Per Day Price", col1: 7000, col2: 15000, col3: 30000 },
    { name: "Total Savings", col1: 700, col2: 2250, col3: 6000 },
    { name: "Total Amount", col1: 6300, col2: 12750, col3: 24000 },
  ];

  // console.log(rows);
  const handlePlanClick = (e, index) => {
    console.log(index);
  };

  const handleClick = () => {
    console.log("yes");
  };

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell onClick={(e) => handlePlanClick(e, 1)} align="right">
                  7 Days
                </TableCell>
                <TableCell onClick={(e) => handlePlanClick(e, 2)} align="right">
                  15 Days
                </TableCell>
                <TableCell onClick={(e) => handlePlanClick(e, 3)} align="right">
                  30 Days
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  // onClick={(e) => handlePlanClick(e, index)}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell onClick={() => handleClick()} align="right">
                    {row.col1}
                    <CurrencyRupeeIcon fontSize="2rem" />
                  </TableCell>
                  <TableCell align="right">
                    {row.col2}
                    <CurrencyRupeeIcon fontSize="2rem" />
                  </TableCell>
                  <TableCell align="right">
                    {row.col3}
                    <CurrencyRupeeIcon fontSize="2rem" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default PlansDetails;
