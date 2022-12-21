import styled from '@emotion/styled';
import { Container, Icon, Title, RichText, Button } from '@gamiui/standard';

export const ProductDetails = styled(Container)`
    background: rgba(255, 255, 255, 0.35);
    box-shadow: 0 8px 32px 0 rgb(31 38 135 / 7%);
    display: flex;
    justify-content: space-between;
    padding: 2rem;
`;

export const BackIcon = styled(Icon)`
    display: inline;
`;

export const ProductTitle = styled(Title)`
    margin-block: 0 1.7rem;
`;

export const ProductDescription = styled(RichText)`
    margin-block: 0 1.7rem;
`;

export const Selections = styled(Container)`
    display: flex;
    column-gap: 4rem;
`;

export const SaucesArea = styled(Container)`
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 20px;
    padding: 10px 20px;
    width: 100%;
`;

export const SaucesTitle = styled(Title)`
    margin-bottom: 1rem;
`;

export const DishesArea = styled(Container)`
    background-color: #fff;
    border: 1px solid #ccc;
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