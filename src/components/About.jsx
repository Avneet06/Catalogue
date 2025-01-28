import React from 'react';
import { Typography, Box } from '@mui/material';

const About = () => {
  return (
    <Box
      sx={{
        padding: { xs: '16px', sm: '24px', md: '32px' },
        margin:'auto',
        maxWidth: '800px',
        textAlign: 'center',
        backgroundColor: '#f9f9f9',
        borderRadius: 2,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* Section Title */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: 'bold',
          color: 'primary.main',
          marginBottom: '16px',
        }}
      >
        About Us
      </Typography>

      {/* Description */}
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
          marginBottom: '16px',
          lineHeight: 1.6,
          color: 'text.secondary',
        }}
      >
        Flyfot Life Sciences was established in 2012 as a Private Limited company focusing on developing products that cater to the needs of the market.
      </Typography>

      {/* Address Section */}
      <Box
        sx={{
          textAlign: 'left',
          fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1rem' },
          color: 'text.secondary',
          lineHeight: 1.8,
          marginTop: '16px',
        }}
      >
        <Typography>
          <strong>Address:</strong>
          <br />
          Flyfot House, D-4/83, Brijpuri, Delhi-110094, INDIA
        </Typography>

        <Typography sx={{ marginTop: '8px' }}>
          <strong>Email:</strong>
          <br />
          <a
            href="mailto:Flyfot_lifesciences@rediffmail.com"
            style={{ textDecoration: 'none', color: 'primary.main' }}
          >
            flyfot_lifesciences@rediffmail.com
          </a>
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
