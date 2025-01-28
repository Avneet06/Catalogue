import React, { useState } from 'react';
import { Box, Grid, Card, CardMedia, CardContent, CardActions, Typography, Button, Modal } from '@mui/material';
import products from '../product';

function OurProducts() {
  const [enlargedImage, setEnlargedImage] = useState(null);

  // Handle the "Show More" button click
  const handleShowMore = (product) => {
    setEnlargedImage(product.image); // Show the enlarged image
  };

  // Close the enlarged image modal
  const handleCloseImageEnlarge = () => {
    setEnlargedImage(null);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        padding: '20px',
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h4"
        
        gutterBottom
        sx={{
          marginBottom: { xs: '30px', sm: '40px', md: '50px' }, // Add a gap between the heading and cards
          fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.6rem' }, // Responsive font sizes
          fontWeight: 'bold',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          color: 'primary.main', // Theme primary color
          position: 'relative',
          display: 'inline-block', // Align heading in the center
          '&::after': {
            content: '""',
            position: 'absolute',
            left: '50%',
            bottom: '-10px',
            transform: 'translateX(-50%)',
            width: '70px',
            height: '4px',
            backgroundColor: 'primary.main',
            borderRadius: '2px',
          },
        }}
      >
        Top Products
      </Typography>

      {/* Product Grid */}
      <Grid container spacing={3} justifyContent="center">
        {products.slice(0, 4).map((product) => (
          <Grid
            item
            xs={6}
            sm={6}
            md={4}
            lg={3}
            key={product.id}
          >
           <Card
  sx={{
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%", // Maintain consistent card height
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
      padding: { xs: "8px", sm: "12px" }, // Reduce padding for CardContent
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
        marginBottom: 0, // Remove unnecessary bottom margin
      }}
    >
      {product.description}
    </Typography>
  </CardContent>
  <CardActions
    sx={{
      padding: { xs: "4px 8px", sm: "6px 12px" }, // Reduce padding
      justifyContent: "flex-start", // Align button to the left
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

      {/* Modal for Enlarged Image */}
      <Modal open={!!enlargedImage} onClose={handleCloseImageEnlarge}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '90vw', sm: '70vw', md: '50vw' }, // Adjust width based on screen size
            maxHeight: '90vh',
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 24,
            p: 2,
          }}
        >
          {enlargedImage && (
            <>
              <CardMedia
                component="img"
                image={enlargedImage}
                alt="Enlarged Product"
                sx={{
                  objectFit: 'contain',
                  width: '100%',
                  maxHeight: '70vh', // Constrain height to fit within the screen
                }}
              />
              <Button
                variant="contained"
                color="secondary"
                onClick={handleCloseImageEnlarge}
                sx={{
                  marginTop: 2,
                  width: '100%',
                }}
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

export default OurProducts;
