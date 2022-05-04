import { devConfig } from './development';
import { Config } from './types';

export const ENV: 'development' | 'production' | 'test' = process.env.NODE_ENV ||  'development';

export const config: Config = (() => {
  if (ENV === 'production') {
    return devConfig;
  }
  if (ENV === 'test') {
    return devConfig;
  }

  return devConfig;
})();
