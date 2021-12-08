import { ExpandMore } from '@mui/icons-material';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import { ReactNode } from 'react';

export interface CharacterInfoViewProps {
  headerText: string;
  innerContent: ReactNode;
}

export const CharacterInfoView = ({
  headerText,
  innerContent,
}: CharacterInfoViewProps) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls='panel1a-content'
        id='panel1a-header'
      >
        <Typography>{headerText}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {innerContent}
      </AccordionDetails>
    </Accordion>
  );
};
