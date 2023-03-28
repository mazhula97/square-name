import { ILevel } from '../../../../types/game';

const getDefaultLevel = (levels: ILevel[], size: number | null | undefined): ILevel | undefined => {
  return levels.find((level) => level.field === size);
};

export { getDefaultLevel };
