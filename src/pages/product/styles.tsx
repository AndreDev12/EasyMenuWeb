import styled from '@emotion/styled';
import { Container, Icon, Title, RichText } from '@gamiui/standard';

import { lightTheme } from '../../../styles/design-system/theme';

export const ProductDetails = styled(Container)`
    display: flex;
    justify-content: space-between;
    margin: auto;
    padding: 2rem;
    width: 90%;
`;

export const BackIcon = styled(Icon)`
    display: inline;
`;

export const ProductTitle = styled(Title)`
    color: ${lightTheme.semantic.danger};
    line-height: 1.4;
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
    background-color: ${lightTheme.primary.white};
    border: 1px solid ${lightTheme.neutral[400]};
    border-radius: 20px;
    padding: 10px 20px;
    width: 100%;
`;

export const SaucesTitle = styled(Title)`
    font-size: 19px;
    margin-bottom: 1rem;
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

// export const DetailsProductButton = styled(Button)`
//     text-transform: uppercase;
// `;