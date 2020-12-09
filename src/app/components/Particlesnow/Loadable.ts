/**
*
* Asynchronously loads the component for Particlesnow
*
*/

import { lazyLoad } from 'utils/loadable';

export const Particlesnow = lazyLoad(() => import('./index'), module => module.Particlesnow);