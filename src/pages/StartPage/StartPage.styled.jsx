import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  background-color: var(--primary-background-color);

  max-width: 1600px;
`;

export const Hero = styled.div`
  text-align: center;
  min-height: 812px;
  padding: 232px 0 88px;

  background-color: var(--accent-background-color);
  color: var(--btn-text-color);

  @media (min-width: 768px) {
    min-height: 1024px;
    padding: 320px 0;
  }
  @media (min-width: 1280px) {
    min-height: 770px;
    padding: 187px 0;
  }
`;
export const LogoImg = styled.img`
  margin: 0 auto;
  width: 142px;
  height: 142px;

  @media (min-width: 768px) {
    width: 150px;
    height: 149px;
  }
`;
export const Title = styled.h1`
  margin-bottom: 32px;

  font-family: var(--secondary-font);
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;

  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

  @media (min-width: 768px) {
    margin-bottom: 40px;

    font-size: 120px;
    line-height: 150px;
  }
`;
export const LinkBox = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
  }
`;
export const LoginLink = styled(NavLink)`
  display: flex;
  justify-content: center;

  margin: 0 auto 208px;
  width: 131px;
  padding: 14px 32px;

  border-radius: 16px;
  box-shadow: var(--shadow-logout-btn);
  background-color: var(--sidebar-background-color);
  color: var(--accent-text-color);

  @media (min-width: 768px) {
    margin: 0;
    margin-left: 24px;
  }
`;
export const LoginTxt = styled.span`
  margin-right: 6px;

  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;

  letter-spacing: -0.02em;
`;
export const LoginSvg = styled.svg`
  width: 18px;
  height: 18px;

  stroke: currentColor;
  fill: transparent;
`;
export const SignupLink = styled(NavLink)`
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;

  text-decoration-line: underline;
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

  color: var(--btn-text-color);

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 18px;
  }
`;

export const ContentList = styled.ul`
  padding: 64px 20px;
  @media (min-width: 768px) {
    padding: 64px 32px;
  }
  @media (min-width: 1280px) {
    padding: 64px 128px;
  }
`;
export const ContentItem = styled.li`
  display: flex;
  flex-direction: column;

  padding-bottom: 64px;

  &:last-child {
    padding-bottom: 0;
  }
  &:nth-child(2n) {
    align-items: end;
  }

  @media (min-width: 1280px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    &:nth-child(2n) {
      flex-direction: row-reverse;
      align-items: center;
    }
  }
`;
export const ContentBox = styled.div`
  max-width: 275px;
  @media (min-width: 1280px) {
    margin: 0 77px;
  }
`;
export const Number = styled.p`
  margin-bottom: 14px;

  font-style: normal;
  font-weight: 700;
  font-size: 80px;
  line-height: 100%;
  /* identical to box height, or 80px */

  letter-spacing: -4px;
  color: var(--accent-text-color);

  @media (min-width: 768px) {
    font-size: 104px;
  }
`;
export const Category = styled.h2`
  display: inline-block;

  padding: 8px 18px;
  margin-bottom: 8px;

  color: var(--accent-text-color);
  background: var(--auth-bg-color);
  border-radius: 44px;

  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  /* identical to box height, or 125% */

  text-transform: uppercase;
  @media (min-width: 768px) {
    padding: 6px 18px;

    font-size: 40px;
    line-height: 44px;
  }
`;
export const SubTitle = styled.h2`
  margin-bottom: 14px;

  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  /* identical to box height, or 125% */

  text-transform: uppercase;

  @media (min-width: 768px) {
    margin-bottom: 24px;

    font-size: 40px;
    line-height: 44px;
  }
`;
export const Txt = styled.p`
  padding-bottom: 40px;

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  /* or 129% */

  color: rgba(17, 17, 17, 0.9);

  @media (min-width: 768px) {
    padding-bottom: 48px;
  }
  @media (min-width: 1280) {
    padding-bottom: 0;
  }
`;

