import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import searchSlice from './search-slice';

const store = configureStore({
	reducer: {
		search: searchSlice.reducer,
	},
});

export type AppState = ReturnType<typeof store.getState>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	AppState,
	unknown,
	Action<string>
>;

export default store;
