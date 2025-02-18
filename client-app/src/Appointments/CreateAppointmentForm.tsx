// CreateAppointmentForm.tsx
import React, { useState } from 'react';
import '../LandingPage.css';
import { useEffect } from 'react';
import axios from 'axios';

interface AppointmentFormProps {
  onSubmit: (formData: FormData) => void;
  initialData?: any;
}

interface FormData {
  userEmail: string;
  carId: string;
  date: string;
  description: string;
}

const CreateAppointmentForm: React.FC<AppointmentFormProps> = ({ onSubmit, initialData = {} }) => {
  const [formData, setFormData] = useState<FormData>({
    userEmail: initialData.userEmail || '',
    carId: initialData.carId || '',
    date: initialData.date?.toString() || '',
    description: initialData.description || '',
  });

  const [cars, setCars] = useState<Array<any>>([]);

  useEffect(() => {
    // Fetch all cars when the component mounts
    axios
      .get('https://localhost:7053/Car', {
        params: { userEmail: window.sessionStorage.getItem('email')?.toString() },
      })
      .then((response) => {
        // Assuming the response data is an array of cars
        console.log(response.data);
        setCars(response.data);
      })
      .catch((error) => {
        console.error('Error fetching cars:', error);
      });
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ backgroundColor: "#222831", minHeight: "100vh" }}>
      <div className="card p-5" style={{ maxWidth: '600px', width: "500px", backgroundColor: "#393E46", color: "#EEEEEE" }}>
        <h2 className="mb-4">Appointment Form</h2>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="carId" className="form-label">
              Car:
            </label>
            <select
              id="carId"
              className="form-control"
              name="carId"
              value={formData.carId}
              onChange={handleInputChange}
            >
              <option value="">Select Car</option>

              {cars.map((car) => (
                <option key={car.Id} value={car.id}>
                  {`Manufacturer: ${car?.brandInfo?.manufacturer}, Model: ${car?.brandInfo?.model}, Year:${car.yearOfManufacture}`}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="date" className="form-label">
              Date:
            </label>
            <input
              type="date"
              id="date"
              className="form-control"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description:
            </label>
            <textarea
              id="description"
              className="form-control"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAppointmentForm;
