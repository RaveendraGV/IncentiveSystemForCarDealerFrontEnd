import React from "react";
import axios from "axios";
import withRouter from "./withRouter";
import { Button } from 'react-bootstrap';
import { Form } from "react-bootstrap";


class UpdateBooking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            carId: '',
            brand: '',
            dealerId: '',
            model: '',
            yearOfManufaturing: '',
            registrationNo: ''

        }
    }
    componentDidMount() {
        axios.get("http://localhost:8080/booking/get" + this.props.params.bookingId).then(resp => this.setState({

            carId: resp.data.car.carId,
            brand: resp.data.car.brand,
            dealerId: resp.data.car.dealerId,
            model: resp.data.car.model,
            yearOfManufaturing: resp.data.car.yearOfManufaturing,
            registrationNo: resp.data.car.registrationNo,

        }));
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleUpdate = (event) => {
        let payload = {
            carId: this.state.carId,
            brand: this.state.brand,
            dealerId: this.state.dealerId,
            model: this.state.model,
            yearOfManufaturing: this.state.yearOfManufaturing,
            registrationNo: this.state.registrationNo
        }
        axios.post("http://localhost:8080/booking/update" + this.props.params.bookingId, payload).then(resp => alert("Car Updated Successfully"));
    }
    render() {
        return (<form className="updateform">
            <div>
                <h4>Update Car for booking </h4>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicId">
                        <Form.Label>Enter the CarId</Form.Label>
                        <Form.Control type="text" name="carId" id="carId" placeholder="carId" onChange={this.handleChange} value={this.state.carId} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter Brand</Form.Label>
                        <Form.Control type="text" name="brand" id="brand" onChange={this.handleChange} value={this.state.brand} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter dealerId</Form.Label>
                        <Form.Control type="text" name="dealerId" id="dealerId" onChange={this.handleChange} value={this.state.dealerId} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter model</Form.Label>
                        <Form.Control type="text" name="model" id="model" onChange={this.handleChange} value={this.state.model} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter yearOfManufaturing</Form.Label>
                        <Form.Control type="text" name="yearOfManufaturing" id="yearOfManufaturing" onChange={this.handleChange} value={this.state.yearOfManufaturing} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter registrationNo</Form.Label>
                        <Form.Control type="text" name="registrationNo" id="registrationNo" onChange={this.handleChange} value={this.state.registrationNo} />
                    </Form.Group>
                    <Button onClick={this.handleUpdate} variant="primary" type="submit">
                        Update Car
                    </Button>
                </Form>
            </div>
        </form>);
    }
}
export default withRouter(UpdateBooking); 