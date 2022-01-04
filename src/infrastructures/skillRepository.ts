import { SkillRepository } from "../repositories/skillRepository";
import { fetchAll } from "./dummy/skillRepository";

export const GetSkillRepository = (): SkillRepository => {
  return { fetchAll };
};
