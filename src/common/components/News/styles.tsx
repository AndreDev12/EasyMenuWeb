import styled from '@emotion/styled';

// export const News = styled(Container)<{
//   $backgroundColor?: string;
//   $backgroundImg?: string;
//   $color?: string;
// }>`
//   align-items: center;
//   background-color: ${({ $backgroundColor }) => $backgroundColor};
//   background-image: ${({ $backgroundImg }) => `url(${$backgroundImg})`};
//   background-repeat: no-repeat;
//   background-size: 100% 100%;
//   color: ${({ $color }) => $color};
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
//   justify-content: center;
//   min-height: 60px;
//   padding: 1rem;
// `;

export const News = styled.div<{
  $backgroundColor?: string;
  $backgroundImg?: string;
  $color?: string;
}>`
  align-items: center;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  /* background-image: ${({ $backgroundImg }) => `url(${$backgroundImg})`}; */
  background-image: '';
  background-repeat: no-repeat;
  background-size: 100% 100%;
  color: ${({ $color }) => $color};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  min-height: 60px;
  padding: 1rem;
  width: 100%;
  /* width: 50vw; */
  /* width: 100%; */

  /* background: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  color: #fff;
  font-weight: 500;
  height: 300px;
  max-height: 100vh; */
`;
