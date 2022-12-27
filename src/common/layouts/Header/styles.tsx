import styled from '@emotion/styled';
import { Container, Title } from '@gamiui/standard';

import { lightTheme } from '../../../../styles/design-system/theme';

export const Header = styled(Container)`
  background-color: ${lightTheme.primary.white};
  max-height: 100px;
`;

export const TitleBrand = styled(Title)`
  color: ${lightTheme.primary.black};
`;

export const HeaderLeft = styled(Container)`
  gap: 1rem;
`;
