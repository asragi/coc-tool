import { Stack } from '@mui/material';
import { CharacterId } from '../../../models/character';
import { SkillRepository } from '../../../repositories/skillRepository';
import { SkillListContent } from '../SkillListContent';

export interface SkillContentViewProps {
  skillRepository: SkillRepository;
  characterId: CharacterId;
}

export const SkillContentView = ({
  skillRepository,
  characterId,
}: SkillContentViewProps) => {
  return (
    <Stack>
      <SkillListContent
        skillRepository={skillRepository}
        characterId={characterId}
      />
    </Stack>
  );
};
