const Observable = require('rxjs').Observable
const reduceObservable = require('./util/reduceObservable')
const createApp = require('./app/createApp')
const createBundles = require('./bundle/createBundles')
const createStaticHtml = require('./static/createStaticHtml')
const createPublic = require('./public/createPublic')
const createRss = require('./seo/createRss')
const createSitemap = require('./seo/createSitemap')
const createPwaFiles = require('./pwa/createPwaFiles')

const generate = (paths) => {
  const app$ = createApp(paths)().share()
  const stats$ = createBundles(paths)(app$)

  return stats$
    .withLatestFrom(app$, (stats, app) => ({stats, app}))
    .flatMap(({stats, app}) => {
      return reduceObservable(
        (acc, result) => {},
        null,
        Observable.merge(
          createStaticHtml(paths)(Observable.of(app), Observable.of(stats)),
          createPublic(paths)(),
          createRss(paths)(),
          createSitemap(paths)(),
          createPwaFiles(paths)(Observable.of(stats))
        )
      )
    })
}

module.exports = generate
