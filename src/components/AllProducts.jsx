import React, { useState } from "react";
import {
  Typography,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Modal,
  IconButton,
  Tooltip,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import products from "../product.js";

function AllProducts() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const handleShowMore = (product) => {
    setSelectedProduct(product);
    setTooltipOpen(true); // Open tooltip when modal opens
  };

  const handleClose = () => {
    setSelectedProduct(null);
    setTooltipOpen(false); // Close tooltip when modal closes
  };

  const handleDownloadImage = (url, name) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = name || "download"; // Set a default name if none provided
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        padding: "20px",
        backgroundColor: "#f0f0f0",
        textAlign: "center",
      }}
    >
      {/* Heading */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          marginBottom: { xs: "30px", sm: "40px", md: "50px" },
          fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.6rem" },
          fontWeight: "bold",
          textTransform: "uppercase",
          letterSpacing: "2px",
          color: "primary.main",
          position: "relative",
          display: "inline-block",
          "&::after": {
            content: '""',
            position: "absolute",
            left: "50%",
            bottom: "-10px",
            transform: "translateX(-50%)",
            width: "70px",
            height: "4px",
            backgroundColor: "primary.main",
            borderRadius: "2px",
          },
        }}
      >
        All Products
      </Typography>

      {/* Product Grid */}
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{ marginBottom: "50px" }}
      >
        {products.map((product) => (
          <Grid
            item
            xs={6}
            sm={6}
            md={4}
            lg={3}
            key={product.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.name}
                sx={{
                  objectFit: "fill",
                  width: "100%",
                  height: "140px",
                }}
              />
              <CardContent
                sx={{
                  padding: { xs: "8px", sm: "12px" },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" },
                  }}
                >
                  {product.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{
                    fontSize: { xs: "0.7rem", sm: "0.85rem", md: "1rem" },
                    marginBottom: 0,
                  }}
                >
                  {product.description}
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  padding: { xs: "4px 8px", sm: "6px 12px" },
                  justifyContent: "flex-start",
                }}
              >
                <Button
                  size="small"
                  color="primary"
                  onClick={() => handleShowMore(product)}
                  sx={{
                    fontSize: { xs: "0.7rem", sm: "0.85rem", md: "1rem" },
                    padding: { xs: "4px 8px", sm: "6px 12px", md: "8px 16px" },
                  }}
                >
                  Show More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Add space at the bottom */}
      <Box
        sx={{
          height: "50px",
        }}
      />

      {/* Product Image Zoom Modal */}
      <Modal open={!!selectedProduct} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90vw", sm: "70vw", md: "50vw" },
            maxHeight: "90vh",
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            p: 2,
          }}
        >
          {selectedProduct && (
            <>
              {/* Zoomed Product Image */}
              <CardMedia
                component="img"
                image={selectedProduct.image}
                alt={selectedProduct.name}
                sx={{
                  objectFit: "contain",
                  width: "100%",
                  height: "auto",
                }}
              />

              {/* Download Button with Tooltip */}
              <Tooltip
                title="Click to download image"
                open={tooltipOpen}
                onClose={() => setTooltipOpen(false)}
                disableHoverListener // Prevent hover activation
              >
                <IconButton
                  color="primary"
                  onClick={() =>
                    handleDownloadImage(selectedProduct.image, selectedProduct.name)
                  }
                  sx={{ position: "absolute", top: 10, right: 10 }}
                >
                  <DownloadIcon />
                </IconButton>
              </Tooltip>

              {/* Close Button */}
              <Button
                variant="contained"
                color="secondary"
                onClick={handleClose}
                fullWidth
                sx={{ marginTop: 2 }}
              >
                Close
              </Button>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
}

export default AllProducts;
