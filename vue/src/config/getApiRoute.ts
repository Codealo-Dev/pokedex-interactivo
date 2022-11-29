// @ts-nocheck
import { compile } from 'path-to-regexp';
import qs from 'qs';

import { apiURL } from '@/config';

export function getApiRoute(url, { params, query } = {}, whichApi = 'base') {
  const path = compile(url)(params, { encode: (compiled) => compiled });
  let routeQuery = qs.stringify(query, { encode: false, arrayFormat: 'bracket' });
  routeQuery = routeQuery ? `?${routeQuery}` : '';

  return encodeURI(`${apiURL[whichApi]}${path}${routeQuery}`);
}
