import { Outlet, useLocation } from 'react-router-dom';
import { Container, Main, Wrapper } from './MainLayout.styled';
import { Header } from './Header/Header';
import { useEffect, useState } from 'react';
import { SideBar } from './SideBar/SideBar';
import { refreshUser } from 'redux/auth/auth.operations';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { DotsSpinner } from '../Loader/Loader';

export const MainLayout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    // simulate loading delay
    setTimeout(() => setIsLoading(false), 1000);
  }, [location]);

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
      {isLoading && <DotsSpinner />}
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
