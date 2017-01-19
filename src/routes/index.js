// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout/containers/CoreLayoutContainer'
import Songs from './Songs'
import CounterRoute from './Counter'

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : { onEnter: (nextState, replace) => replace('/songs') },
  childRoutes : [
    CounterRoute(store),
    Songs(store)
  ]
})

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }
*/

export default createRoutes
