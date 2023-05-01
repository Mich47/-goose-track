import PropTypes from 'prop-types';
import { ThemeToggler } from 'components/ThemeToggler/ThemeToggler';
import {
  HeaderAvatarWrapper,
  HeaderStyled,
  HeaderWrapper,
  MobileMenuSvg,
  Overlay,
  PageName,
  PageNameWraper,
  SpanStyled,
  Text,
  UserName,
} from './Header.styled';
import { useSelector } from 'react-redux';
import { selectUserName } from 'redux/auth/auth.selectors';
import { Link, useLocation } from 'react-router-dom';
import icon from '../../../images/sprite.svg';
import { Avatar } from '../../Avatar/Avatar';
import gooseToDo from '../../../images/Goose-toDo-task.png';
import { selectTasks } from 'redux/calendar/calendar.selectors';

export const Header = ({ openMobalMenu }) => {
  const name = useSelector(selectUserName);

  const location = useLocation();
  let isActivePage = location.pathname.split('/')[1];

  if (isActivePage === 'calendar') {
    isActivePage = 'Calendar';
  } else if (isActivePage === 'account') {
    isActivePage = 'User Profile';
  }

  const tasks = useSelector(selectTasks);
  // console.log(tasks);

  const taskStatusToDo =
    tasks
      .flatMap(day => (day.length > 0 ? day.map(task => task.status) : ''))
      .some(status => ['To do', 'In progress'].includes(status)) &&
    isActivePage === 'Calendar';

  return (
    <HeaderStyled>
      <Overlay>
        <PageNameWraper>
          {taskStatusToDo && <img src={gooseToDo} alt="Goose" />}

          <div>
            {<PageName>{isActivePage}</PageName>}
            {taskStatusToDo && (
              <Text>
                <SpanStyled>Let go</SpanStyled> of the past and focus on the
                present!
              </Text>
            )}
          </div>
        </PageNameWraper>
      </Overlay>

      <MobileMenuSvg
        onClick={() => openMobalMenu(true)}
        aria-label="Toggle mobile menu"
      >
        <use xlinkHref={`${icon}#profile-mobile-menu`}></use>
      </MobileMenuSvg>

      <HeaderWrapper>
        <ThemeToggler></ThemeToggler>

        <UserName>{name.split(' ')[0]}</UserName>

        <Link to="/account">
          <HeaderAvatarWrapper>
            <Avatar />
          </HeaderAvatarWrapper>
        </Link>
      </HeaderWrapper>
    </HeaderStyled>
  );
};

Header.propTypes = {
  openMobalMenu: PropTypes.func.isRequired,
};
