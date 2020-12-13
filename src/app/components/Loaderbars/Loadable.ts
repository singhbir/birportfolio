/**
*
* Asynchronously loads the component for Loaderbars
*
*/

import { lazyLoad } from 'utils/loadable';

export const Loaderbars = lazyLoad(() => import('./index'), module => module.Loaderbars);