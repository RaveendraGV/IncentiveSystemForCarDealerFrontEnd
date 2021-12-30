// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FetchAllBooking from './Component/FetchAllBooking';
import FetchBookingById from './Component/FetchBookingById';
import NavBar from './Component/NavBar';
import Footer from './Component/Footer';
import AddBooking from './Component/AddBooking';
import UpdateBooking from './Component/UpdateBooking';
import DeleteBooking from './Component/DeleteBooking';
import Slideshow from './Component/Slideshow';


function App() {
  return (
    <div className='App'>
      <NavBar />
      <Router>
        <Routes>
          <Route path="" element={<Slideshow
            interval={3000}
            images={[
              '/images/car1.jpg',
              '/images/car2.jpg',
              '/images/car3.jpg',
            ]}
          />} exact />
          <Route path="/Booking/all" element={<FetchAllBooking />} exact />
          <Route path="/Booking/:bookingId" element={<FetchBookingById />} exact />
          <Route path="/Booking/addnew" element={<AddBooking />} exact />
          <Route path="/Booking/update/:bookingId" element={<UpdateBooking />} exact />
          <Route path="/Booking/delete/:bookingId" element={<DeleteBooking />} exact />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
