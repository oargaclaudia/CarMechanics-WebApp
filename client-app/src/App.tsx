import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './LandingPage';
import AddCarPage from './Cars/AddCarPage';
import LoginPage from './Auth/LoginPage';
import CarsPage from './Cars/CarPage';
import UpdateCarPage from './Cars/UpdateCarPage';
import AppointmentPage from './Appointments/AppointmentPage';
import AddAppointmentPage from './Appointments/AddAppointmentPage';
import UpdateAppointmentPage from './Appointments/UpdateAppointmentPage';
import ReviewList from './Reviews/ReviewList';
import Review from './Reviews/Review';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="AddCar" element={<AddCarPage />}/>
          <Route path="/Login" element={<LoginPage />}/>
          <Route path="/Cars" element={<CarsPage/>}/>
          <Route path="/UpdateCar/:id" element={<UpdateCarPage/>}/>
          <Route path="/Appointments" element={<AppointmentPage/>}/>
          <Route path="/AddAppointment" element={<AddAppointmentPage/>}/>
          <Route path="/UpdateAppointment/:id" element={<UpdateAppointmentPage/>}/>
          <Route path='/Reviews' element={<ReviewList reviews={[]} onUpdateReview={function (id: number): void {
            throw new Error('Function not implemented.');
          } } onDeleteReview={function (id: number): void {
            throw new Error('Function not implemented.');
          } }/>}/>
          <Route path="/Review" element={<Review reviews={[]} onAddReview={function (review: Review): void {
            throw new Error('Function not implemented.');
          } } onUpdateReview={function (id: number, updatedReview: Review): void {
            throw new Error('Function not implemented.');
          } }/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
