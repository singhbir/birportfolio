/**
*
* Asynchronously loads the component for BlogCard
*
*/

import { lazyLoad } from 'utils/loadable';

export const BlogCard = lazyLoad(() => import('./index'), module => module.BlogCard);