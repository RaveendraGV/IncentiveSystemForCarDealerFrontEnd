import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAll } from "../store/action/BookingAction";
import { Link } from 'react-router-dom';


function FetchAllBooking() {
    const bookings = useSelector(state => state.BookingReducer.bookings);
    const dispatch = useDispatch();

    useEffect(() => dispatch(fetchAll()), [])
    return (
        <div className="allbooking" >
            <h3>All Bookings</h3>
            {
                bookings.length > 0 ?
                    <table class="table table-bordered">

                        <thead className="tablehead">
                            <tr>
                                <th>BookingId</th>
                                <th>CustomerID</th>
                                <th>CustomerName</th>
                                <th>CarID</th>
                                <th>Brand</th>
                                <th>DealerID</th>
                                <th>RegistrationNo</th>
                                <th>IncentiveID</th>
                                <th>View</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map(b =>
                                <tr>
                                    <td>{b.bookingId} </td>
                                    <td>{b.customer.customerId}</td>
                                    <td>{b.customer.name}</td>
                                    <td>{b.car.carId}</td>
                                    <td>{b.car.brand}</td>
                                    <td>{b.car.dealerId}</td>
                                    <td>{b.car.registrationNo}</td>
                                    <td>{b.incentive.incentiveId}</td>
                                    <td><Link to={`/Booking/${b.bookingId}`}>View</Link></td>
                                    <td><Link to={`/Booking/update/${b.bookingId}`}>Edit</Link></td>
                                    <td><Link to={`/Booking/delete/${b.bookingId}`}>Delete</Link></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    : <h3>Loading....</h3>
            }
        </div>
    );
}
export default FetchAllBooking;