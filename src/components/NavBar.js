import React from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Box,
  ToggleButtonGroup,
  ToggleButton,
  Button
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

function NavBar({ successFilter, onSuccessFilterChange }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isLaunchDashboard = location.pathname === '/dashboard';

  return (
    <AppBar position="static" sx={{ 
      background: 'rgba(26, 44, 78, 0.8)',
      backdropFilter: 'blur(10px)'
     }}>
      <Toolbar sx={{ minHeight: '56px' }}>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          flexGrow: 1 
        }}>
          <Typography
            variant="h6"
            sx={{
              background: 'linear-gradient(45deg, #00f5ff 30%, #7b1fa2 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold',
              fontSize: '1.5rem',
              mr: 2,
              cursor: 'pointer'
            }}
            onClick={() => navigate('/dashboard')}
          >
            SpaceX Launch Dashboard
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant="text"
              onClick={() => navigate('/dashboard')}
              sx={{
                color: isLaunchDashboard ? '#00f5ff' : 'white',
                '&:hover': { color: '#00f5ff' }
              }}
            >
              Dashboard
            </Button>
            <Button
              variant="text"
              onClick={() => navigate('/company')}
              sx={{
                color: !isLaunchDashboard ? '#00f5ff' : 'white',
                '&:hover': { color: '#00f5ff' }
              }}
            >
              Company Info
            </Button>
          </Box>
        </Box>

        {isLaunchDashboard && (
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <ToggleButtonGroup
              value={successFilter}
              exclusive
              onChange={(e, value) => onSuccessFilterChange(value)}
              size="small"
              sx={{
                height: '32px',
                '& .MuiToggleButton-root': {
                  color: 'white',
                  borderColor: 'rgba(255, 255, 255, 0.23)',
                  padding: '4px 12px',
                  fontSize: '0.8125rem',
                  '&.Mui-selected': {
                    backgroundColor: 'rgba(0, 245, 255, 0.2)',
                    color: '#00f5ff'
                  }
                }
              }}
            >
              <ToggleButton value="success">
                Success Only
              </ToggleButton>
              <ToggleButton value="all">
                All
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;