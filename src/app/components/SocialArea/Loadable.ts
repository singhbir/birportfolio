/**
*
* Asynchronously loads the component for SocialArea
*
*/

import { lazyLoad } from 'utils/loadable';

export const SocialArea = lazyLoad(() => import('./index'), module => module.SocialArea);