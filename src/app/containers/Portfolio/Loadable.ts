/**
*
* Asynchronously loads the component for Portfolio
*
*/

import { lazyLoad } from 'utils/loadable';

export const Portfolio = lazyLoad(() => import('./index'), module => module.Portfolio);