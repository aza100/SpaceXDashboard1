import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Paper,
  Grid,
  Link
} from '@mui/material';
import NavBar from './NavBar';
import RocketModal from './RocketModal';

function CompanyInfo() {
  const [selectedRocket, setSelectedRocket] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleRocketClick = (rocket) => {
    setSelectedRocket(rocket);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedRocket(null);
  };

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
              <Box sx={{ mb: 1 }}>
                • <Link
                    component="button"
                    onClick={() => handleRocketClick({
                      name: 'Falcon 9',
                      description: 'Falcon 9 is a reusable, two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.',
                      height: { meters: 70 },
                      diameter: { meters: 3.7 },
                      mass: { kg: 549054 },
                      success_rate_pct: 98,
                      cost_per_launch: 62000000,
                      first_flight: '2010-06-04',
                      stages: 2,
                      engines: {
                        type: 'Merlin',
                        version: '1D+',
                        thrust_sea_level: { kN: 845 },
                        thrust_vacuum: { kN: 981 }
                      },
                      flickr_images: [
                        'https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg'
                      ]
                    })}
                    sx={{ color: '#00f5ff', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                  >
                    Falcon 9
                  </Link> - Reusable two-stage rocket
                </Box>
              <Box sx={{ mb: 1 }}>
                • <Link
                    component="button"
                    onClick={() => handleRocketClick({
                      name: 'Falcon Heavy',
                      description: 'Falcon Heavy is the most powerful operational rocket in the world by a factor of two. With the ability to lift into orbit nearly 64 metric tons (141,000 lb), Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy.',
                      height: { meters: 70 },
                      diameter: { meters: 12.2 },
                      mass: { kg: 1420788 },
                      success_rate_pct: 100,
                      cost_per_launch: 90000000,
                      first_flight: '2018-02-06',
                      stages: 3,
                      engines: {
                        type: 'Merlin',
                        version: '1D+',
                        thrust_sea_level: { kN: 845 },
                        thrust_vacuum: { kN: 981 }
                      },
                      flickr_images: [
                        'https://farm5.staticflickr.com/4615/40143096241_11128929df_b.jpg'
                      ]
                    })}
                    sx={{ color: '#00f5ff', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                  >
                    Falcon Heavy
                  </Link> - Heavy-lift launch vehicle
                </Box>
              <Box sx={{ mb: 1 }}>
                • <Link
                    component="button"
                    onClick={() => handleRocketClick({
                      name: 'Dragon',
                      description: 'Dragon is a free-flying spacecraft designed to deliver both cargo and people to orbiting destinations. Dragon made history in 2012 when it became the first commercial spacecraft to deliver cargo to the International Space Station.',
                      height: { meters: 8.1 },
                      diameter: { meters: 4 },
                      mass: { kg: 6000 },
                      success_rate_pct: 100,
                      cost_per_launch: 0,
                      first_flight: '2010-12-08',
                      stages: 0,
                      engines: {
                        type: 'Draco',
                        version: '2.0',
                        thrust_sea_level: { kN: 0.4 },
                        thrust_vacuum: { kN: 0.4 }
                      },
                      flickr_images: [
                        'https://farm8.staticflickr.com/7647/16581815487_6d56cb32e1_b.jpg'
                      ]
                    })}
                    sx={{ color: '#00f5ff', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                  >
                    Dragon
                  </Link> - Spacecraft for cargo and crew
                </Box>
              <Box>
                • <Link
                    component="button"
                    onClick={() => handleRocketClick({
                      name: 'Starship',
                      description: 'Starship and Super Heavy Rocket represent a fully reusable ' +
                        'transportation system designed to carry both crew and cargo to Earth orbit, ' +
                        'the Moon, Mars and beyond. Starship will be the world\'s most powerful ' +
                        'launch vehicle ever developed.',
                      height: { meters: 120 },
                      diameter: { meters: 9 },
                      mass: { kg: 5000000 },
                      success_rate_pct: 0,
                      cost_per_launch: 2000000,
                      first_flight: 'In Development',
                      stages: 2,
                      engines: {
                        type: 'Raptor',
                        version: '2.0',
                        thrust_sea_level: { kN: 2200 },
                        thrust_vacuum: { kN: 2600 }
                      },
                      flickr_images: [
                        'https://live.staticflickr.com/65535/48954138962_ee541e6755_b.jpg'
                      ]
                    })}
                    sx={{ color: '#00f5ff', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                  >
                    Starship
                  </Link> - Next-generation spacecraft
                </Box>
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
      <RocketModal
        open={modalOpen}
        onClose={handleCloseModal}
        rocket={selectedRocket}
      />
    </Box>
  );
}

export default CompanyInfo;