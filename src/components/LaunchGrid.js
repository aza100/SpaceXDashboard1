import React from 'react';
import { 
  Paper, 
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box
} from '@mui/material';

function LaunchGrid({ launches, selectedLaunch, onSelectLaunch }) {
  // Sort launches by date (newest first)
  const sortedLaunches = [...launches].sort((a, b) => 
    new Date(b.date_utc) - new Date(a.date_utc)
  );

  const getImageUrl = (launch) => {
    if (launch.links?.patch?.small) return launch.links.patch.small;
    if (launch.links?.flickr?.original?.[0]) return launch.links.flickr.original[0];
    if (launch.links?.flickr?.small?.[0]) return launch.links.flickr.small[0];
    return `data:image/svg+xml,${encodeURIComponent('<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23001F3F"/><stop offset="100%" style="stop-color:%234A90E2"/></linearGradient></defs><rect width="200" height="200" fill="url(%23grad)"/><text x="50%" y="50%" font-family="Arial" font-size="48" text-anchor="middle" dy=".3em" fill="white">🚀</text></svg>')}`;
  };

  return (
    <Paper sx={{ height: '100vh', overflow: 'auto', p: 2, '&::-webkit-scrollbar': { width: '8px' }, '&::-webkit-scrollbar-thumb': { backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '4px' } }}>
      <Grid container spacing={2}>
        {sortedLaunches.map((launch) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={launch.id}>
            <Card 
              sx={{ 
                cursor: 'pointer',
                border: selectedLaunch?.id === launch.id ? 2 : 0,
                borderColor: 'primary.main',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: (theme) => `0 8px 24px ${theme.palette.primary.main}40`
                },
                background: 'linear-gradient(145deg, rgba(26, 44, 78, 0.8) 0%, rgba(10, 25, 47, 0.9) 100%)',
                backdropFilter: 'blur(10px)',
                borderRadius: 2
              }}
              onClick={() => onSelectLaunch(launch)}
              elevation={selectedLaunch?.id === launch.id ? 8 : 2}
            >
              <CardMedia
                component="img"
                height="200"
                image={getImageUrl(launch)}
                alt={launch.name}
                sx={{ 
                  objectFit: 'cover',
                  p: 2,
                  bgcolor: 'background.paper',
                  borderRadius: 1
                }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `data:image/svg+xml,${encodeURIComponent('<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23001F3F"/><stop offset="100%" style="stop-color:%234A90E2"/></linearGradient></defs><rect width="200" height="200" fill="url(%23grad)"/><text x="50%" y="50%" font-family="Arial" font-size="48" text-anchor="middle" dy=".3em" fill="white">🚀</text></svg>')}`;
                }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom noWrap sx={{ color: '#00f5ff' }}>
                  {launch.name} {launch.success && launch.payloads?.[0]?.orbit ? '🛰️' : ''}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                    {new Date(launch.date_utc).toLocaleDateString()}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{
                      color: launch.success ? '#4caf50' : '#f44336',
                      fontWeight: 'bold',
                      px: 1,
                      py: 0.5,
                      borderRadius: 1,
                      bgcolor: launch.success ? 'rgba(76, 175, 80, 0.1)' : 'rgba(244, 67, 54, 0.1)'
                    }}
                  >
                    {launch.success ? 'Success' : 'Failed'}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}

export default LaunchGrid;