import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Box } from '@mui/material';
import LaunchDashboard from './LaunchDashboard';
import CompanyInfo from './CompanyInfo';

function AppRoutes() {
  return (
    <Router>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<LaunchDashboard />} />
          <Route path="/company" element={<CompanyInfo />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default AppRoutes;