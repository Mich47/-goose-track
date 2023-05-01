import styled from 'styled-components';

export const AvatarSvg = styled.svg`
  width: inherit;
  height: inherit;

  fill: var(--avatar-fill-color);
  background-color: var(--avatar-background-color);

  border-radius: 50%;
  border: solid 1px var(--accent-background-color);
`;

export const AvatarImg = styled.img`
  width: inherit;
  height: 100%;
  border-radius: 50%;
  border: solid 1px var(--accent-background-color);
`;
