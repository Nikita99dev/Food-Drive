import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  data: [],
  error: null,
  loader: false
}


const AdminMapSlice = createSlice({
  name: 'secured',
  initialState,
  reducers:{
    deleteMapPending: (state, action) => {
      state.loader = true;
    },
    deleteMapFulfilled: (state, action) => {
      const index = state.data.findIndex(post=>post.id === +action.payload);
      // state.data.slice(0, 1)
      state.data.splice(index,1);
      state.loader = false;
      state.error = null;
    },
    deleteMapRejected: (state, action) => {
      state.error = action.payload;
      state.loader = false;
    },
    getAllMapsPending: (state, action) => {
      state.loader = true;
    }, 
    getAppMapsFulfilled: (state, action) => {
      state.loader = false;
      state.data = action.payload;
      state.error = null;
    },
    getAllMapsRejected: (state, action) => {
      state.loader = false;
      state.error = action.payload;
    },
    updateMapPending: (state, action) => {
      state.loader = true;
    },
    updateMapFulfilled: (state, action) => {
      state.loader = false;
      state.data = action.payload;
      state.error = null;
    },
    updateMapRejected: (state, action) => {
      state.error = action.payload;
      state.loader = false;
    }
  }
})

export default AdminMapSlice.reducer

export const {actions: AdminMapActions} = AdminMapSlice;
