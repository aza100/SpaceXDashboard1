import React, { useState, useEffect } from 'react';
import { Box, Grid, Paper, Drawer, Stepper, Step, StepLabel, StepButton } from '@mui/material';
import LaunchGrid from './LaunchGrid';
import LaunchDetail from './LaunchDetail';
import NavBar from './NavBar';
import { fetchLaunches } from '../services/spaceXApi';

function LaunchDashboard() {
  const [launches, setLaunches] = useState([]);
  const [selectedLaunch, setSelectedLaunch] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [years, setYears] = useState([]);
  const [successFilter, setSuccessFilter] = useState('all');

  useEffect(() => {
    const getLaunches = async () => {
      const data = await fetchLaunches();
      setLaunches(data);
      if (data.length > 0) {
        setSelectedLaunch(data[0]);
        
        // Extract unique years from launches
        const uniqueYears = [...new Set(data.map(launch => 
          new Date(launch.date_utc).getFullYear()
        ))].sort((a, b) => b - a);
        setYears(uniqueYears);
      }
    };
    getLaunches();
  }, []);

  const filteredLaunches = launches.filter(launch => {
    const yearMatch = selectedYear === null || 
      new Date(launch.date_utc).getFullYear() === selectedYear;
    const successMatch = successFilter === 'all' || 
      (successFilter === 'success' && launch.success === true);
    return yearMatch && successMatch;
  });

  const [drawerWidth, setDrawerWidth] = useState(window.innerWidth * 0.5);
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  const handleMouseDown = (e) => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    const newWidth = window.innerWidth - e.clientX;
    if (newWidth >= 300 && newWidth <= window.innerWidth * 0.7) {
      setDrawerWidth(newWidth);
    }
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
      <NavBar 
        years={years}
        selectedYear={selectedYear}
        onYearChange={setSelectedYear}
        successFilter={successFilter}
        onSuccessFilterChange={setSuccessFilter}
      />
      <Box sx={{ px: 4, py: 4, background: 'transparent', mb: 0 }}>
        <Stepper 
          nonLinear 
          alternativeLabel
          connector={null}
          sx={{
            py: 1,
            minHeight: '60px',
            '& .MuiStepLabel-label': {
              color: 'rgba(255,255,255,0.5)',
              fontSize: '0.9rem',
              marginTop: '8px',
              '&.Mui-active': { 
                color: '#00f5ff',
                fontWeight: 600,
                textShadow: '0 0 8px rgba(0,245,255,0.4)'
              }
            },
            '& .MuiStepIcon-root': {
              color: 'rgba(255,255,255,0.2)',
              width: '28px',
              height: '28px',
              '&.Mui-active': {
                color: '#00f5ff',
                filter: 'drop-shadow(0 0 4px #00f5ff)',
                background: 'radial-gradient(circle at center, rgba(0,245,255,0.3) 0%, transparent 70%)',
                borderRadius: '50%',
                transform: 'scale(1.1)'
              },
              '&.Mui-completed': {
                color: 'rgba(0,245,255,0.5)'
              },
              '& .MuiStepIcon-text': {
                display: 'none'
              }
            },
            '& .MuiStepButton-root': {
              padding: '8px 16px',
              borderRadius: 1,
              transition: 'all 0.2s ease-in-out',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.05)',
                '& .MuiStepIcon-root': {
                  color: 'rgba(0,245,255,0.3)',
                  transform: 'scale(1.05)'
                }
              },
              '&.Mui-active': {
                backgroundColor: 'rgba(0,245,255,0.1)'
              }
            }
          }}
        >
          {years.map((year) => (
            <Step 
              key={year} 
              completed={false}
              active={selectedYear === year}
            >
              <StepButton onClick={() => setSelectedYear(year)}>
                {year}
              </StepButton>
            </Step>
          ))}
        </Stepper>
      </Box>
      <Box sx={{ display: 'flex', flex: 1, overflow: 'hidden' }}>

        <Box sx={{ flexGrow: 1, overflow: 'hidden' }}>
          <LaunchGrid 
            launches={filteredLaunches}
            selectedLaunch={selectedLaunch}
            onSelectLaunch={(launch) => {
              setSelectedLaunch(launch);
              setIsDrawerOpen(true);
            }}
          />
        </Box>
        <Drawer
          variant="persistent"
          anchor="right"
          open={isDrawerOpen}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              position: 'relative',
              background: 'rgba(26, 44, 78, 0.8)',
              backdropFilter: 'blur(10px)',
              borderLeft: '1px solid rgba(255, 255, 255, 0.12)'
            },
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: '4px',
              cursor: 'ew-resize',
              '&:hover': {
                backgroundColor: 'primary.main',
              },
            }}
            onMouseDown={handleMouseDown}
          />
          {selectedLaunch && <LaunchDetail launch={selectedLaunch} />}
        </Drawer>
      </Box>
    </Box>
  );
}

export default LaunchDashboard;