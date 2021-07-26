import { Logo } from '../../../theme/Logo';
import { MenuWrapper } from './styles';

const Menu = () => {
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide><Logo /></MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide>Centro</MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>Direita</MenuWrapper.RightSide>
    </MenuWrapper>
  );
};

export default Menu;