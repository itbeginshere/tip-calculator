import { createSlice } from "@reduxjs/toolkit";

export interface CalculatorState {
  bill: number;
  people: number;
  selectedTip: number;
  tipPercentage: number;
  tipAmount: number;
  total: number;
  customOpen: boolean;
}

const initialState: CalculatorState = {
  bill: 142.55,
  people: 5,
  selectedTip: 15,
  tipPercentage: 15,
  tipAmount: 4.27,
  total: 32.79,
  customOpen: false,
};

const calculateValues = (state: CalculatorState): CalculatorState => {
  if (state.bill === 0 || state.people === 0) {
    state.tipAmount = 0;
    state.total = 0;
  } else {
    state.tipAmount = (state.bill * (state.tipPercentage / 100)) / state.people;
    state.total =
      (state.bill + state.bill * (state.tipPercentage / 100)) / state.people;
  }

  return state;
};

const calculatorSlice = createSlice({
  name: "calculator",
  initialState: initialState,
  reducers: {
    billChanged: (state, action) => {
      state.bill = action.payload;
      state = calculateValues(state);
    },
    peopleChange: (state, action) => {
      state.people = action.payload;
      state = calculateValues(state);
    },
    tipPercentageChange: (state, action) => {
      state.tipPercentage = action.payload;
      state = calculateValues(state);
    },
    openCustom: (state) => {
      state.customOpen = true;
      state.selectedTip = -1;
      state = calculateValues(state);
    },
    selectedTip: (state, action) => {
      state.selectedTip = action.payload;
      state.tipPercentage = action.payload;
      state.customOpen = false;
      state = calculateValues(state);
    },
    reset: (state) => {
      state.bill = 142.55;
      state.people = 5;
      state.selectedTip = 15;
      state.tipPercentage = 15;
      state.tipAmount = 4.27;
      state.total = 32.79;
      state.customOpen = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  billChanged,
  peopleChange,
  tipPercentageChange,
  openCustom,
  selectedTip,
  reset,
} = calculatorSlice.actions;

export default calculatorSlice.reducer;
