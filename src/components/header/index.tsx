import { Link } from 'react-router-dom';

import { ROUTE } from '../../routes/constants';
import { HeaderWrapper } from './styled';

const Header = () => (
  <HeaderWrapper>
    <Link to={ROUTE.HOME}>SQUARE GAME</Link>
  </HeaderWrapper>
);
export default Header;
