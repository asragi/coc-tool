import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { SkillId } from './types';

const skillSelector = (state: RootState) => state.skill;

export const batchGetSelector = createSelector(skillSelector, (r) => r.skills);
export const skillNameSelector = createSelector(
  [skillSelector, (_state, id: SkillId) => id],
  (r, id) => {
    const target = r.skills.find((s) => s.id === id);
    if (!target) {
      // TODO: Throw a proper exception.
      return '';
    }

    return target.label;
  }
);
