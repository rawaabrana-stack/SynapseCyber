import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Home from './pages/Home.jsx';

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>CortexSec - Information Security</title>
        <meta name="description" content="Independent security assurance for regulated and high-risk organisations." />
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
