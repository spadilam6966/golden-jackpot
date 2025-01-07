import React, { useState } from 'react';
import './App.css'; // Assuming the CSS is in App.css

const DrawDetails = () => {
  return (
    <section className="draw-details">
      <div className="container">
        <div className="heading">
          <span className="title">Draw Details</span>
        </div>
        <ul className="tabs">
          <li className="tab-item active">LION LUCKY</li>
        </ul>
        <div className="tab-content">
          <p>
            <span>Draw Number: </span><strong className="draw-info">Not Declared</strong>
            <span>MRP: </span><strong className="draw-info">60/-</strong>
            <span>Draw Date: </span><strong className="draw-info">02:01:25</strong>
            <span>Draw Time: </span><strong className="draw-info">06:00 PM</strong>
          </p>
          <table className="prize-table">
            <thead>
              <tr>
                <th>Position</th>
                <th>Ticket Number</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th'].map((prize, index) => (
                <tr key={index}>
                  <td>{`${prize} Prize`}</td>
                  <td>Not Declared</td>
                  <td>Rs. {index === 0 ? '10,00,000/-' : index === 1 ? '5,00,000/-' : index === 2 ? '1,00,000/-' : '50,000/-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

const WinnerCard = ({ position, prizeAmount }) => (
  <div className="winner-card">
    <div className="prize-info">
      <p className="game-title">LION LUCKY</p>
      <p className="date">2025-01-02</p>
      <div className="prize-details">
        <span className="position">{position}</span>
        <span className="prize-amount">Rs. {prizeAmount}</span>
        <span className="ticket-status">Not Declared</span>
      </div>
    </div>
  </div>
);

const WinnersList = () => {
  return (
    <section className="winners-list">
      <div className="container">
        <div className="heading">
          <span className="title">Winners</span>
        </div>
        <div className="carousel">
          {['1st Prize', '2nd Prize', '3rd Prize', '4th Prize', '5th Prize', '6th Prize', '7th Prize', '8th Prize', '9th Prize'].map((position, index) => (
            <WinnerCard key={index} position={position} prizeAmount={index === 0 ? '10,00,000/-' : index === 1 ? '5,00,000/-' : index === 2 ? '1,00,000/-' : '50,000/-'} />
          ))}
        </div>
      </div>
    </section>
  );
};

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button className={`back-to-top ${visible ? 'visible' : ''}`} onClick={scrollToTop}>
      <i className="fa fa-angle-up"></i>
    </button>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="logo">
            <img src="/images/logo.gif" alt="Logo" />
          </div>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="#today_results">Results</a></li>
            <li><a href="/downloadresult.htm">Download Results</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
          <div className="social-links">
            <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
            <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
            <a href="#" className="dribbble"><i className="fa fa-dribbble"></i></a>
            <a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="app">
      <DrawDetails />
      <WinnersList />
      <BackToTop />
      <Footer />
    </div>
  );
};

export default App;
