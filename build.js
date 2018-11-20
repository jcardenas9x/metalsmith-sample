'use strict';

const Metalsmith = require('metalsmith');
const layouts = require('metalsmith-layouts');
const markdown = require('metalsmith-markdown');
const assets = require('metalsmith-assets-improved');
const colls = require('metalsmith-collections');
const autotoc = require('metalsmith-autotoc');
const moveUp = require('metalsmith-move-up');
const cleanCSS = require('metalsmith-clean-css');
const paths = require('metalsmith-paths');
const metallic = require('metalsmith-metallic');
const permalinks = require('metalsmith-permalinks');
const serve = require('metalsmith-serve');

build(function () {
    console.log('Completed build process');
})

function build (callback) {

  Metalsmith(__dirname)
    .concurrency(100)
    .source('./src')
    .destination('./build')
    .clean(true)
    .use(cleanCSS({
      files: '**/*.css'
    }))
    .use(metallic())
    .use(markdown({
      gfm: true,
      tables: true
    }))
    .use(autotoc({
      selector: "h2, h3"
    }))
    .use(moveUp(['content/**/*']))
    .use(paths())
    .use(colls({
      "Readme": {"sortBy":"order"},
      "Transaction Examples":{"sortBy":"order"},
      "Browsers": {"sortBy": "order"},
      "API": {
        "pattern": 'api.*md',
        "sortBy": "order"
      },
      "API Interfaces": {
        "pattern": '_eosjs_api_interfaces_.*md',
        "sortBy": "order"
      },
      "JS-Sig": {
        "pattern": 'js_sig.*md',
        "sortBy": "order"
      },
      "JSON-RPC": {
        "pattern": 'json_rpc.*md',
        "sortBy": "order"
      },
      "Numeric": {
        "pattern": 'numeric.*md',
        "sortBy": "order"
      },
      "RPC-Error": {
        "pattern": 'rpc_error.*md',
        "sortBy": "order"
      },
      "RPC-Interfaces": {
        "pattern": '_eosjs_rpc_interfaces_.*md',
        "sortBy": "order"
      },
      "Serialize": {
        "pattern": 'serialize.*md',
        "sortBy": "order"
      }
    }))
    .use(layouts('handlebars'))
    .use(assets('./assets'))
    .use(serve({
      verbose: true,
      redirects: {
        '/' : '/readme.html'
      }
    }))
    .build(function (err) {
      var msg = err ? err : 'Build finished';
      console.log(msg);
      callback();
    });

}
