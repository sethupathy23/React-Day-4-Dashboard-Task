import React, { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Validation: Check if email or password is empty
    if (!email || !password) {
      setError("Both fields are required!");
    } else {
      setError("");
      alert("Login successful! Redirecting to home page...");
      // Navigate to home page
      window.location.href = "/home"; // Replace '/home' with your actual home page route
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={2}
        sx={{
          padding: "20px",
          marginTop: "50px",
          width: { xs: "90%", sm: "350px" },
          marginLeft: "auto",
          marginRight: "auto",
          backgroundImage: "image.png",
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            variant="h4"
            component="h1"
            style={{
              background: "linear-gradient(90deg, #6a11cb, #2575fc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "20px",
            }}
          >
            Welcome Back
          </Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            Please sign in to continue!
          </Typography>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            style={{ width: "90%", marginTop: "20px" }}
            onSubmit={handleLogin}
          >
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              required
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              required
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && (
              <Typography
                variant="body2"
                color="error"
                style={{ marginTop: "10px", textAlign: "center" }}
              >
                {error}
              </Typography>
            )}
            <Typography
              variant="body2"
              color="primary"
              style={{
                cursor: "pointer",
                textAlign: "right",
                marginTop: "10px",
              }}
            >
              Forgot Password?
            </Typography>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              style={{
                marginTop: "20px",
                background: "linear-gradient(90deg, #6a11cb, #2575fc)",
                color: "#fff",
              }}
            >
              Login
            </Button>
            <Typography
              variant="body2"
              style={{
                textAlign: "center",
                marginTop: "20px",
                color: "#757575",
              }}
            >
              Don’t have an account?{" "}
              <span style={{ color: "#2575fc", cursor: "pointer" }}>
                Sign up
              </span>
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default LoginPage;
