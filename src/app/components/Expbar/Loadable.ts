/**
*
* Asynchronously loads the component for Expbar
*
*/

import { lazyLoad } from 'utils/loadable';

export const Expbar = lazyLoad(() => import('./index'), module => module.Expbar);