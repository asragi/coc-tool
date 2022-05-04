import { SkillRepository } from "../repositories/skillRepository";
import { fetchAll } from "./dummy/skillrepository";

export const GetSkillRepository = (): SkillRepository => {
  return { fetchAll };
};
