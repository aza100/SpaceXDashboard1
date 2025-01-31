import React from 'react';
import { 
  Box, 
  Typography, 
  Chip,
  Divider,
  Paper,
  Grid 
} from '@mui/material';

function LaunchDetail({ launch }) {
  return (
    <Box sx={{ 
      p: 3, 
      height: '100vh',
      overflow: 'auto',
      '&::-webkit-scrollbar': {
        width: '8px'
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: '4px'
      }
    }}>
      <Typography variant="h4" gutterBottom>
        {launch.name}
      </Typography>
      
      <Chip 
        label={launch.success ? 'Success' : 'Failed'} 
        color={launch.success ? 'success' : 'error'} 
        sx={{ mb: 2 }}
      />

      {launch.links?.webcast && (
        <Box sx={{ mb: 3 }}>
          <Paper sx={{ p: 2, background: 'rgba(26, 44, 78, 0.6)' }}>
            <Typography variant="h6" gutterBottom sx={{ color: '#00f5ff' }}>
              Watch Launch
            </Typography>
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${launch.links.webcast.split('v=')[1]}`}
              title="Launch Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Paper>
        </Box>
      )}

      <Typography variant="subtitle1" gutterBottom>
        Launch Date: {new Date(launch.date_utc).toLocaleString()}
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, background: 'rgba(26, 44, 78, 0.6)' }}>
            <Typography variant="h6" gutterBottom sx={{ color: '#00f5ff' }}>
              Launch Site Map
            </Typography>
            {launch.launchpad_lat && launch.launchpad_long ? (
              <Box sx={{ width: '100%', height: '300px', borderRadius: 1, overflow: 'hidden' }}>
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${launch.launchpad_lat},${launch.launchpad_long}&zoom=12`}
                />
              </Box>
            ) : (
              <Typography variant="body1">
                Launch site coordinates not available
              </Typography>
            )}
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, background: 'rgba(26, 44, 78, 0.6)' }}>
            <Typography variant="h6" gutterBottom sx={{ color: '#00f5ff' }}>
              Mission Overview
            </Typography>
            <Typography variant="body1" paragraph>
              {launch.details || 'No details available'}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, background: 'rgba(26, 44, 78, 0.6)' }}>
            <Typography variant="h6" gutterBottom sx={{ color: '#00f5ff' }}>
              Scientific Achievements
            </Typography>
            <Typography variant="body1" paragraph>
              {launch.payloads?.length ? 
                `This mission carried ${launch.payloads.length} payload(s) to space, ` +
                `contributing to ${launch.payloads.map(p => p.type).join(', ')} research.` :
                'No payload information available'}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, background: 'rgba(26, 44, 78, 0.6)' }}>
            <Typography variant="h6" gutterBottom sx={{ color: '#00f5ff' }}>
              Mission Statistics
            </Typography>
            <Typography variant="body1" component="div">
              <Box sx={{ mb: 1 }}>
                🚀 Flight Number: #{launch.flight_number}
              </Box>
              <Box sx={{ mb: 1 }}>
                🛰️ Orbit: {launch.payloads?.[0]?.orbit || 'Not specified'}
              </Box>
              <Box>
                📍 Launch Site: {launch.launchpad || 'Not specified'}
              </Box>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LaunchDetail;