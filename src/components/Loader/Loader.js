import { ColorRing } from 'react-loader-spinner';
import {
  LoaderSpinner,
  DotsOverlay,
  DotsWrapper,
  DotsLoader,
} from './Loader.styled';

export function Loader() {
  return (
    <LoaderSpinner>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </LoaderSpinner>
  );
}

export function DotsSpinner() {
  return (
    <DotsOverlay>
      <DotsWrapper>
        <DotsLoader
          height="60"
          width="60"
          radius="5"
          color="#3E85F3"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </DotsWrapper>
    </DotsOverlay>
  );
}
