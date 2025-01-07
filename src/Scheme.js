import React from 'react';
import { Tab, Row, Col, Nav, Table } from 'react-bootstrap';

const Scheme = () => {
  return (
    <section id="scheme" className="d-flex justify-content-center align-items-center min-vh-100">
      

      <Tab.Container defaultActiveKey="lion-lucky-md">
       

        {/* Content for "Lion Lucky" Scheme */}
        <Row className="w-100 justify-content-center mt-4">
          <Col md={8}>
            <Tab.Content className="card p-3 shadow-lg rounded">
              <Tab.Pane eventKey="lion-lucky-md">
                <div className="text-center mb-4">
                  <h4 className="text-primary">GoldenJackpot</h4>
                </div>
                <Table className="text-center table-bordered table-striped table-hover table-sm">
                  <thead className="table-dark">
                    <tr>
                      <th>Prize</th>
                      <th>Amount</th>
                      <th>Digits</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { prize: '1st Prize', amount: 'rs.10,00,000/-', digits: 'DIGITS 6' },
                      { prize: '2nd Prize', amount: 'rs.5,00,000/-', digits: 'DIGITS 6' },
                      { prize: '3rd Prize', amount: 'rs.1,00,000/-', digits: 'DIGITS 5' },
                      { prize: '4th Prize', amount: 'rs.50,000/-', digits: 'DIGITS 4' },
                      { prize: '5th Prize', amount: 'rs.50,000/-', digits: 'DIGITS 4' },
                      { prize: '6th Prize', amount: 'rs.20,000/-', digits: 'DIGITS 3' },
                      { prize: '7th Prize', amount: 'rs.10,000/-', digits: 'DIGITS 3' },
                      { prize: '8th Prize', amount: 'rs.5,000/-', digits: 'DIGITS 3' },
                      { prize: '9th Prize', amount: 'rs.5,000/-', digits: 'DIGITS 3' },
                    ].map((row, index) => (
                      <tr key={index}>
                        <td>{row.prize}</td>
                        <td>{row.amount}</td>
                        <td>{row.digits}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </section>
  );
};

export default Scheme;
