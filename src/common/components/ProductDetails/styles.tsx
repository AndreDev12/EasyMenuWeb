import styled from '@emotion/styled';
import { Container, Icon, Title } from '@gamiui/standard';

import { lightTheme } from '../../../../styles/design-system/theme';

export const ProductDetails = styled(Container)`
    display: flex;
    height: 100%;
    justify-content: space-between;
    margin: auto;
    padding: 2rem;
    width: 90%;
`;

export const ContentContainer = styled(Container)`
    width: 50%;
`;

export const BackIcon = styled(Icon)`
    color: ${lightTheme.neutral[300]};
    display: inline;
`;

export const ProductTitle = styled(Title)`
    color: ${lightTheme.semantic.danger};
    line-height: 1.4;
    margin-block: 0 1.7rem;
    text-transform: capitalize;
`;

export const Selections = styled(Container)`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
`;

export const SaucesArea = styled(Container)`
    background-color: ${lightTheme.primary.white};
    border: 1px solid ${lightTheme.neutral[400]};
    border-radius: 20px;
    padding: 10px 20px;
    width: 100%;
`;

export const SaucesTitle = styled(Title)`
    font-size: 19px;
`;

export const Label = styled.label`
    margin-right: 2rem;
`;

export const DishesArea = styled(Container)`
    background-color: ${lightTheme.primary.white};
    border: 1px solid ${lightTheme.neutral[400]};
    border-radius: 20px; 
    padding: 10px 20px;
    width: 100%;
`;

export const DishesTitle = styled(Title)`
    font-size: 19px;
`;

export const PriceImageContainer = styled(Container)`
    flex-direction: column;
    row-gap: 2rem;
    width: 50%;
`;

export const ProductPriceDetails = styled.label`
    font-weight: bold;
    text-align: center;
`;