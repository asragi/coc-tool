import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Skill, SkillId } from './types';

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
    addSkill: (state, action: PayloadAction<Omit<Skill, 'id' | 'deleted'>>) => {
      const skill = action.payload;
      const newId = (() => {
        const { skills } = state;
        if (skills.length < 1) return 0;

        return Math.max(...skills.map((skill) => skill.id)) + 1;
      })();
      const newSkill = {
        ...skill,
        id: newId,
        deleted: false,
      };
      state.skills = [...state.skills, newSkill];
    },
    updateSkill: (state, action: PayloadAction<Skill>) => {
      const targetIndex = state.skills.findIndex(
        (e) => e.id === action.payload.id
      );
      if (targetIndex === -1) {
        return;
      }
      state.skills[targetIndex] = action.payload;
    },
    deleteSkill: (state, action: PayloadAction<SkillId>) => {
      const target = state.skills.findIndex((s) => s.id === action.payload);
      if (target === -1) {
        return;
      }
      state.skills[target].deleted = true;
    },
  },
});

export const { fetchSkills, addSkill, updateSkill, deleteSkill } =
  skillSlice.actions;
export const skillReducer = skillSlice.reducer;
