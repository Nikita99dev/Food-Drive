import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  map: {},
  mainMap: [],
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
    },
    getMapPending: (state, action) => {
      state.loader = true;
    },
    getMapFulfilled: (state, action) => {
      state.loader = false;
      state.error = null;
      state.map = action.payload;
    },
    getMapRejected: (state, action) => {
      state.error = action.payload;
      state.loader = false;
    },
    getAllMapssPending: (state, action) => {
      state.loader = true;
    },
    getAllMapssFulfilled: (state, action) => {
      state.loader = false;
      state.mainMap = action.payload;
      state.error = null;
    }, 
    getAllMapssRejected: (state, action) => {
      state.error = action.payload;
      state.loader = false;
    }
  }
})

export default MapSlice.reducer;

export const {actions: initMapActions} = MapSlice;
