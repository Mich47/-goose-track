import { Outlet } from 'react-router-dom';
import { Container, Main, Wrapper } from './MainLayout.styled';
import { Header } from './Header/Header';
import { useEffect, useState } from 'react';
import { SideBar } from './SideBar/SideBar';
import { refreshUser } from 'redux/auth/auth.operations';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

export const MainLayout = () => {
  const [isMobalMenuOpen, setIsMobalMenuOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(refreshUser());
    } catch (error) {
      toast.error('Authorization error');
    }
  }, [dispatch]);

  return (
    <>
      <Container>
        <SideBar
          isMobalMenuOpen={isMobalMenuOpen}
          closeMobalMenu={setIsMobalMenuOpen}
        />

        <Wrapper>
          <Header openMobalMenu={setIsMobalMenuOpen} />

          <Main>
            <Outlet />
          </Main>
        </Wrapper>
      </Container>
    </>
  );
};
