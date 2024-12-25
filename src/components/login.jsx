'use client';

import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  Container,
  CircularProgress,
} from '@mui/material';
import { WorkOutline } from '@mui/icons-material';

function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#000000', // Black background
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Left decoration */}
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: 300,
          height: 300,
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '100%',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              bgcolor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '50%',
            }}
          />
        </Box>
      </Box>

      {/* Right decoration */}
      <Box
        sx={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: 300,
          height: 300,
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '100%',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              bgcolor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '50%',
            }}
          />
        </Box>
      </Box>

      {/* Main content */}
      <Container maxWidth="sm" sx={{ mx: 2 }}>
        <Card
          sx={{
            bgcolor: '#000000', // Black card
            color: '#ffffff', // White text
            border: '1px solid rgba(255, 255, 255, 0.2)', // Subtle border
            borderRadius:'20px'
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <Box sx={{ textAlign: 'center', mb: 3 }}>
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto',
                  mb: 2,
                }}
              >
                <WorkOutline sx={{ color: '#ffffff' }} />
              </Box>
              <Typography
                variant="h4"
                component="h1"
                sx={{ mb: 1, fontWeight: 'bold', color: '#ffffff' }}
              >
                ResumeKraft
              </Typography>
              <Typography
                variant="h5"
                component="h2"
                sx={{ mb: 1, fontWeight: 'bold', color: '#ffffff' }}
              >
                Log In
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
              >
                Get started with your resume
              </Typography>
            </Box>

            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                type="email"
                
                required
                sx={{ mb: 2 }}
                InputLabelProps={{
                  sx: { color: 'rgba(255, 255, 255, 0.7)' },
                }}
                InputProps={{
                  sx: {
                    color: '#ffffff',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.5)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.7)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#ffffff',
                      },
                    },
                  },
                }}
              />
              <TextField
                fullWidth
                label="Password"
                variant="outlined"
                type="password"
                required
                sx={{ mb: 3 }}
                InputLabelProps={{
                  sx: { color: 'rgba(255, 255, 255, 0.7)' },
                }}
                InputProps={{
                  sx: {
                    color: '#ffffff',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.5)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.7)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#ffffff',
                      },
                    },
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={isLoading}
                sx={{
                  bgcolor: '#ffffff',
                  color: '#000000',
                  py: 1.5,
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.9)',
                  },
                  borderRadius:'20px'
                }}
              >
                {isLoading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  'Log in'
                )}
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default LoginPage;
