/**
*
* Asynchronously loads the component for Graph
*
*/

import { lazyLoad } from 'utils/loadable';

export const Graph = lazyLoad(() => import('./index'), module => module.Graph);