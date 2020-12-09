/**
*
* Asynchronously loads the component for Aboutme
*
*/

import { lazyLoad } from 'utils/loadable';

export const Aboutme = lazyLoad(() => import('./index'), module => module.Aboutme);