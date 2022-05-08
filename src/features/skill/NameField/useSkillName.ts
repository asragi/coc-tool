import { useSelector } from "react-redux";
import { skillNameSelector } from "../selector";
import { SkillId } from "../types";

interface Props {
  id: SkillId;
}

export const useSkillName = ({ id }: Props) => {
  const name = useSelector(skillNameSelector);

  return { name };
};
