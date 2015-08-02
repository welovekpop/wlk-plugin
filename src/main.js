define(function (require, exports, module) {

  const Plugin = require('extplug/Plugin')

  const RoomPlugin = Plugin.extend({
    name: 'WE ❤ KPOP Room Plugin',
    description: 'Plugin for the WE ❤ KPOP Room!',

    enable() {
      // code to start your plugin
    },

    disable() {
      // code to undo what you did in enable()
    }
  })

  module.exports = RoomPlugin

})
