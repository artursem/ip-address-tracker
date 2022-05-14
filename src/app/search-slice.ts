import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchByIp } from '../services/ipApi';
import type { RootState } from './store';
import { Status } from '../types/status';
import ApiResponse from '../types/apiResponse';

interface SearchState {
	searchResult: ApiResponse;
	coords: [number, number];
	status: Status;
}

const initialState: SearchState = {
	searchResult: {
		ipAddress: '',
		location: '',
		timezone: '',
		isp: '',
	},
	coords: [0, 0],
	status: Status.idle,
};

export const fetchDataByIp = createAsyncThunk('search/byIp', async (ipAddress: string) => {
	const response = fetchByIp(ipAddress);
	return response;
});

export const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setCoords: (state, action) => {
			state.coords = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchDataByIp.pending, (state) => {
				state.status = Status.loading;
			})
			.addCase(fetchDataByIp.fulfilled, (state, action) => {
				state.status = Status.idle;
				state.searchResult = action.payload;
			});
	},
});

export const selectSearchResult = (state: RootState) => state.search;
export default searchSlice;
