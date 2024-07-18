import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api_key, base_url } from "../utils/constants";

export const fetchWeather = createAsyncThunk('weather/fetchWeather', async (city) => {
    try {
        const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
        const data = await response.json();
        return {
            country: data.sys.country,
            city: data.name,
            temp: data.main.temp,
            pressure: data.main.pressure,
            sunset: data.sys.sunset
        };
    } catch (e) {
        throw Error('Enter correct city name');
    }
});

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        message: 'Enter city name',
        weatherInfo: null
    },
    reducers: {
        putMessage: (state, action) => {
            state.message = action.payload;
        },
        putWeatherInfo: (state, action) => {
            state.weatherInfo = action.payload;
            state.message = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.pending, (state) => {
                state.message = 'Pending...';
            })
            .addCase(fetchWeather.fulfilled, (state, action) => {
                state.weatherInfo = action.payload;
                state.message = null;
            })
            .addCase(fetchWeather.rejected, (state, action) => {
                state.message = action.error.message;
            });
    }
});

export const { putMessage, putWeatherInfo } = weatherSlice.actions;
export default weatherSlice.reducer;