import React, { useState } from 'react';
import styled from 'styled-components';

const DeletePrizeByDate = () => {
  const [date, setDate] = useState('');
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (!date) {
      alert('Please enter a date');
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:8080/delete/prizes?date=${date}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setStatus('Deleted');
      } else {
        setStatus('Failed to delete');
      }
    } catch (error) {
      setStatus('Error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Heading>Delete Prize by Date</Heading>
      <Input
        type="text"
        placeholder="Enter Date (DD-MM-YYYY)"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <Button onClick={handleDelete} className={loading ? 'loading' : ''} disabled={loading}>
        {loading ? 'Deleting...' : 'Delete'}
      </Button>

      {status && <StatusMessage>{status}</StatusMessage>}
    </Container>
  );
};

export default DeletePrizeByDate;

// Styled-components for the component

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f8ff;
  font-family: 'Arial', sans-serif;
`;

const Heading = styled.h1`
  color: #4b0082;
  font-size: 2em;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
  border: 2px solid #4b0082;
  margin-bottom: 20px;
  width: 250px;
  text-align: center;
`;

const Button = styled.button`
  background-color: #4b0082;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #800080;
  }

  &.loading {
    background-color: #8b008b;
  }
`;

const StatusMessage = styled.div`
  margin-top: 20px;
  font-size: 1.2em;
  color: #4b0082;

  &::after {
    content: '✔';
    color: green;
    padding-left: 5px;
  }

  &.failed {
    color: red;
  }

  &.success {
    color: green;
  }
`;
