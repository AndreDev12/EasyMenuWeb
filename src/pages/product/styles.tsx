import styled from '@emotion/styled';
import { Container, Icon, Title, RichText, Button } from '@gamiui/standard';

import { lightTheme } from '../../../styles/design-system/theme';

export const ProductDetails = styled(Container)`
    background-color: ${lightTheme.primary.white};
    box-shadow: 0px 2px 8px 0px rgb(0 0 0 / 5%);
    display: flex;
    justify-content: space-between;
    padding: 2rem;
`;

export const BackIcon = styled(Icon)`
    display: inline;
`;

export const ProductTitle = styled(Title)`
    margin-block: 0 1.7rem;
    text-transform: capitalize;
`;

export const ProductDescription = styled(RichText)`
    margin-block: 0 1.7rem;
`;

export const Selections = styled(Container)`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
`;

export const SaucesArea = styled(Container)`
    border: 1px solid ${lightTheme.neutral[400]};
    border-radius: 20px;
    padding: 10px 20px;
    width: 100%;
`;

export const SaucesTitle = styled(Title)`
    margin-bottom: 1rem;
`;

export const DishesArea = styled(Container)`
    border: 1px solid ${lightTheme.neutral[400]};
    border-radius: 20px; 
    padding: 10px 20px;
    width: 100%;
`;

export const DishesTitle = styled(Title)`
    margin-bottom: 1rem;
`;

export const PriceImageContainer = styled(Container)`
    flex-direction: column;
    row-gap: 2rem;
`;

export const ProductPriceDetails = styled.label`
    font-weight: bold;
    text-align: center;
`;

export const DetailsProductButton = styled(Button)`
    text-transform: uppercase;
`;