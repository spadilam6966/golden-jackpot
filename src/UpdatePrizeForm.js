import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

// Styled Components
const FormContainer = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 200px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h3`
  text-align: center;
  margin-bottom: 20px;
  color: #343a40;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: bold;
  color: #495057;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ced4da;
  border-radius: 5px;
  outline: none;
  &:focus {
    border-color: #007bff;
  }
`;

const Select = styled.select`
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ced4da;
  border-radius: 5px;
  outline: none;
  &:focus {
    border-color: #007bff;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const ErrorText = styled.p`
  color: red;
  text-align: center;
`;

const DatePicker = styled.input`
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ced4da;
  border-radius: 5px;
  outline: none;
  &:focus {
    border-color: #007bff;
  }
`;

const UpdatePrizeForm = () => {
  const [position, setPosition] = useState('');
  const [ticketNumber, setTicketNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState('');

  const positions = [
    '1st Prize', '2nd Prize', '3rd Prize', '4th Prize', '5th Prize', 
    '6th Prize', '7th Prize', '8th Prize'
  ];

  const amounts = [
    '500000/-', '100000/-', '50000/-', '10000/-', '5000/-', 
    '2500/-', '1000/-', '100/-'
  ];

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!position || !ticketNumber || !amount || !date) {
      setError('All fields are required!');
      return;
    }

    if (ticketNumber.length > 10) {
      setError('Ticket number cannot be more than 10 digits');
      return;
    }

    // Format the date to DD-MM-YYYY
    const formattedDate = formatDate(date);

    const prizeData = {
      position,
      ticketNumber,
      amount,
      date: formattedDate, // Use formatted date
    };

    try {
      const response = await axios.put('http://18.117.249.93:8080/update/prizes', prizeData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Response:', response);
      // Handle success
      alert('Prize data submitted successfully!');
      setPosition('');
      setTicketNumber('');
      setAmount('');
      setDate('');
    } catch (err) {
      console.error('Error submitting data:', err);
      setError('Failed to submit prize data');
    }
  };

  return (
    <FormContainer>
      <Heading>Prize Data Update</Heading>
      {error && <ErrorText>{error}</ErrorText>}
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Label htmlFor="position">Position</Label>
          <Select
            id="position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          >
            <option value="">Select Position</option>
            {positions.map((pos, idx) => (
              <option key={idx} value={pos}>{pos}</option>
            ))}
          </Select>
        </InputGroup>

        <InputGroup>
          <Label htmlFor="ticketNumber">Ticket Number</Label>
          <Input
            id="ticketNumber"
            type="number"
            value={ticketNumber}
            onChange={(e) => setTicketNumber(e.target.value)}
            maxLength="10"
            placeholder="Enter ticket number"
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="amount">Amount</Label>
          <Select
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          >
            <option value="">Select Amount</option>
            {amounts.map((amt, idx) => (
              <option key={idx} value={amt}>{amt}</option>
            ))}
          </Select>
        </InputGroup>

        <InputGroup>
          <Label htmlFor="date">Date</Label>
          <DatePicker
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </InputGroup>

        <Button type="submit">Submit</Button>
      </Form>
    </FormContainer>
  );
};

export default UpdatePrizeForm;
