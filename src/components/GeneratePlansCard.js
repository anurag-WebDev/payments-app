import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

import Stack from "@mui/material/Stack";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import "./PlansCard.css";

const GeneratePlansCard = ({
  row,
  index,
  isSelected,
  setIsSelected,
  selectedIndex,
  setSelectedIndex,
}) => {
  const handleCardClick = (index) => {
    let updatedIndex = index;
    setSelectedIndex(updatedIndex);
  };

  return (
    <>
      <Card
        className="views"
        sx={{ minWidth: 100, minHeight: 200, boxShadow: "none" }}
      >
        <CardContent onClick={(e) => handleCardClick(index)}>
          <Stack
            sx={{ textAlign: "center" }}
            className={selectedIndex === index ? "selected-pack" : "null"}
          >
            <Box className={selectedIndex === index ? "selected-card" : "null"}>
              <p className="views">{row.planTerm}</p>
            </Box>
            <Box>
              <p className="views">
                {row.col1}
                <CurrencyRupeeIcon fontSize="1px" />
              </p>
            </Box>
            <Box>
              <p className="views">
                {row.col2}
                <CurrencyRupeeIcon fontSize="1px" />
              </p>
            </Box>
            <Box sx={{ fontWeight: "bold" }}>
              <p className="views">
                {row.col3}
                <CurrencyRupeeIcon fontSize="1px" />
              </p>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};
export default GeneratePlansCard;
