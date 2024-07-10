import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import InputField from './InputField';
import SubmitButton from './SubmitButton';

const RegisterForm = ({ onSubmit }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ firstName, lastName, email, dateOfBirth, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2} direction="row">
        <InputField
          type="text"
          label="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          fullWidth
          required
          sx={{ marginBottom: 4 }}
        />
        <InputField
          type="text"
          label="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          fullWidth
          required
          sx={{ marginBottom: 4 }}
        />
      </Stack>
      <InputField
        type="email"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        required
        sx={{ marginBottom: 4 }}
      />
      <InputField
        type="password"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        required
        sx={{ marginBottom: 4 }}
      />
      <InputField
        type="date"
        label="Date of Birth"
        value={dateOfBirth}
        onChange={(e) => setDateOfBirth(e.target.value)}
        fullWidth
        required
        sx={{ marginBottom: 4 }}
      />
      <SubmitButton variant="outlined" color="secondary" type="submit">
        Register
      </SubmitButton>
    </form>
  );
};

export default RegisterForm;
