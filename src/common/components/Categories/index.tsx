import { Icon, RichText } from '@gamiui/standard';

import { categories } from '../../mocks';
import * as S from './styles';

export const Categories = () => {

  // function handleClick(id){
  //   console.log(id);
  // }

  return (
    <S.Categories>
      {categories.map(({ id, text, icon }) => (
        <S.Category key={id} onClick={() => setId(id)}>
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
