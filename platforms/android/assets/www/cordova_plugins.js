cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/nl.x-services.plugins.googleplus/www/GooglePlus.js",
        "id": "nl.x-services.plugins.googleplus.GooglePlus",
        "clobbers": [
            "window.plugins.googleplus"
        ]
    },
    {
        "file": "plugins/com.cabot.plugins.googleplus/www/plugins/googleConnectPlugin.js",
        "id": "com.cabot.plugins.googleplus.GoogleConnectPlugin",
        "clobbers": [
            "navigator.googleConnectPlugin"
        ]
    },
    {
        "file": "plugins/cordova-plugin-twitter/www/TwitterPlugin.js",
        "id": "cordova-plugin-twitter.TwitterPlugin",
        "clobbers": [
            "Twitter"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.0.0",
    "nl.x-services.plugins.googleplus": "1.1.2",
    "com.cabot.plugins.googleplus": "0.0.1",
    "cordova-plugin-twitter": "0.6.0",
    "com.google.playservices": "21.0.1"
}
// BOTTOM OF METADATA
});