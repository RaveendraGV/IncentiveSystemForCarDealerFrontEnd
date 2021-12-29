import axios from 'axios';
export function fetchAll() {
    return (dispatch) => {
        return axios.get("http://localhost:8080/booking/get")
            .then(resp => { dispatch(fetchAllSucess(resp.data)) }).
            catch(error => {
                throw (error);
            });
    }
}
export function fetchAllSucess(data) {
    return {
        type: "FETCH_BOOKINGS_SUCCESS",
        payload: data
    };
}
export function fetchBookingDetails(bookingId) {
    return (dispatch) => {
        return axios.get("http://localhost:8080/booking/get" + bookingId).then(resp => {
            dispatch(fetchBookingSucess(resp.data))
        })
            .catch(error => {
                throw (error);
            });
    }
}
export function fetchBookingSucess(data) {
    return {
        type: "BOOKING_SUCCESS",
        payload: data
    }
}