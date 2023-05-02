import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import DatePicker from 'react-datepicker';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  width: 100%;
  margin-top: 51px;
  padding: 40px 20px;
  background-color: var(--primary-background-color);
  border-radius: 16px;
  position: relative;

  @media (min-width: 768px) {
    margin-top: 0;
    padding: 40px;
    position: static;
  }

  @media (min-width: 1280px) {
    gap: 60px;
    padding-top: 60px;
    padding-bottom: 60px;
  }
`;

export const FlexInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 18px;

  @media (min-width: 768px) {
    gap: 24px;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 732px;
  }

  @media (min-width: 876px) {
    justify-content: space-between;
  }
`;

export const LabelSpan = styled.span`
  margin-bottom: 8px;
  color: var(--secondary-text-color);
`;

export const Label = styled.label`
  font-family: 'Inter', serif;
  font-size: 12px;
  line-height: 1.2;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const Input = styled.input`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.3;
  outline: none;
  border: var(--border);
  border-radius: 8px;
  height: 42px;
  padding: 12px 12px 12px 14px;
  box-sizing: border-box;
  color: var(--primary-text-color);
  background-color: var(--primary-background-color);

  &::placeholder {
    font-family: var(--primary-font);
    font-size: 14px;
    line-height: 1.29;
    color: var(--auth-placeholder-color);
  }

  @media (max-width: 374px) {
    max-width: 298px;
  }

  @media (min-width: 375px) {
    width: 299px;
  }

  @media (min-width: 768px) {
    width: 354px;
    height: 46px;
    padding-left: 14px 14px 14px 18px;
    font-size: 16px;
  }

  transition: border var(--animation);
  &:hover,
  :focus {
    border: 1px solid ${props => (props.hasError ? 'red' : 'gray')};
  }
`;

export const AvatarBlock = styled.div`
  margin-top: -76px;

  @media (min-width: 768px) {
    margin-top: 0;
  }

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const InputAva = styled.input`
  display: none;
  width: 200px;
  height: 150px;
`;

export const DefaultSvg = styled.svg`
  fill: var(--auth-bg-color);
  width: 50%;
  height: 50%;
  position: relative;
  top: 25%;
  left: 25%;
  object-fit: cover;
`;

export const LabelImg = styled.img`
  cursor: pointer;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  /* overflow: hidden; */
  object-fit: cover;
`;

export const LabelAva = styled.label`
  position: relative;
  border-radius: 50%;
  border: 2px solid var(--accent-background-color);
  width: 72px;
  height: 72px;

  display: block;
  /* margin: -36px auto 0 auto; */
  /* overflow: hidden; */
  background-color: var(--avatar-background-color);

  @media (min-width: 768px) {
    width: 124px;
    height: 124px;
  }
`;

export const ButtonPlus = styled.div`
  width: 14px;
  height: 14px;
  background-color: var(--accent-background-color);
  border-radius: 50%;
  color: var(--btn-text-color);

  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: -4px;
  right: 15px;

  @media (min-width: 768px) {
    bottom: -6px;
    right: 24px;
    width: 24px;
    height: 24px;
  }
  transition: background-color var(--animation);
  &:hover,
  :focus {
    background-color: var(--hover-btn-background-color);
  }
`;

export const PlusSvg = styled.svg`
  fill: currentColor;
  stroke: currentColor;
  width: 8px;
  height: 8px;

  @media (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;

export const ArrowSvg = styled.svg`
  stroke: currentColor;
  fill: currentColor;
  width: 12px;
  height: 12px;
`;

export const Button = styled.button`
  font-family: 'Inter', sans-serif;
  /* margin: 40px auto; */
  display: block;
  width: 100%;
  max-width: 195px;

  background-color: var(--accent-background-color);
  border-radius: 16px;
  color: var(--btn-text-color);
  font-size: 14px;
  line-height: 1.3;
  text-align: center;
  border: none;
  padding: 14px;

  &[disabled] {
    background-color: #84828a;
    opacity: 0.5;
    pointer-events: none;
  }

  @media (min-width: 768px) {
    padding: 15px;
    // margin-top: 16px;
    max-width: 262px;
    max-height: 48px;
    // margin-bottom: 40px;
  }

  @media (min-width: 1280px) {
    /* margin: 64px auto 60px auto; */
  }

  transition: background-color var(--animation), box-shadow var(--animation);
  &:hover,
  :focus {
    box-shadow: 4px 2px 16px rgba(136, 165, 191, 1);
    background-color: var(--hover-btn-background-color);
  }
`;

export const TitleAvatar = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 1;
  //color: #343434;
  margin: 14px 0 0 0;
  text-align: center;
  color: var(--primary-text-color);

  @media (min-width: 768px) {
    margin: 20px 0 0 0;
  }
`;

export const TextAvatar = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: var(--secondary-text-color);
  margin-top: 4px;
  text-align: center;

  @media (min-width: 768px) {
    margin-top: 8px;
  }
`;

export const Errors = styled.div`
  color: red;
  font-size: 10px;
