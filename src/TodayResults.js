import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Section = styled.section`
  padding: 20px;
  background-color: #f8f9fa;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
`;

const Heading = styled.div`
  margin-bottom: 20px;
  text-align: center;

  .h3 {
    font-size: 1.75em;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;

const NavTabs = styled.ul`
  display: flex;
  justify-content: center;
  padding: 10px;
  background-color: #007bff;
  border-radius: 5px;

  .nav-link {
    color: white;
    margin: 0 10px;
    font-weight: bold;

    &:hover,
    &.active {
      color: #ffc107;
    }
  }
`;

const TabContent = styled.div`
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

const Table = styled.table`
  width: 100%;
  margin-top: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-weight: bold;
  text-align: center;

  thead {
    background-color: #000;  /* Black background */
    color: white;  /* White text for header */
  }

  th,
  td {
    padding: 10px;
  }

  td {
    color: black;  /* Black text for table data */
    background-color: white;  /* White background for data rows */
  }
`;

const TodayResults = () => {
  const [prizes, setPrizes] = useState([]); // Initialize as empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');  // Get day (DD)
  const month = String(today.getMonth() + 1).padStart(2, '0');  // Get month (MM)
  const year = today.getFullYear();  // Get year (YYYY)
  const formattedDate = `${day}-${month}-${year}`;

  const fetchPrizes = async () => {
    try {
      const today = new Date();
      const day = String(today.getDate()).padStart(2, '0');  // Get day (DD)
      const month = String(today.getMonth() + 1).padStart(2, '0');  // Get month (MM)
      const year = today.getFullYear();  // Get year (YYYY)
      const formattedDate = `${day}-${month}-${year}`;  // Format date as DD-MM-YYYY

      const response = await axios.get(`http://localhost:8080/prizes?date=${formattedDate}`);

      console.log('API Response:', response.data);  // Log the API response

      // Ensure response.data is an array
      if (response.data.prizes.length > 0) {
        setPrizes(response.data.prizes);
      } else {
        setPrizes([]);  // If the data is not an array, set prizes as empty array
      }
      setLoading(false);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('Error fetching prize data');
      setLoading(false);
    }
  };

  useEffect(() => {
    const checkTimeAndFetchData = () => {
      const currentTime = new Date();
      const hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();

      // Fetch prizes after 12:00 PM
      if (hours >= 19 && minutes >= 1) {
        fetchPrizes();
      }
    };

    checkTimeAndFetchData();  // Check and fetch data on mount

    const interval = setInterval(() => {
      checkTimeAndFetchData();  // Check every minute after 12:00 PM
    }, 60000);

    return () => clearInterval(interval);  // Cleanup interval on unmount
  }, []);

  console.log('Prizes:', prizes); // Log current prizes state to see its value

  return (
    <Section id="today_results">
      <Container>
        <Heading>
          <span className="h3">Draw details</span>
        </Heading>
        <NavTabs className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active show" id="lion-lucky-tab-md" data-toggle="tab" href="#lion-lucky-md" role="tab" aria-controls="lion-lucky-md" aria-selected="true">GoldenJackpot</a>
          </li>
        </NavTabs>
        <TabContent className="tab-content card">
          <div className="tab-pane fade active show" id="lion-lucky-md" role="tabpanel" aria-labelledby="lion-lucky-tab-md">
            <p>
              <span>Draw number: </span>
              <span className="text-dark text-monospace font-weight-bolder pr-2" style={{ fontSize: '1.5em' }}> 007 </span>
              <span>MRP: </span>
              <span className="text-dark text-monospace font-weight-bolder pr-2" style={{ fontSize: '1.5em' }}> 60/- </span>
              <span>Draw date: </span>
              <span className="text-dark text-monospace font-weight-bolder pr-2" style={{ fontSize: '1.5em' }}> {formattedDate} </span>
              <span>Draw time: </span>
              <span className="text-dark text-monospace font-weight-bolder pr-2" style={{ fontSize: '1.5em' }}> 07:00 PM</span>
            </p>
            <Table className="table shadow text-center table-hover p-5 text-dark font-weight-bold">
              <thead className="rounded">
                <tr>
                  <th>Position</th>
                  <th>Ticket number</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {/* Check if prizes is an array and has data */}
                {prizes.length > 0 ? (
                  prizes.map((prize, index) => (
                    <tr key={index}>
                      <td>{prize.position}</td>
                      <td>{prize.ticketNumber}</td>
                      <td>{prize.amount}</td>
                    </tr>
                  ))
                ) : (
                  // Empty table rows if no data is available
                  <tr>
                    <td colSpan="3">No prize data available yet.</td>
                  </tr>
                )}
              </tbody>
            </Table>
          </div>
        </TabContent>
      </Container>
    </Section>
  );
};

export default TodayResults;
