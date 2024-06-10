import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import img from "../../assets/work/image 1.svg";

export default function MediaCard() {
  return (
    <Card
      sx={{
        maxWidth: 370,
        backgroundColor: "rgba(37, 36, 40, 1)",
        height: 412,
      }}
    >
      <CardMedia
        sx={{ height: 140, padding: 10, margin: 2 }}
        image={img}
        title="green iguana"
      />
      <CardContent>
        <div className="flex justify-between">
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="text-white"
          >
            Design
          </Typography>
          <Typography
            gutterBottom
            variant="h7"
            component="div"
            className="text-white"
          >
            12-Feb-2024
          </Typography>
        </div>
        <Typography variant="h6" className="text-white">
          Why UI Principles is always an key factor of Design
        </Typography>
      </CardContent>
      
    </Card>
  );
}
