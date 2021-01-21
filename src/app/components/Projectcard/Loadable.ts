/**
*
* Asynchronously loads the component for Projectcard
*
*/

import { lazyLoad } from 'utils/loadable';

export const Projectcard = lazyLoad(() => import('./index'), module => module.Projectcard);