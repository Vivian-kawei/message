import Vue from 'vue'
import VueResource from 'vue-resource'
import BScroll from 'better-scroll'
import config from './config'
import * as util from './util'

Vue.use(VueResource)

let app = {
  util,
  config,
  scroll (dom, options, events) {
    Vue.$nextTick(function () {
      let scroll = new BScroll(dom, options)
      if (events) {
        for (let key in events) {
          scroll.on(key, events[key])
        }
      }
    })
  },
  get (url, params, successCallback, errorCallback) {
    Vue.http.get(url, {
      params,
      responseType: 'json'
    }).then(successCallback, errorCallback)
  },
  post (url, params, successCallback, errorCallback) {
    Vue.http.post(url, params, {
      responseType: 'json'
    }).then(successCallback, errorCallback)
  }
}

window.app = app
