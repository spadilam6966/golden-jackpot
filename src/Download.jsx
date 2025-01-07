// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Footer from './Footer';

// // Styled components
// const Section = styled.section`
//   padding: 40px 0;
//   background-color: #f7f7f7;
// `;

// const Container = styled.div`
//   max-width: 1200px;
//   margin: auto;
// `;

// const Heading = styled.div`
//   margin-bottom: 30px;
//   text-align: center;

//   .h3 {
//     font-size: 2em;
//     font-weight: bold;
//     margin-bottom: 10px;
//     color: #343a40;
//   }

//   .description {
//     font-size: 1.1em;
//     color: #6c757d;
//     font-weight: 400;
//     margin-bottom: 30px;
//   }
// `;

// const FormGroup = styled.div`
//   margin-bottom: 30px;
//   text-align: center;

//   label {
//     font-size: 1.1em;
//     color: #495057;
//     font-weight: 600;
//   }

//   input {
//     width: 200px;
//     padding: 10px;
//     margin-top: 10px;
//     font-size: 1em;
//     border: 1px solid #ced4da;
//     border-radius: 5px;
//     transition: border-color 0.3s;

//     &:focus {
//       border-color: #007bff;
//       outline: none;
//     }
//   }

//   p {
//     color: #dc3545;
//     font-size: 1em;
//     margin-top: 10px;
//   }
// `;

// const Table = styled.table`
//   width: 100%;
//   margin-top: 40px;
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
//   font-weight: bold;
//   text-align: center;
//   border-radius: 10px;
//   overflow: hidden;

//   thead {
//     background-color: #141313;
//     color: white;
//   }

//   th, td {
//     padding: 12px 20px;
//     text-align: center;
//     vertical-align: middle;
//   }

//   tbody tr {
//     background-color: #fff;
//     transition: background-color 0.3s;
//   }

//   tbody tr:hover {
//     background-color: #f1f1f1;
//   }

//   td {
//     color: #495057;
//   }

//   td.no-data {
//     color: #dc3545;
//     font-style: italic;
//   }
// `;

// const Download = () => {
//   const [drawDate, setDrawDate] = useState('');
//   const [results, setResults] = useState([]);
//   const [error, setError] = useState('');

//   // Sample data for demonstration purposes
//   const sampleData = {
//     "02-01-2025": [
//       { position: '1st Prize', ticketNumber: '123456', amount: 'rs.10,00,000/-' },
//       { position: '2nd Prize', ticketNumber: '654321', amount: 'rs.5,00,000/-' },
//       { position: '3rd Prize', ticketNumber: '789012', amount: 'rs.1,00,000/-' },
//       { position: '1st Prize', ticketNumber: '123456', amount: 'rs.10,00,000/-' },
//       { position: '2nd Prize', ticketNumber: '654321', amount: 'rs.5,00,000/-' },
//       { position: '3rd Prize', ticketNumber: '789012', amount: 'rs.1,00,000/-' },
//       { position: '1st Prize', ticketNumber: '123456', amount: 'rs.10,00,000/-' },
//       { position: '2nd Prize', ticketNumber: '654321', amount: 'rs.5,00,000/-' },
//       { position: '3rd Prize', ticketNumber: '789012', amount: 'rs.1,00,000/-' }
//     ],
//     "03-01-2025": [
//       { position: '1st Prize', ticketNumber: '111111', amount: 'rs.15,00,000/-' },
//       { position: '2nd Prize', ticketNumber: '222222', amount: 'rs.7,50,000/-' },
//       { position: '3rd Prize', ticketNumber: '333333', amount: 'rs.2,00,000/-' },
//     ]
//   };

//   // Get the current date in 'yyyy-mm-dd' format for validation
//   const today = new Date().toISOString().split('T')[0];

//   useEffect(() => {
//     // Fetch data based on the selected date
//     if (drawDate) {
//       // Ensure that the selected date is valid and in the past
//       const formattedDate = drawDate.split('-').reverse().join('-'); // Convert to dd-mm-yyyy
//       if (sampleData[formattedDate]) {
//         setResults(sampleData[formattedDate]);
//         setError('');
//       } else {
//         setResults([]); // No data for the selected date
//         setError('No results available for this date.');
//       }
//     }
//   }, [drawDate]);

//   // Handle input change for the date field
//   const handleDateChange = (e) => {
//     const selectedDate = e.target.value;
//     if (selectedDate > today) {
//       setError('Please select a past date.');
//       setResults([]);
//     } else {
//       setError('');
//       setDrawDate(selectedDate);
//     }
//   };

//   return (
//     <Section id="download_results">
//       <Container>
//         <Heading>
//           <span className="h3">Download Results</span>
//           <p className="description">
//             Please select a date below to view the results of the lottery draw.
//           </p>
//         </Heading>

