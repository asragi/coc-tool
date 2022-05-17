import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Skill, SkillId, SkillProperty } from './types';

type SkillState = {
  skills: Skill[];
};

const initialState: SkillState = {
  skills: [],
};

interface UpdateProps {
  id: SkillId;
  property: SkillProperty;
  after: number;
}

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

        return `skill${skills.length}`;
      })();
      const newSkill = {
        ...skill,
        id: newId,
        deleted: false,
      };
      state.skills = [...state.skills, newSkill];
    },
    updateSkill: (state, { payload }: PayloadAction<UpdateProps>) => {
      const targetIndex = state.skills.findIndex((e) => e.id === payload.id);
      if (targetIndex === -1) {
        return;
      }
      const targetSkill = state.skills[targetIndex];
      targetSkill[payload.property] = payload.after;
    },
    deleteSkill: (state, action: PayloadAction<SkillId>) => {
      const target = state.skills.findIndex((s) => s.id === action.payload);
      if (target === -1) {
        return;
      }
      state.skills[target].deleted = true;
    },
    updateSkillName: (
      state,
      { payload }: PayloadAction<{ id: SkillId; name: string }>
    ) => {
      const target = state.skills.findIndex((s) => s.id === payload.id);
      if (target === -1) return;
      state.skills[target].label = payload.name;
    },
  },
});

export const {
  fetchSkills,
  addSkill,
  updateSkill,
  deleteSkill,
  updateSkillName,
} = skillSlice.actions;
export const skillReducer = skillSlice.reducer;
