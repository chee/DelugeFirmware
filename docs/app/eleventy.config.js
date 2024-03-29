import webc from "@11ty/eleventy-plugin-webc"
import navigation from "@11ty/eleventy-navigation"

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
	// config.addFilter("addNavigationAria", addNavigationAria)
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
