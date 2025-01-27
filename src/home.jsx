import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
// import "./App.css";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="app">
      {/* Navbar */}
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            MyLogo
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Information</Button>
          <Button color="inherit">Contact Us</Button>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, padding: 4 }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Weather App
                </Typography>
                <img src="ima1.jpg" width={"300px"} />
                <Typography variant="body2" color="text.secondary">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Odio, suscipit nulla officia hic aliquid accusamus cumque
                  excepturi et dolorum nisi.
                </Typography>
                <Button
                  style={{ marginleft: "30px" }}
                  onClick={() => navigate("/weather")}
                >
                  click here
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Image Genrator
                </Typography>
                <img src="ima1.jpg" width={"300px"} />
                <Typography variant="body2" color="text.secondary">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Odio, suscipit nulla officia hic aliquid accusamus cumque
                  excepturi et dolorum nisi.
                </Typography>
                <Button
                  style={{ marginleft: "30px" }}
                  onClick={() => navigate("/imagegenrator")}
                >
                  click here
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Tictactoe
                </Typography>
                <img src="ima1.jpg" width={"300px"} />
                <Typography variant="body2" color="text.secondary">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Odio, suscipit nulla officia hic aliquid accusamus cumque
                  excepturi et dolorum nisi.
                </Typography>
                <Button
                  style={{ marginleft: "30px" }}
                  onClick={() => navigate("/tictactoe")}
                >
                  click here
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          bgcolor: "primary.main",
          color: "white",
          textAlign: "center",
          py: 2,
        }}
      >
        <Typography variant="body2">
          © 2025 MyCompany. All rights reserved.
        </Typography>
      </Box>
    </div>
  );
};

export default Home;
