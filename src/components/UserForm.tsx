import { useState } from 'react';
import { useEffect } from 'react';
import { TextField, Button, Container, Box } from '@mui/material';
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
  };
  const [data, setData] = useState([]);

useEffect(() => {
  localStorage.setItem('dataKey', JSON.stringify(data));
}, [data]);

  const handleSubmit = (e : any) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to backend, validate, etc.)
    console.log(userData);
    // You can perform further actions with the form data
  };
   const handleButtonClick = () => {
    // Change the route when the button is clicked
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
          
          <button onClick={handleButtonClick} color="primary">
            submit
          </button>
        </form>
      </Box>
    </Container>
  );
};

export default UserForm;

