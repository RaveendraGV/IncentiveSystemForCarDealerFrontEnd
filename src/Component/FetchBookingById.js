import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBookingDetails } from "../store/action/BookingAction";

function FetchBookingById() {
    const booking = useSelector(state => state.BookingReducer.booking);

    const { bookingId } = useParams();

    const dispatch = useDispatch();

    useEffect(() => dispatch(fetchBookingDetails(bookingId)), [])
    return (<div className="container">
        <h2>Booking Details</h2>
        {
            booking != null ?
                <table className="table table-bordered">

                    <thead>
                        <tr>
                            <td>BookingId</td>
                            <td>{booking.bookingId}</td>
                        </tr>
                        <tr>
                            <td>BookingDate</td>
                            <td>{booking.bookingDate}</td>
                        </tr>
                        <tr>
                            <td>CustomerID</td>
                            <td>{booking.customer.customerId}</td>
                        </tr>
                        <tr>
                            <td>CustomerName</td>
                            <td>{booking.customer.name}</td>
                        </tr>
                        <tr>
                            <td>ContactNo</td>
                            <td>{booking.customer.contactNo}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{booking.customer.email}</td>
                        </tr>
                        <tr>
                            <td>CarID</td>
                            <td>{booking.car.carId}</td>
                        </tr>
                        <tr>
                            <td>Brand</td>
                            <td>{booking.car.brand}</td>
                        </tr>
                        <tr>
                            <td>DealerID</td>
                            <td>{booking.car.dealerId}</td>
                        </tr>
                        <tr>
                            <td>Model</td>
                            <td>{booking.car.model}</td>
                        </tr>
                        <tr>
                            <td>YearOfMfg</td>
                            <td>{booking.car.yearOfManufaturing}</td>
                        </tr>
                        <tr>
                            <td>RegistrationNo</td>
                            <td>{booking.car.registrationNo}</td>
                        </tr>
                        <tr>
                            <td>IncentiveID</td>
                            <td>{booking.incentive.incentiveId}</td>
                        </tr>
                        <tr>
                            <td>NoOfSales</td>
                            <td>{booking.incentive.noOfSales}</td>
                        </tr>
                        <tr>
                            <td>NoOfDays</td>
                            <td>{booking.incentive.noOfDays}</td>
                        </tr>
                    </thead>
                </table>
                : <h3>Loading....</h3>
        }
    </div>);
}
export default FetchBookingById;