var JavaScriptObfuscator = require("webpack-obfuscator");

module.exports = {
  module: {},
  plugins: [
    new JavaScriptObfuscator(
        {
            "compact": true,
            
            "identifierNamesGenerator": "mangled",
            "transformObjectKeys": true,
            "unicodeEscapeSequence": true
        },
      ["vendor.js"]
    ),
  ],
};