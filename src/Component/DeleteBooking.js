import React from "react";
import axios from "axios";
import withRouter from "./withRouter";

class DeleteBooking extends React.Component{
    constructor(props){
        super(props);
        this.state={
            booking:null
        }
    }
    componentDidMount(){
        axios.get("http://localhost:8080/booking/get" + this.props.params.bookingId).then(resp=>this.setState({booking:resp.data}));
    }
    deleteBooking =()=>{
        axios.post("http://localhost:8080/booking/delete" + this.props.params.bookingId).then(resp=>alert("Booking deleted Succesfully"));
    }

    render(){
        return(
            <div>
                {
                this.state.booking !==null &&
                <div>
                    <h3>Booking Id: {this.state.booking.bookingId}</h3>
                    <button onClick={this.deleteBooking}> Delete </button>
                </div>
                }
            </div>
        )
    }
}
export default withRouter(DeleteBooking);