//         {/* Date Input */}
//         <FormGroup>
//           <label htmlFor="drawDate">Select Draw Date (dd-mm-yyyy)</label>
//           <input
//             type="date"
//             id="drawDate"
//             value={drawDate}
//             onChange={handleDateChange}
//             max={today} // Ensure only past dates are selectable
//           />
//           {error && <p>{error}</p>}
//         </FormGroup>

//         {/* Table for displaying results */}
//         <Table>
//           <thead>
//             <tr>
//               <th>Position</th>
//               <th>Ticket Number</th>
//               <th>Amount</th>
//             </tr>
//           </thead>
//           <tbody>
//             {results.length > 0 ? (
//               results.map((result, index) => (
//                 <tr key={index}>
//                   <td>{result.position}</td>
//                   <td>{result.ticketNumber}</td>
//                   <td>{result.amount}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td className="no-data" colSpan="3">
//                   No results available for this date.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </Table>
//       </Container>
//       <Footer/>
//     </Section>
//   );
// };

// export default Download;


import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import axios from 'axios';

// Styled components
const Section = styled.section`
  padding: 60px 0;
  background-color: #f9f9f9;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
`;

const Heading = styled.div`
  text-align: center;
  margin-bottom: 50px;

  .h3 {
    font-size: 2.5em;
    font-weight: bold;
    margin-bottom: 15px;
    color: #333;
  }

  .description {
    font-size: 1.2em;
    color: #6c757d;
    margin-bottom: 30px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 40px;
  text-align: center;

  label {
    font-size: 1.1em;
    color: #495057;
    font-weight: 600;
  }

  input {
    width: 250px;
    padding: 12px;
    margin-top: 10px;
    font-size: 1.1em;
    border: 1px solid #ced4da;
    border-radius: 8px;
    transition: all 0.3s ease;

    &:focus {
      border-color: #007bff;
      outline: none;
    }
  }

  p {
    color: #dc3545;
    font-size: 1em;
    margin-top: 10px;
  }
`;

const Table = styled.table`
  width: 100%;
  margin-top: 50px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  border-collapse: collapse;

  thead {
    background-color: #343a40;
    color: white;
  }

  th, td {
    padding: 15px;
    text-align: center;
    vertical-align: middle;
  }

  tbody tr {
    background-color: #fff;
    transition: background-color 0.3s ease;
  }

  tbody tr:hover {
    background-color: #f1f1f1;
  }

  td {
    color: #495057;
  }

  td.no-data {
    color: #dc3545;
    font-style: italic;
  }
`;

const Download = () => {
  const [drawDate, setDrawDate] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');
  const [isFetching, setIsFetching] = useState(false);

  // Get the current date in 'yyyy-mm-dd' format
  const today = new Date().toISOString().split('T')[0];

  // Helper function to format date from 'yyyy-mm-dd' to 'dd-mm-yyyy'
  const formatDate = (date) => {
    const [year, month, day] = date.split('-');
    return `${day}-${month}-${year}`;
  };

  useEffect(() => {
    // Fetch data based on the selected date
    const fetchData = async () => {
      if (!drawDate) return;

      setIsFetching(true); // Start fetching data
      try {
        const response = await axios.get(`http://localhost:8080/prizes?date=${drawDate}`);
        if (response.data && response.data.prizes.length > 0) {
          setResults(response.data.prizes);
          setError('');
        } else {
          setResults([]);
          setError('No results available for this date.');
        }
      } catch (error) {
        setResults([]);
        setError('Failed to fetch results. Please try again later.');
      } finally {
        setIsFetching(false); // Stop fetching
      }
    };

    fetchData();
  }, [drawDate]); // Runs whenever the drawDate is changed

  // Handle input change for the date field
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    if (selectedDate >= today) {
      setError('Please select a past date.');
      setResults([]);
    } else {
      setError('');
      setDrawDate(formatDate(selectedDate)); // Format date before saving
    }
  };

  return (
    <Section id="download_results">
      <Container>
        <Heading>
          <span className="h3">Download Results</span>
          <p className="description">
            Select a past date to view the lottery results for that day.
          </p>
        </Heading>

        {/* Date Input */}
        <FormGroup>
          <label htmlFor="drawDate">Select Draw Date (DD-MM-YYYY)</label>
          <input
            type="date"
            id="drawDate"
            value={drawDate.split('-').reverse().join('-')} // Show date as DD-MM-YYYY
            onChange={handleDateChange}
            max={today} // Ensure only past dates are selectable
          />
          {error && <p>{error}</p>}
        </FormGroup>

        {/* Table for displaying results */}
        <Table>
          <thead>
            <tr>
              <th>Position</th>
              <th>Ticket Number</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {isFetching ? (
              <tr>
                <td colSpan="3">Loading...</td>
              </tr>
            ) : results.length > 0 ? (
              results.map((result, index) => (
                <tr key={index}>
                  <td>{result.position}</td>
                  <td>{result.ticketNumber}</td>
                  <td>{result.amount}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="no-data" colSpan="3">
                  {error || 'No results available for this date.'}
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Container>
    </Section>
  );
};

export default Download;
