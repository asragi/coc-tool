import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Skill } from './types';

type SkillState = {
  skills: Skill[];
};

const initialState: SkillState = {
  skills: [],
};

const skillSlice = createSlice({
  name: 'Skill',
  initialState,
  reducers: {
    fetch: (state, action: PayloadAction<Skill[]>) => {
      state.skills = action.payload;
    },
  },
});

export const { fetch } = skillSlice.actions;
export const skillReducer = skillSlice.reducer;
