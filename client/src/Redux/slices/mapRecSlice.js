const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
  map: {},
  loader: false,
  error: null, 
}


const MapSlice = createSlice({
  name: 'map',
  initialState,
  reducers:{
    recordMapPending: (state, action) =>{
      state.loader = true;
    },
    recordMapFulfilled: (state, action) => {
      state.map = action.payload;
      state.loader = false;
      state.error = null;
    },
    recordMapRejected: (state, action) => {
      state.loader = false;
      state.error = action.payload;
    }
  }
})

export default MapSlice.reducer;

export const {actions: initMapActions} = MapSlice;
