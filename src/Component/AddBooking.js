import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Form } from "react-bootstrap";

function AddBooking() {
    const [bookings, setBookings] = useState(
        {
            BookingId: '',
            BookingDate: '',
            CustomerId: '',
            CarId: '',
            IncentiveId: ''
        }
    )

    const handleChange = (event) => {
        setBookings(bookings => ({ ...bookings, [event.target.name]: event.target.value }));
    }

    const handleSubmit = (event) => {
        const payload = {
            bookingId: bookings.BookingId,
            bookingDate: bookings.BookingDate,
            customer: { customerId: bookings.CustomerId },
            car: { carId: bookings.CarId },
            incentive: { incentiveId: bookings.IncentiveId }
        }
        axios.post("http://localhost:8080/booking/save", payload).then(resp => alert("Booking Saved with Id " + resp.data.bookingId));
    }
    return (
        <form className="updateform">
            <div >
                <h3>Add new Booking</h3>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicId">
                        <Form.Label>Booking Id</Form.Label>
                        <Form.Control type="text" name="BookingId" id="BookingId" onChange={handleChange} value={bookings.BookingId} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>BookingDate</Form.Label>
                        <Form.Control type="date" name="BookingDate" id="BookingDate" onChange={handleChange} value={bookings.BookingDate} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>CustomerId</Form.Label>
                        <Form.Control type="text" name="CustomerId" id="CustomerId" onChange={handleChange} value={bookings.CustomerId} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>CarId</Form.Label>
                        <Form.Control type="text" name="CarId" id="CarId" onChange={handleChange} value={bookings.CarId} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>IncentiveId</Form.Label>
                        <Form.Control type="text" name="IncentiveId" id="IncentiveId" onChange={handleChange} value={bookings.IncentiveId} />
                    </Form.Group>
                    <Button onClick={handleSubmit} variant="primary" type="submit">
                        Add Booking
                    </Button>
                </Form>
            </div>
        </form>
    );
}

export default AddBooking;
