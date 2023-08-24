import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_breed_list = createAsyncThunk(
  "breeds/api_v1_breed_list",
  async payload => {
    const response = await apiService.api_v1_breed_list(payload)
    return response.data
  }
)
export const api_v1_breed_create = createAsyncThunk(
  "breeds/api_v1_breed_create",
  async payload => {
    const response = await apiService.api_v1_breed_create(payload)
    return response.data
  }
)
export const api_v1_breed_retrieve = createAsyncThunk(
  "breeds/api_v1_breed_retrieve",
  async payload => {
    const response = await apiService.api_v1_breed_retrieve(payload)
    return response.data
  }
)
export const api_v1_breed_update = createAsyncThunk(
  "breeds/api_v1_breed_update",
  async payload => {
    const response = await apiService.api_v1_breed_update(payload)
    return response.data
  }
)
export const api_v1_breed_partial_update = createAsyncThunk(
  "breeds/api_v1_breed_partial_update",
  async payload => {
    const response = await apiService.api_v1_breed_partial_update(payload)
    return response.data
  }
)
export const api_v1_breed_destroy = createAsyncThunk(
  "breeds/api_v1_breed_destroy",
  async payload => {
    const response = await apiService.api_v1_breed_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const breedsSlice = createSlice({
  name: "breeds",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_breed_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_breed_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_breed_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_breed_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_breed_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_breed_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_breed_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_breed_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_breed_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_breed_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_breed_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_breed_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_breed_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_breed_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_breed_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_breed_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_breed_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_breed_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_breed_list,
  api_v1_breed_create,
  api_v1_breed_retrieve,
  api_v1_breed_update,
  api_v1_breed_partial_update,
  api_v1_breed_destroy,
  slice: breedsSlice
}
