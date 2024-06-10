import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

export default function MediaControlCard({ data }) {
  return (
    <>
    <div className="flex flex-col space-y-10">
      {data.map((item, index) => (
        <Card
          key={index}
          sx={{
            display: "flex",
            height: 358,
            backgroundColor: "rgba(37, 36, 40, 1)",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", width: 400 }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography
                variant="subtitle1"
                component="div"
                className="text-white"
              >
                {item.title}
              </Typography>
              <Typography className="text-white" component="div" variant="h5">
                {item.subTitle}
              </Typography>
            </CardContent>
            <Typography
              sx={{ marginLeft: 4 }}
              className="text-white"
              component="div"
              variant="h7"
            >
              View Full Project
            </Typography>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 451, backgroundColor: "rgba(37, 36, 40, 1)" }}
            image={item.img}
            alt="Project image"
          />
        </Card>
      ))}
    </div>
    </>
  );
}

MediaControlCard.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subTitle: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    })
  ).isRequired,
};
