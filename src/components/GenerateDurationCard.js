import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Badge from "@mui/material/Badge";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";

import "./PlansCard.css";

const GenerateDurationCard = ({
  data,
  selectedIndex,
  setSelectedIndex,
  index,
}) => {
  return (
    <>
      <Badge
        badgeContent={selectedIndex === index ? <CheckRoundedIcon /> : 0}
        color="primary"
      >
        <Card
          className={selectedIndex === index ? "selected-pack" : "null"}
          sx={{
            minWidth: 50,
            minHeight: 50,
          }}
        >
          <CardContent className="views">
            <Box>{data.duration}</Box>
          </CardContent>
        </Card>
      </Badge>
    </>
  );
};
export default GenerateDurationCard;
