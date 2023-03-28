import axios from 'axios';
import { ILevel } from '../../types/game';

class GameService {
  async getLevels(): Promise<ILevel[]> {
    const response = await axios.get('https://60816d9073292b0017cdd833.mockapi.io/modes');
    return response.data;
  }
}
export default new GameService();
