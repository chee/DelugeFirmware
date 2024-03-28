let webc = require("@11ty/eleventy-plugin-webc")
let navigation = require("@11ty/eleventy-navigation")

let sortByOrder = (a, b) => a.data.order - b.data.order

module.exports =
	/**
	 * @param {import("@11ty/eleventy").UserConfig} config
	 */
	config => {
		config.setServerOptions({
			port: 1234,
		})
		config.addPlugin(webc, {
			components: [
				"components/**/*.webc",
				// todo
				"npm:@11ty/eleventy-img/*.webc",
			],
		})
		config.addPlugin(navigation)
		config.addCollection("views", collection => {
			return collection
				.getFilteredByGlob("../manual/views/*.md")
				.sort(sortByOrder)
		})
		config.addCollection("clipViews", collection => {
			return collection
				.getFilteredByGlob("../manual/views/clips/*.md")
				.sort(sortByOrder)
		})

		return {
			dir: {
				input: "../manual/",
				output: "_site",
				includes: "../app/includes",
			},
			htmlTemplateEngine: "webc",
			markdownTemplateEngine: "webc",
		}
	}
