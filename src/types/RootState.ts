import { AboutmeState } from 'app/containers/Aboutme/types';
import { ResumeState } from 'app/containers/Resume/types';

import { PortfolioState } from 'app/containers/Portfolio/types';
import { ContactState } from 'app/containers/Contact/types';
import { BlogsState } from 'app/containers/Blogs/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  aboutme?: AboutmeState;
  resume?: ResumeState;
  portfolio?: PortfolioState;
  contact?: ContactState;
  blogs?: BlogsState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
