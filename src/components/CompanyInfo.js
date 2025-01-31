import React from 'react';
import { 
  Box, 
  Typography, 
  Paper,
  Grid,
  Link
} from '@mui/material';
import NavBar from './NavBar';

function CompanyInfo() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <NavBar successFilter="all" onSuccessFilterChange={() => {}} />
      <Box sx={{ p: 3, flex: 1, overflow: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        About SpaceX
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 3, background: 'rgba(26, 44, 78, 0.6)' }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={8}>
                <Typography variant="h6" gutterBottom sx={{ color: '#00f5ff' }}>
                  Company Overview
                </Typography>
                <Typography variant="body1" paragraph>
                  Space Exploration Technologies Corp. (SpaceX) is an American spacecraft manufacturer, space launch provider,
                  and satellite communications company headquartered in Hawthorne, California. Founded by Elon Musk in 2002,
                  SpaceX's mission is to reduce space transportation costs and enable the colonization of Mars.
                </Typography>
                <Typography variant="body1" paragraph>
                  With over 12,000 employees across multiple facilities, SpaceX has revolutionized the space industry through
                  its innovative approach to spacecraft design and reusability. The company's achievements include becoming the
                  first private company to launch, orbit, and recover a spacecraft, and send astronauts to the International
                  Space Station.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                <Box
                  component="img"
                  src="https://www.spacex.com/static/images/share.jpg"
                  alt="SpaceX Headquarters"
                  sx={{
                    width: '280px',
                    height: 'auto',
                    borderRadius: '12px',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.02)'
                    }
                  }}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, background: 'rgba(26, 44, 78, 0.6)' }}>
            <Typography variant="h6" gutterBottom sx={{ color: '#00f5ff' }}>
              Key Achievements
            </Typography>
            <Typography variant="body1" component="div">
              <Box sx={{ mb: 1 }}>• First privately funded company to send a spacecraft to the ISS</Box>
              <Box sx={{ mb: 1 }}>• Development of reusable rocket technology</Box>
              <Box sx={{ mb: 1 }}>• Successful landing and reuse of orbital rocket boosters</Box>
              <Box>• Development of the Starship spacecraft for Mars missions</Box>
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, background: 'rgba(26, 44, 78, 0.6)' }}>
            <Typography variant="h6" gutterBottom sx={{ color: '#00f5ff' }}>
              Technologies
            </Typography>
            <Typography variant="body1" component="div">
              <Box sx={{ mb: 1 }}>• Falcon 9 - Reusable two-stage rocket</Box>
              <Box sx={{ mb: 1 }}>• Falcon Heavy - Heavy-lift launch vehicle</Box>
              <Box sx={{ mb: 1 }}>• Dragon - Spacecraft for cargo and crew</Box>
              <Box>• Starship - Next-generation spacecraft</Box>
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 3, background: 'rgba(26, 44, 78, 0.6)' }}>
            <Typography variant="h6" gutterBottom sx={{ color: '#00f5ff' }}>
              Mission Statement
            </Typography>
            <Typography variant="body1" paragraph>
              SpaceX's ultimate goal is to enable people to live on other planets. The company is working to revolutionize
              space technology, with the ultimate goal of enabling human life on Mars.
            </Typography>
            <Typography variant="body2" sx={{ mt: 2 }}>
              For more information, visit{' '}
              <Link href="https://www.spacex.com" target="_blank" rel="noopener" sx={{ color: '#00f5ff' }}>
                SpaceX's official website
              </Link>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      </Box>
    </Box>
  );
}

export default CompanyInfo;