/**
*
* Asynchronously loads the component for CardLayout
*
*/

import { lazyLoad } from 'utils/loadable';

export const CardLayout = lazyLoad(() => import('./index'), module => module.CardLayout);