export const ImageBox = styled.div`
  position: relative;
  width: 100%;
  height: 457px;
  overflow: hidden;

  background: var(--active-item-sidebar-background);
  border-radius: 40px;

  @media (min-width: 768px) {
    height: 700px;
    border-radius: 100px;
  }
  @media (min-width: 1280px) {
    width: 50%;
  }
`;
export const Images = styled.img`
  position: absolute;

  border-radius: 8px;

  &.calendar1 {
    width: 251.75px;
    height: 196.76px;
    left: 34px;
    top: 100px;

    box-shadow: -17px 36px 45px rgba(0, 0, 0, 0.2);
    transform: rotate(-28deg);

    @media (min-width: 768px) {
      width: 457.33px;
      height: 357.44px;
      left: 80px;
      top: 160px;
    }
  }
  &.calendar2 {
    width: 254px;
    height: 199px;
    left: 204px;
    top: 100px;

    box-shadow: 0px 27.8704px 43.9236px rgba(0, 0, 0, 0.197407),
      0px 16.563px 23.8889px rgba(0, 0, 0, 0.157926),
      0px 8.6px 12.1875px rgba(0, 0, 0, 0.13),
      0px 3.5037px 6.11111px rgba(0, 0, 0, 0.102074),
      0px 43px 75px rgba(0, 0, 0, 0.26),
      0px 0.796296px 2.95139px rgba(0, 0, 0, 0.0625926);
    transform: rotate(-28deg);
    @media (min-width: 768px) {
      width: 463.21px;
      height: 362.34px;
      left: 380px;
      top: 160px;
    }
    @media (min-width: 1280px) {
    }
  }
  &.calendar3 {
    width: 105.12px;
    height: 99.73px;
    left: 130px;
    top: 270px;

    box-shadow: 0px 3.5037px 6.11111px rgba(0, 0, 0, 0.102074),
      0px 43px 75px rgba(0, 0, 0, 0.26),
      0px 0.796296px 2.95139px rgba(0, 0, 0, 0.0625926);
    transform: rotate(-28deg);
    @media (min-width: 768px) {
      width: 190.96px;
      height: 181.17px;
      left: 255px;
      top: 485px;
    }
    @media (min-width: 1280px) {
    }
  }
  &.navigationdark {
    width: 111.24px;
    height: 347.61px;
    left: -9px;
    top: 130px;

    box-shadow: -17px 36px 45px rgba(0, 0, 0, 0.2);
    transform: rotate(28deg);
    @media (min-width: 768px) {
      width: 199px;
      height: 626px;
      left: 80px;
      top: 122px;
    }
    @media (min-width: 1280px) {
      width: 191px;
      height: 599px;
      left: 20px;
      top: 150px;
    }
  }
  &.navigationlite {
    width: 111.24px;
    height: 347.61px;
    left: 130px;
    top: 130px;

    box-shadow: -17px 36px 45px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    transform: rotate(28deg);
    @media (min-width: 768px) {
      width: 199px;
      height: 626px;
      left: 330px;
      top: 122px;
    }
    @media (min-width: 1280px) {
      width: 191px;
      height: 599px;
      left: 260px;
      top: 150px;
    }
  }
  &.day {
    width: 496px;
    height: 310px;
    left: 59px;
    top: 102px;

    padding: 11px;

    border-radius: 8px;
    border: 1.5px solid rgba(62, 133, 243, 0.4);
    @media (min-width: 768px) {
      width: 851px;
      height: 532px;
      left: 84px;
      top: 84px;
    }
  }
`;
export const ImageEllipse = styled.div`
  position: absolute;
  width: 256px;
  height: 256px;

  border-radius: 50%;
  background-image: radial-gradient(
    circle at center,
    rgba(62, 133, 243, 0) 40%,
    rgba(62, 133, 243, 0.1) 40%
  );

  @media (min-width: 768px) {
    width: 617px;
    height: 617px;
  }
  @media (min-width: 1280px) {
  }
  &.calendar {
    left: 190px;
    top: 330px;

    @media (min-width: 768px) {
      left: 300px;
      top: 515px;
    }
    @media (min-width: 1280px) {
    }
  }
  &.sidebar {
    left: -115px;
    top: -100px;
    @media (min-width: 768px) {
      left: -330px;
      top: -350px;
    }
    @media (min-width: 1280px) {
    }
  }
  &.day {
    display: none;
  }
`;
