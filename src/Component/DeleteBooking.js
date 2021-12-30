import React from "react";
import axios from "axios";
import withRouter from "./withRouter";

class DeleteBooking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            booking: null
        }
    }
    componentDidMount() {
        axios.get("http://localhost:8080/booking/get" + this.props.params.bookingId).then(resp => this.setState({ booking: resp.data }));
    }
    deleteBooking = () => {
        axios.post("http://localhost:8080/booking/delete" + this.props.params.bookingId).then(resp => alert("Booking deleted Succesfully"));
    }

    render() {
        return (
            <div className="deletebookingbutton">
                {
                    this.state.booking !== null &&
                    <div className="deletebooking">
                        <h3>Delete Booking </h3>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <td>BookingId</td>
                                    <td>{this.state.booking.bookingId}</td>
                                </tr>
                                <tr>
                                    <td>BookingDate</td>
                                    <td>{this.state.booking.bookingDate}</td>
                                </tr>
                                <tr>
                                    <td>CustomerID</td>
                                    <td>{this.state.booking.customer.customerId}</td>
                                </tr>
                                <tr>
                                    <td>CustomerName</td>
                                    <td>{this.state.booking.customer.name}</td>
                                </tr>
                                <tr>
                                    <td>ContactNo</td>
                                    <td>{this.state.booking.customer.contactNo}</td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>{this.state.booking.customer.email}</td>
                                </tr>
                                <tr>
                                    <td>CarID</td>
                                    <td>{this.state.booking.car.carId}</td>
                                </tr>
                                <tr>
                                    <td>Brand</td>
                                    <td>{this.state.booking.car.brand}</td>
                                </tr>
                                <tr>
                                    <td>DealerID</td>
                                    <td>{this.state.booking.car.dealerId}</td>
                                </tr>
                                <tr>
                                    <td>Model</td>
                                    <td>{this.state.booking.car.model}</td>
                                </tr>
                                <tr>
                                    <td>YearOfMfg</td>
                                    <td>{this.state.booking.car.yearOfManufaturing}</td>
                                </tr>
                                <tr>
                                    <td>RegistrationNo</td>
                                    <td>{this.state.booking.car.registrationNo}</td>
                                </tr>
                                <tr>
                                    <td>IncentiveID</td>
                                    <td>{this.state.booking.incentive.incentiveId}</td>
                                </tr>
                                <tr>
                                    <td>NoOfSales</td>
                                    <td>{this.state.booking.incentive.noOfSales}</td>
                                </tr>
                                <tr>
                                    <td>NoOfDays</td>
                                    <td>{this.state.booking.incentive.noOfDays}</td>
                                </tr>

                            </thead>
                        </table>
                    </div>
                }
                <h5>Are you sure You want to delete the booking?</h5>
                <button onClick={this.deleteBooking} class="btn btn-primary mr-5"> Yes </button>
                <a href="/Booking/all" class="btn btn-primary" role="button" aria-pressed="true">No</a>
            </div>
        )
    }
}
export default withRouter(DeleteBooking);