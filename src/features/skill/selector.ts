import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';

const skillSelector = (state: RootState) => state.skill;

export const batchGetSelector = createSelector(skillSelector, (r) => r.skills);
