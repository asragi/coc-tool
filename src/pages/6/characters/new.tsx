import { Box, Button, Container, Typography } from '@mui/material';
import { NextPage } from 'next';
import Copyright from '../../../components/Copyright';
import { Header } from '../../../components/Header';
import ProTip from '../../../components/ProTip';
import Link from '../../../components/Link';
import { Stack } from '@mui/material';
import { CharacterInfo } from '../../../components/CharacterInfo';
import { BasicInfoContent } from '../../../components/BasicInfoContent';
import { ParameterContent } from '../../../components/ParameterContent';
import { SkillContent } from '../../../components/Skill/SkillContent';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { i18n } from '../../../../next-i18next.config';
import { GetSkillRepository } from '../../../infrastructures/skillRepository';

const i18nextNameSpace = ['common'];
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const translations = await serverSideTranslations(locale!, i18nextNameSpace, {
    i18n,
  });

  return { props: { ...translations } };
};

const Edit: NextPage = () => {
  const empty = <div>Empty</div>;
  const skillRepository = GetSkillRepository();

  return (
    <Container maxWidth='lg'>
      <Header />
      <Stack>
        <CharacterInfo
          headerText='BasicInfo'
          innerContent={<BasicInfoContent />}
        />
        <CharacterInfo
          headerText='Parameters'
          innerContent={<ParameterContent version={6} />}
        />
        <CharacterInfo
          headerText='Skills'
          innerContent={
            <SkillContent
              skillRepository={skillRepository}
              characterId='NOT_IMPLEMENTED'
            />
          }
        />
        <CharacterInfo headerText='Battle' innerContent={empty} />
      </Stack>
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant='h4' component='h1' gutterBottom>
          This is Ver.6 Character New Page.
        </Typography>
        <Box maxWidth='sm'>
          <Button variant='contained' component={Link} noLinkStyle href='/'>
            Go to the home page
          </Button>
        </Box>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
};

export default Edit;
