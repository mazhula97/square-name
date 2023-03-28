import { LaunchBtn, PageLayout } from './styled';
import { ROUTE } from '../../routes/constants';

const HomePage = () => {
  return (
    <PageLayout>
      <h1>Do you want to play?</h1>
      <LaunchBtn to={ROUTE.GAME}>LETS PLAY</LaunchBtn>
    </PageLayout>
  );
};
export default HomePage;
