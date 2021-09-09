import { SET_OFFSET_Y } from "./actions";

const initialState = 0;

export default function reducer( state = initialState, { type, payload } ) {
    switch(type) {
        case SET_OFFSET_Y:
            return payload;
        default:
            return state;
    };
};