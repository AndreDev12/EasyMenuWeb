import styled from '@emotion/styled';
import { Button, Card, Container, RichText } from '@gamiui/standard';

import { lightTheme } from '../../../../styles/design-system/theme';

export const Product = styled(Container)``;

export const ProductName = styled(RichText)`
  text-transform: uppercase;
`;

export const CardFooter = styled(Card.Footer)``;

export const ProductButton = styled(Button)`
  background-color: ${lightTheme.primary.first};
  height: auto;
  text-transform: uppercase;
  width: 100%;
`;

// export const TagContainer = styled.div`
//   margin-top: 1rem;
// `;