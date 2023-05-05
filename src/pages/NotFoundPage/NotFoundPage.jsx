import * as STC from './NotFoundPage.styled';
import ImgLeft from '../../images/NotFoundPage/NotFoundPageLeft.png';
import ImgLeft2x from '../../images/NotFoundPage/NotFoundPageLeft@2x.png';
import ImgLeft3x from '../../images/NotFoundPage/NotFoundPageLeft@3x.png';
import ImgRight from '../../images/NotFoundPage/NotFoundPageRight.png';
import ImgRight2x from '../../images/NotFoundPage/NotFoundPageRight@2x.png';
import ImgRight3x from '../../images/NotFoundPage/NotFoundPageRight@3x.png';

export default function NotFoundPage() {
  return (
    <STC.Container>
      <STC.Img
        srcSet={`${ImgLeft} 1x, ${ImgLeft2x} 2x, ${ImgLeft3x} 3x`}
        src={ImgLeft}
        className="left"
        alt="Not found page image"
      />
      <STC.Box>
        <STC.Title>404</STC.Title>
        <STC.Txt>Page not found</STC.Txt>
        <STC.BtnHome to="/">Go to home</STC.BtnHome>
      </STC.Box>
      <STC.Img
        srcSet={`${ImgRight} 1x, ${ImgRight2x} 2x, ${ImgRight3x} 3x`}
        src={ImgRight}
        className="right"
        alt="Not found page image"
      />
    </STC.Container>
  );
}
