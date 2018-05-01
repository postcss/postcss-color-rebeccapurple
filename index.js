/**
 * Module dependencies.
 */
const postcss = require("postcss")
const valueParser = require("postcss-value-parser")
const color = "#639"
const regexp = /(^|[^\w-])rebeccapurple([^\w-]|$)/

/**
 * PostCSS plugin to convert colors
 */
module.exports = postcss.plugin("postcss-color-rebeccapurple", () => (style) => {
  style.walkDecls((decl) => {
    const value = decl.value;

    if (value && regexp.test(value)) {
      decl.value = valueParser(value).walk((node) => {
        if (node.type === "word" && node.value === "rebeccapurple") {
          node.value = color
        }
      }).toString()
    }
  })
})
