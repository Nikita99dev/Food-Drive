import { MAP_INIT_FULFILLED, MAP_INIT_PENDING, MAP_INIT_REJECTED } from "../types/map"

export const map_init_pending = () => ({ 
  type: MAP_INIT_PENDING,
})

export const map_init_fulfilled = (payload) => ({ 
  type: MAP_INIT_FULFILLED,
  payload
})

export const map_init_rejected = (payload) => ({ 
  type: MAP_INIT_REJECTED,
  payload
})
