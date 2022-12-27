import styled from '@emotion/styled';
import { Container, Title } from '@gamiui/standard';

import { lightTheme } from '../../../../styles/design-system/theme';

export const Footer = styled(Container)`
    background-color: ${lightTheme.primary.first};
    color: ${lightTheme.primary.white};
    padding: 1rem;
`;

export const FooterSection = styled(Container)``;

export const FooterText = styled(Container)`
    background-color: purple;
    padding: 3rem 1.5rem;
`;

export const LogoFooter = styled(Container)``;

export const BrandTitle = styled(Container)`
    color: ${lightTheme.primary.black};
`;

export const FooterMenu = styled(Container)`
    background-color: gold;
    flex-direction: column;
    padding: 3rem 1.5rem;
    row-gap: 1.5rem;
`;

export const Information = styled(Title)`
    text-transform: uppercase;
    width: 100%;
`;

export const LinkContainer = styled(Container)`
    flex-direction: column;
    font-size: 14px;
    row-gap: 0.5rem;
    width: 100%;
`;

export const Legal = styled(Title)`
    text-transform: uppercase;
`;

export const SocialBlock = styled(Container)`
    background-color: lightblue;
    flex-direction: column;
    padding: 3rem 1.5rem;
    row-gap: 1.5rem;
`;

export const SocialFollow = styled(Title)`
    text-transform: uppercase;
`;

export const SocialMedia = styled(Container)`
    /* flex-direction: column; */
    column-gap: 1rem;
`;