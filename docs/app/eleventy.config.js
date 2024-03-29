import webc from "@11ty/eleventy-plugin-webc"
import navigation from "@11ty/eleventy-navigation"
import md from "markdown-it"
import mdAnchor from "markdown-it-anchor"

/**
 * @param {import("@11ty/eleventy").UserConfig} config
 */
export default config => {
	config.setServerOptions({
		port: 1234,
		watch: ["components/**/*.webc", "_site/**/*.css"],
	})
	config.addPlugin(webc, {
		components: [
			"components/**/*.webc",
			// todo
			"npm:@11ty/eleventy-img/*.webc",
		],
	})
	config.addPlugin(navigation)
	config.addFilter("attr", val => {
		return !(val == null || val === false || val == "false")
	})
	config.setLibrary("md", md({html: true}).use(mdAnchor))
	return {
		dir: {
			input: "../manual/",
			output: "_site",
			includes: "../app/includes",
			data: "../app/data",
		},
		htmlTemplateEngine: "webc",
		markdownTemplateEngine: "webc",
	}
}
