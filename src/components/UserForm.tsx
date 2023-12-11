import { useState } from 'react';
import { TextField, Container, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';



const UserForm = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
    localStorage.setItem('userData', JSON.stringify({
      ...userData,
      [name]: value,
    }));
  };


  const handleSubmit = (e : any) => {
    e.preventDefault();

    navigate('/detail');
  };
  
  return (
    <Container maxWidth="sm">
      <Box mt={4}>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            value={userData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            required
          />
          <TextField
            label="Phone Number"
            name="phoneNumber"
            value={userData.phoneNumber}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            required
          />
          <TextField
            label="Email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            type="email"
            required
          />
          
          <Button type='submit'  color="primary">
            submit
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default UserForm;

