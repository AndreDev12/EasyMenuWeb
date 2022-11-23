import { Icon, RichText } from '@gamiui/standard';

import { categories } from '../../mocks';
import * as S from './styles';

export const Categories = () => {

  // function handleClick(id){
  //   console.log(id);
  // }

  return (
    <S.Categories>
      {categories.map(({ text, icon, id }) => (
        <S.Category key={id} onClick={handleClick(id)}>
          <Icon name={icon} />
          <RichText text={text} />
        </S.Category>
      ))}
      {/* {categories.map(({ text, icon }, index: number) => (
        <S.Category key={index}>
          <Icon name={icon} />
          <RichText text={text} />
        </S.Category>
      ))} */}
    </S.Categories>
  );
};
