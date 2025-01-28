import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText, Modal, TextField } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate, useLocation } from "react-router-dom"; // Import useLocation
import emailjs from "@emailjs/browser";

function Header({ onAboutClick }) {
  const navigate = useNavigate();
  const location = useLocation(); // Hook to get the current route
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({ user_query: "", user_email: "", user_name: "" });

  const handleModalOpen = () => {
    setModalOpen(true);
    setDrawerOpen(false);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceID = "service_4wlnuik";
    const templateID = "template_l3rxlbr";
    const publicKey = "Wbd4BEfVZOvEs7dNK";

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(() => {
        alert("Your query has been submitted successfully!");
        setFormData({ user_query: "", user_email: "", user_name: "" });
        setModalOpen(false);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("An error occurred. Please try again later.");
      });
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: { xs: "10px", sm: "15px 30px" },
          }}
        >
          {/* Logo */}
          <Box sx={{ borderRadius: "50%", padding: "5px", width: "60px", height: "60px" }}>
            <img
              src="/Subject.PNG"
              alt="Logo"
              style={{ width: "50px", height: "50px", borderRadius: "50%", objectFit: "cover" }}
            />
          </Box>

          {/* Title */}
          <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: { xs: "18px", sm: "24px" } }}>
            Flyfot Life Sciences
          </Typography>

          {/* Hamburger Menu */}
          <Box sx={{ display: { xs: "flex", sm: "none" } }}>
            <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
              <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
                <List>
                  {/* Toggle Button */}
                  <ListItem
                    button
                    onClick={() => {
                      location.pathname === "/all-products"
                        ? navigate("/")
                        : navigate("/all-products");
                      setDrawerOpen(false);
                    }}
                  >
                    <ListItemText
                      primary={location.pathname === "/all-products" ? "Top Products" : "All Products"}
                    />
                  </ListItem>
                  <ListItem button onClick={() => navigate("/about")}>
                    <ListItemText primary="About" />
                  </ListItem>
                  <ListItem button onClick={handleModalOpen}>
                    <ListItemText primary="Have a Query?" />
                  </ListItem>
                </List>
              </Box>
            </Drawer>
          </Box>

          {/* Desktop Buttons */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
            <Button
              color="inherit"
              onClick={() =>
                location.pathname === "/all-products" ? navigate("/") : navigate("/all-products")
              }
            >
              {location.pathname === "/all-products" ? "Top Products" : "All Products"}
            </Button>
            <Button color="inherit" onClick={() => navigate("/about")}>
              About
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Modal for Query Form */}
      <Modal open={modalOpen} onClose={handleModalClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", sm: "400px" },
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
            Have a Query?
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Your Name"
              name="user_name"
              value={formData.user_name}
              onChange={handleInputChange}
              sx={{ mb: 2 }}
              required
            />
            <TextField
              fullWidth
              label="Your Query"
              name="user_query"
              value={formData.user_query}
              onChange={handleInputChange}
              multiline
              rows={4}
              sx={{ mb: 2 }}
              required
            />
            <TextField
              fullWidth
              label="Your Email"
              name="user_email"
              value={formData.user_email}
              onChange={handleInputChange}
              type="email"
              sx={{ mb: 2 }}
              required
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
}

export default Header;
