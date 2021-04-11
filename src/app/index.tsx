/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { GlobalStyle } from 'styles/global-styles';
import { HomePage } from './containers/HomePage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { Aboutme } from './containers/Aboutme/Loadable';
import { Resume } from './containers/Resume/Loadable';
import { Portfolio } from './containers/Portfolio/Loadable';
import { Contact } from './containers/Contact/Loadable';
import { Blogs } from './containers/Blogs/Loadable';

export function App() {
  const { i18n } = useTranslation();
  const location = useLocation();
  return (
    <>
      <Helmet
        titleTemplate="%s - singhbir"
        defaultTitle="singhbir resume"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={Aboutme} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/blogs" component={Blogs} />
        </Switch>
      </AnimatePresence>
      <GlobalStyle />
    </>
  );
}
