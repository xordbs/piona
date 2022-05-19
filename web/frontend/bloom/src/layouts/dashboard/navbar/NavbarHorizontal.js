import { memo } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Container, AppBar } from '@mui/material';
// config
import { HEADER } from '../../../config';
// hooks
import useAuth from '../../../hooks/useAuth';
// components
import { NavSectionHorizontal } from '../../../components/nav-section';
//
import {shopNavConfig, adminNavConfig} from './NavConfig';

// ----------------------------------------------------------------------

const RootStyle = styled(AppBar)(({ theme }) => ({
  transition: theme.transitions.create('top', {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  width: '100%',
  position: 'fixed',
  zIndex: theme.zIndex.appBar,
  padding: theme.spacing(1, 0),
  boxShadow: theme.customShadows.z8,
  top: HEADER.DASHBOARD_DESKTOP_OFFSET_HEIGHT,
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

function NavbarHorizontal() {
  const { user } = useAuth();
  return (
    <RootStyle>
      <Container maxWidth={false}>;
        {user.user_code === 'A' ? <NavSectionHorizontal navConfig={adminNavConfig} />:<NavSectionHorizontal navConfig={shopNavConfig} />}
        {/* <NavSectionHorizontal navConfig={navConfig} /> */}
      </Container>
    </RootStyle>
  );
}

export default memo(NavbarHorizontal);