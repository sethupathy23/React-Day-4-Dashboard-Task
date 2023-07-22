import { CardContent, Paper } from "@mui/material";


export function Illustrations() {
  return (
    <Paper className="illustration" elevation={3}>
      <div>
        <h1 style={{ paddingLeft: "10px" }}>Illustrations</h1>
        <img
          className="img"
          src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg"
          alt="illustration"
        />
      </div>
      <CardContent>
        Add some quality, svg illustrations to your project courtesy of unDraw,
        a constantly updated collection of beautiful svg images that you can use
        completely free and without attribution!
      </CardContent>
   
    </Paper>
  );
}