import styled from 'styled-components';
import background from 'components/image/background.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 20px;

  &::before {
    content: '';
    display: block;
    background-color: rgb(255 255 255);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  &::after {
    content: '';
    position: fixed;
    top: 0px;
    left: -5px;
    width: calc(100% + 10px);
    height: calc(100vh + 10px);
    background-image: ${props =>
      props.backdrop
        ? `url('https://image.tmdb.org/t/p/w500/${props.backdrop}')`
        : `url(${background})`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    filter: blur(5px);
    z-index: -1;
    opacity: 0.35;
  }

  @media screen and (max-width: 768px) {
    padding: 0 5px;
  }
`;
export const Description = styled.div`
  flex: 1 1 auto;
`;
