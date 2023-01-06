import styled from '@emotion/styled';
import { Container } from '@gamiui/standard';

export const News = styled(Container)<{
  $backgroundColor?: string;
  $backgroundImg?: string;
  $color?: string;
}>`
  align-items: center;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  background-image: ${({ $backgroundImg }) => `url(${$backgroundImg})`};
  background-repeat: no-repeat;
  background-size: 100% 100%;
  color: ${({ $color }) => $color};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  min-height: 60px;
  padding: 1rem;
`;
