import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Grid,
  Chip
} from '@mui/material';

function RocketModal({ open, onClose, rocket }) {
  if (!rocket) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          background: 'rgba(26, 44, 78, 0.95)',
          backdropFilter: 'blur(10px)',
          color: 'white'
        }
      }}
    >
      <DialogTitle sx={{ color: '#00f5ff', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        {rocket.name}
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={3} sx={{ mt: 1 }}>
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h6" sx={{ color: '#00f5ff', mb: 1 }}>
                Specifications
              </Typography>
              <Typography variant="body2" paragraph>
                {rocket.description}
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                <Chip
                  label={`Height: ${rocket.height?.meters}m`}
                  sx={{ background: 'rgba(0,245,255,0.1)' }}
                />
                <Chip
                  label={`Diameter: ${rocket.diameter?.meters}m`}
                  sx={{ background: 'rgba(0,245,255,0.1)' }}
                />
                <Chip
                  label={`Mass: ${rocket.mass?.kg.toLocaleString()}kg`}
                  sx={{ background: 'rgba(0,245,255,0.1)' }}
                />
              </Box>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ color: '#00f5ff', mb: 1 }}>
                Performance
              </Typography>
              <Typography variant="body2" component="div">
                <Box sx={{ mb: 1 }}>• Success Rate: {rocket.success_rate_pct}%</Box>
                <Box sx={{ mb: 1 }}>• Stages: {rocket.stages}</Box>
                <Box sx={{ mb: 1 }}>• Cost per Launch: ${rocket.cost_per_launch?.toLocaleString()}</Box>
                <Box>• First Flight: {rocket.first_flight}</Box>
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            {rocket.flickr_images?.[0] && (
              <Box
                component="img"
                src={rocket.flickr_images[0]}
                alt={rocket.name}
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                }}
              />
            )}
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" sx={{ color: '#00f5ff', mb: 1 }}>
              Engines
            </Typography>
            <Typography variant="body2" component="div">
              <Box sx={{ mb: 1 }}>• Type: {rocket.engines?.type}</Box>
              <Box sx={{ mb: 1 }}>• Version: {rocket.engines?.version}</Box>
              <Box sx={{ mb: 1 }}>• Thrust Sea Level: {rocket.engines?.thrust_sea_level?.kN}kN</Box>
              <Box>• Thrust Vacuum: {rocket.engines?.thrust_vacuum?.kN}kN</Box>
            </Typography>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions sx={{ borderTop: '1px solid rgba(255,255,255,0.1)', p: 2 }}>
        <Button
          onClick={onClose}
          sx={{
            color: '#00f5ff',
            '&:hover': { background: 'rgba(0,245,255,0.1)' }
          }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default RocketModal;