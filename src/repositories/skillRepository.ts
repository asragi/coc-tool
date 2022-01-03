import { CharacterId } from '../models/character';
import { Skill } from '../models/skill';

export interface SkillRepository {
  fetchAll: (id: CharacterId) => Skill[];
}
