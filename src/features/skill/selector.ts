import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';

const skillSelector = (state: RootState) => state.skill;

export const batchGetSelector = createSelector(skillSelector, (r) => r.skills);
export const skillNameSelector = createSelector(skillSelector, r => {
  const target = r.skills.find(s => s.id === 0);
  if (!target) {
    // TODO: Throw a proper exception.
    return '';
  }

  return target.label;
});