`;

export const GlobalStyles = createGlobalStyle`
  .react-datepicker__wrapper {
    position: relative;
  }

  .react-datepicker {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-1%, 0%);
    font-family: (var--primary-font);
    padding: 12px;
    border-radius: 16px;
    background-color: var(--accent-background-color);

    @media (min-width: 768px) {
      padding: 18px;
      transform: translate(-8%, 0%);
    }
  }

  .react-datepicker__month-container {
    float: inherit;
    box-sizing: inherit;
  }

  .react-datepicker__header {
    font-family: var(--primary-font);

    text-align: center;
    background-color: var(--accent-background-color);

    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
    position: relative;
  }

  .react-datepicker__day-names {
    display: flex;
    border-bottom: var(--border);
    padding: 12px 0;
    justify-content: space-between;

    @media (min-width: 768px) {
      padding: 16px 0;
    }
  }

  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-top-right-radius: 16px;
    border-bottom: 0px;
    padding: 0;
  }

  .react-datepicker__current-month {
    font-family: Inter, serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
    color: var(--btn-text-color);

    @media (min-width: 768px) {
      font-size: 24px;
      line-height: 28px;
    }
  }

  .react-datepicker__day-name {
    font-family: Inter, serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: center;
    margin: 0;
    color: var(--btn-text-color);

    @media (min-width: 768px) {
      font-size: 18px;
      line-height: 24px;
    }
  }

  .react-datepicker__navigation {
    margin-top: 7px;

    @media (min-width: 768px) {
      margin-top: 17px;
    }
  }

  .react-datepicker__navigation--previous {
    left: 7px;

    @media (min-width: 768px) {
      left: 17px;
    }
  }

  .react-datepicker__navigation--next {
    right: 7px;

    @media (min-width: 768px) {
      right: 17px;
    }
  }

  .react-datepicker__navigation-icon::before {
    border-color: var(--btn-text-color);
    transition: border-color var(--animation);

    @media (max-width: 767px) {
      border-width: 2px 2px 0 0;
      height: 9px;
      width: 9px;
    }

    @media (min-width: 768px) {
      margin-top: -2px;
      height: 12px;
      width: 12px;
    }
  }

  .react-datepicker__navigation-icon::before:hover:focus {
    border-color: var(--btn-text-color);
  }

  .react-datepicker__week {
    display: flex;
    gap: 7px;

    color: var(--btn-text-color);
    justify-content: space-between;
  }

  .react-datepicker__day {
    font-family: Inter, serif;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0em;
    text-align: center;
    color: var(--btn-text-color);
    width: 32px;
    height: 32px;
    margin: 0;
    border-radius: 50%;
    text-align: center;
    line-height: 32px;
    transition: color var(--animation), background-color var(--animation);

    @media (min-width: 768px) {
      font-size: 18px;
      line-height: 24px;
      width: 48px;
      height: 48px;
      line-height: 48px;
    }
  }

  .react-datepicker__month {
    display: flex;
    gap: 7px;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 16px;
    margin: 0;

    @media (min-width: 768px) {
      padding-top: 20px;
    }
  }

  .react-datepicker__day--selected {
    /* transform: scale(1); */
    /* border-radius: 50%; */
    background-color: var(--btn-text-color);
    color: var(--accent-background-color);
    font-size: 14px;

    @media (min-width: 768px) {
      font-size: 18px;
    }
  }

  .react-datepicker__day--selected:hover {
    border-radius: 50%;
    background-color: white;
  }

  .react-datepicker__day:hover {
    border-radius: 50%;
    background-color: white;
    color: var(--accent-background-color);
  }

  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color: white;
    color: var(--accent-background-color);
  }

  .react-datepicker__day--weekend {
    opacity: 50%;
  }

  .react-datepicker__day--outside-month {
    color: var(--accent-background-color);
    background-color: transparent;
    pointer-events: none;
    opacity: 0;
  }

  .react-datepicker__view-calendar-icon input {
    padding: 6px 10px 5px 13px;
  }

  .react-datepicker__triangle {
    visibility: hidden;
  }

`;

export const StyledDatePick = styled(DatePicker)`
  position: relative;
  width: 299px;
  height: 42px;
  border: var(--border);
  border-radius: 8px;
  font-family: 'Inter', serif;
  font-style: normal;

  font-weight: 600;
  font-size: 14px;
  line-height: 1.3;
  outline: none;
  padding: 12px 12px 12px 14px;
  box-sizing: border-box;
  color: var(--primary-text-color);
  background-color: var(--primary-background-color);

  &:focus-visible {
    outline: none;
    border: var(--border);
    border-radius: 8px;
  }

  @media screen and (min-width: 768px) {
    width: 354px;
    height: 46px;
    font-size: 16px;
    line-height: 1.12;
    padding: 14px 14px 14px 18px;
  }
  transition: border var(--animation);
  &:hover,
  :focus {
    border: 1px solid ${props => (props.hasError ? 'red' : 'gray')};
  }
`;

export const StyledIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  transform: translate(875%, 95%);
  z-index: 1;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: var(--primary-background-color);
  /* box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); */
  cursor: pointer;
  @media screen and (min-width: 768px) {
    transform: translate(1045%, 108%);
  }
`;

export const BirthdayContainer = styled.div`
  position: relative;
`;
