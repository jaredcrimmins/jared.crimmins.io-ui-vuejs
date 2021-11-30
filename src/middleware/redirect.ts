import {Middleware} from '@nuxt/types';

export default <Middleware>(({route, redirect}) => {
  if (route.path !== '/') redirect(307, '/');
});
