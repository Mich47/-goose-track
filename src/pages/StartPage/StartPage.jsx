import * as STC from './StartPage.styled';
import LogoGoose from '../../images/GOOSE.png';
import Icons from '../../images/sprite.svg';
import ImageCalendar1 from '../../images/StartPage/Calendar1.jpg';
import ImageCalendar2 from '../../images/StartPage/Calendar2.jpg';
import ImageCalendar3 from '../../images/StartPage/Calendar3.jpg';
import ImageNavigationDark from '../../images/StartPage/NavigationDark.jpg';
import ImageNavigationLite from '../../images/StartPage/NavigationLite.jpg';
import ImageDay from '../../images/StartPage/Day.jpg';

export default function StartPage() {
  return (
    <STC.Container>
      <STC.Hero>
        <STC.LogoImg src={`${LogoGoose}`} />
        <STC.Title>
          G<span style={{ fontStyle: 'italic', marginRight: '7px' }}>oo</span>
          seTrack
        </STC.Title>
        <STC.LinkBox>
          <STC.LoginLink to="/login">
            <STC.LoginTxt>Log in</STC.LoginTxt>
            <STC.LoginSvg>
              <use href={`${Icons}#login-door-sf`} />
            </STC.LoginSvg>
          </STC.LoginLink>
          <STC.SignupLink to="/register">Sign up</STC.SignupLink>
        </STC.LinkBox>
      </STC.Hero>

      <STC.ContentList>
        <STC.ContentItem>
          <STC.ContentBox>
            <STC.Number>1.</STC.Number>
            <STC.Category>Calendar</STC.Category>
            <STC.SubTitle>View</STC.SubTitle>
            <STC.Txt>
              GooseTrack's Calendar view provides a comprehensive overview of
              your schedule, displaying all your tasks, events, and appointments
              in a visually appealing and intuitive layout.
            </STC.Txt>
          </STC.ContentBox>
          <STC.ImageBox>
            <STC.ImageEllipse className="calendar" />
            <STC.Images className="calendar1" src={ImageCalendar1} />
            <STC.Images className="calendar2" src={ImageCalendar2} />
            <STC.Images className="calendar3" src={ImageCalendar3} />
          </STC.ImageBox>
        </STC.ContentItem>
        <STC.ContentItem>
          <STC.ContentBox>
            <STC.Number>2.</STC.Number>
            <STC.SubTitle>SIDEBAR</STC.SubTitle>
            <STC.Txt>
              GooseTrack offers easy access to your account settings, calendar,
              and filters. The "My Account" section allows you to manage your
              profile information and preferences, while the calendar provides a
              quick and convenient way to view your upcoming events and tasks.
            </STC.Txt>
          </STC.ContentBox>
          <STC.ImageBox>
            <STC.ImageEllipse className="sidebar" />
            <STC.Images className="navigationdark" src={ImageNavigationDark} />
            <STC.Images className="navigationlite" src={ImageNavigationLite} />
          </STC.ImageBox>
        </STC.ContentItem>
        <STC.ContentItem>
          <STC.ContentBox>
            <STC.Number>3.</STC.Number>
            <STC.Category>all in</STC.Category>
            <STC.SubTitle>one</STC.SubTitle>
            <STC.Txt>
              GooseTrack is an all-in-one productivity tool that helps you stay
              on top of your tasks, events, and deadlines. Say goodbye to
              scattered to-do lists and hello to streamlined productivity with
              GooseTrack.
            </STC.Txt>
          </STC.ContentBox>
          <STC.ImageBox>
            <STC.ImageEllipse className="day" />
            <STC.Images className="day" src={ImageDay} />
          </STC.ImageBox>
        </STC.ContentItem>
      </STC.ContentList>
    </STC.Container>
  );
}
