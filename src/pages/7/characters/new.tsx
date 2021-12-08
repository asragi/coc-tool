import { Box, Button, Container, Typography } from '@mui/material';
import { NextPage } from 'next';
import Copyright from '../../../components/Copyright';
import { Header } from '../../../components/Header';
import ProTip from '../../../components/ProTip';
import Link from '../../../components/Link';

const Edit: NextPage = () => {
  return (
    <Container maxWidth='lg'>
      <Header />
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
          This is Ver.7 Character New Page.
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
