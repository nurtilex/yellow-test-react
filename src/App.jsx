import { Routes, Route } from 'react-router-dom';

import PrivateRoute from './hoc/PrivateRoute';
import Header from './components/Header';
import Jogs from './pages/Jogs';
import Info from './pages/Info';
import Auth from './pages/Auth';
import ContactUs from './pages/ContactUs';

function App() {
  const PrivateJogs = <PrivateRoute component={<Jogs />} />;
  const PrivateInfo = <PrivateRoute component={<Info />} />;
  const PrivateContactUs = <PrivateRoute component={<ContactUs />} />;

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/jogs" element={PrivateJogs} />
        <Route path="/info" element={PrivateInfo} />
        <Route path="/contactUs" element={PrivateContactUs} />
        <Route path="*" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
