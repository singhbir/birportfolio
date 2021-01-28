/**
*
* Asynchronously loads the component for Blogs
*
*/

import { lazyLoad } from 'utils/loadable';

export const Blogs = lazyLoad(() => import('./index'), module => module.Blogs);