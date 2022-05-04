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
    fetchSkills: (state, action: PayloadAction<Skill[]>) => {
      state.skills = action.payload;
    },
  },
});

export const { fetchSkills } = skillSlice.actions;
export const skillReducer = skillSlice.reducer;
