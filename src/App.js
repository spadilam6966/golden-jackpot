// // src/App.js
// import React from 'react';
// import Header from './Header';
// import Home from './Home';
// import Countdown from './Countdown';

// import './App.css';
// import TodayResults from './TodayResults';
// import Winners from './Winners';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Footer from './Footer';
// import Download from './Download';

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// function App() {
//   const prizeData = [
//     { prize: '1st Prize', ticket: '*******', amount: 'RS 10,00,000/-' },
//     { prize: '2nd Prize', ticket: '*******', amount: 'RS 5,00,000/-' },
//     { prize: '3rd Prize', ticket: '*******', amount: 'RS 1,00,000/-' },
//     { prize: '4th Prize', ticket: '*******', amount: 'RS 50,000/-' },
//     { prize: '5th Prize', ticket: '*******', amount: 'RS 50,000/-' },
//     { prize: '6th Prize', ticket: '*******', amount: 'RS 20,000/-' },
//     { prize: '7th Prize', ticket: '*******', amount: 'RS 10,000/-' },
//     { prize: '8th Prize', ticket: '*******', amount: 'RS 5,000/-' },
//     { prize: '9th Prize', ticket: '*******', amount: 'RS 5,000/-' }
//   ];
//   return (
//     <div>

// <Router>
//       <div>
        

//         {/* Define the routes */}
//         <Routes>
//           {/* Home route */}
//           <Route path="/" element={<Home />} />

//           {/* Download Results route */}
//           <Route path="/download_results" element={<Download />} />
//         </Routes>
//       </div>
//     </Router>



//       <Header />
//       <Home />
//       <Countdown />
//       <TodayResults />
//       <Winners prizeData={prizeData}/>
//       <Footer />
      
//     </div>
//   );
// }

// export default App;




// src/App.js
// import React from 'react';
// import Header from './Header';
// import Home from './Home';
// import Countdown from './Countdown';
// import TodayResults from './TodayResults';
// import Winners from './Winners';
// import Footer from './Footer';
// import Download from './Download';

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import TodayResultsss from './TodayResultsss';
// import Scheme from './Scheme';
// import PrizeForm from './PrizeForm';
// import UpdatePrizeForm from './UpdatePrizeForm';
// import DeletePrize from './deletePrize';
// import Admin from './Admin';

// function App() {
//   const prizeData = [
//     { prize: '1st Prize', ticket: '*******', amount: 'RS 5,00,000/-' },
//     { prize: '2nd Prize', ticket: '*******', amount: 'RS 1,00,000/-' },
//     { prize: '3rd Prize', ticket: '*******', amount: 'RS 50,000/-' },
//     { prize: '4th Prize', ticket: '*******', amount: 'RS 10,000/-' },
//     { prize: '5th Prize', ticket: '*******', amount: 'RS 5,000/-' },
//     { prize: '6th Prize', ticket: '*******', amount: 'RS 2,500/-' },
//     { prize: '7th Prize', ticket: '*******', amount: 'RS 1,000/-' },
//     { prize: '8th Prize', ticket: '*******', amount: 'RS 100/-' }
//   ];

//   return (
//     <Router>
//       {/* Header is displayed on all routes */}
//       <Header />

//       <Routes>
//         {/* Define route for Download (will only render this component when accessed) */}
//         <Route path="/download_results" element={<Download />} />
//         <Route path="/scheme" element={<Scheme />} />
//         {/* <Route path="/prizeForm" element={<PrizeForm />} />
//         <Route path="/updateprizeform" element={<UpdatePrizeForm />} />
//         <Route path="/DeletePrize" element={<DeletePrize />} /> */}
//         <Route path="/Adminpvrb" element={<Admin />} />

//         {/* Define route for Home (other routes will render the full page layout) */}
//         <Route path="/" element={
//           <>
//             <Home />
//             <Countdown />
//             {/* <TodayResults /> */}
//             <TodayResults />
//             <Winners prizeData={prizeData} />
//             {/* <TodayResultsss /> */}
//             {/* <Footer /> */}
//           </>
//         } />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;


// src/App.js
import React, { useState } from 'react';
import Header from './Header';
import Home from './Home';
import Countdown from './Countdown';
import TodayResults from './TodayResults';
import Winners from './Winners';
import Footer from './Footer';
import Download from './Download';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodayResultsss from './TodayResultsss';
import Scheme from './Scheme';
import Admin from './Admin';
import Login from './Login';  // Import Login component

function App() {
  const [authenticated, setAuthenticated] = useState(false); // Authentication state

  const prizeData = [
    { prize: '1st Prize', ticket: '*******', amount: 'RS 5,00,000/-' },
    { prize: '2nd Prize', ticket: '*******', amount: 'RS 1,00,000/-' },
    { prize: '3rd Prize', ticket: '*******', amount: 'RS 50,000/-' },
    { prize: '4th Prize', ticket: '*******', amount: 'RS 10,000/-' },
    { prize: '5th Prize', ticket: '*******', amount: 'RS 5,000/-' },
    { prize: '6th Prize', ticket: '*******', amount: 'RS 2,500/-' },
    { prize: '7th Prize', ticket: '*******', amount: 'RS 1,000/-' },
    { prize: '8th Prize', ticket: '*******', amount: 'RS 100/-' }
  ];

  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/lotterylogin" element={<Login setAuthenticated={setAuthenticated} />} />
        
        {/* Admin route is protected by authentication */}
        <Route 
          path="/Adminpvrb" 
          element={authenticated ? <Admin /> : <Login setAuthenticated={setAuthenticated} />} 
        />

        <Route path="/download_results" element={<Download />} />
        <Route path="/scheme" element={<Scheme />} />
        
        <Route path="/" element={
          <>
            <Home />
            <Countdown />
            <TodayResults />
            <Winners prizeData={prizeData} />
          </>
        } />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

