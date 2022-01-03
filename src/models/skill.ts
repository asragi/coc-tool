import { CharacterId } from './character';

export interface Skill {
  owner: CharacterId;
  label: string;
  initial: number;
  jobPoint: number;
  interestPoint: number;
  mod: number;
  tmp: number;
  growth: number;
}
