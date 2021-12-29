const initialState = {
    bookings: [],
    booking: null
}
export default function BookingReducer(state = initialState, action) {
    if (action.type === "FETCH_BOOKINGS_SUCCESS") {
        return ({
            ...state,
            bookings: action.payload
        })
    }
    if (action.type === "BOOKING_SUCCESS") {
        return ({
            ...state,
            booking: action.payload
        })
    }
    else {
        return state;
    }
}