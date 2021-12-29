import React from 'react'
import axios from 'axios'
import AddBooking from '../../Component/AddBooking'

class AddBookingAction extends React.Component {
  submit = values => {
    axios.post(("http://localhost:8080/booking/save").then(resp=>alert("Booking Saved with Id "+resp.bookingId)));
  }
  render() {
    return <AddBooking onSubmit={this.submit} />
  }
}