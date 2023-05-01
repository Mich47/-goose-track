import { useDispatch } from 'react-redux';

import { authLogout } from 'redux/auth/auth.operations';
import * as STC from './LogoutBtn.styled';
import Icons from '../../../images/sprite.svg';

export const LogoutBtn = () => {
  const dispatch = useDispatch();

  return (
    <STC.Btn
      onClick={() => {
        dispatch(authLogout());
        const body = document.querySelector('body');
        body.classList.remove('dark-theme');
      }}
    >
      <STC.Txt>Log out</STC.Txt>
      <STC.Svg>
        <use href={`${Icons}#logout-door-sf`} />
      </STC.Svg>
    </STC.Btn>
  );
};
