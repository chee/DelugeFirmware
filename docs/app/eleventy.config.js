module.exports =
	/**
	 * @param {import("@11ty/eleventy").UserConfig} config
	 */
	config => {
		config.setServerOptions({
			port: 1234,
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
