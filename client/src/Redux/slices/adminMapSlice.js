import { createSlice } from "@reduxjs/toolkit"
import { actions } from "./rootReducer";

const initialState = {
  data: [],
  dataApproved: [],
  money: 0,
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
      // const index = state.data.findIndex(post=>post.id === +action.payload && post.isApproved === false);
      // state.data.slice(0, 1)
      state.data = state.data.filter(post=> post.id !== +action.payload )
      state.dataApproved = state.dataApproved.filter(post=> post.id !== +action.payload)
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
    getAllMapsFulfilled: (state, action) => {
      state.loader = false;
      state.data = action.payload.filter(el=>el.isApproved === false)
      state.dataApproved = action.payload.filter(el=>el.isApproved === true)
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
      state.dataApproved.push(state.data.filter(post=>post.id === +action.payload)[0])
      state.data = state.data.filter(post=>post.id !== +action.payload);
      state.error = null;
    },
    updateMapRejected: (state, action) => {
      state.error = action.payload;
      state.loader = false;
    },
    countMoneyPending: (state, action) => {
      state.loader = true;
    },
    countMoneyFullfiled: (state, action) => {
      state.money = action.payload;
      state.loader = false;
      state.error = null;
    },
    countMoneyRejected: (state, action) => {
      state.error = action.payload
      state.loader = false;
    }
  }
})

export default AdminMapSlice.reducer

export const {actions: AdminMapActions} = AdminMapSlice;
