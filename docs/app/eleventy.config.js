import webc from "@11ty/eleventy-plugin-webc"
import md from "markdown-it"
import {EleventyHtmlBasePlugin as base} from "@11ty/eleventy"
import mdAnchor from "markdown-it-anchor"
import mdDeluge from "./markdown-it-deluge.js"
import mdContainer from "markdown-it-container"
import {EleventyRenderPlugin as render} from "@11ty/eleventy"
import bundler from "@11ty/eleventy-plugin-bundle"
import syntaxHighlighting from "@11ty/eleventy-plugin-syntaxhighlight"
import dirstats from "@11ty/eleventy-plugin-directory-output"
import nav from "@11ty/eleventy-navigation"

/**
 * @param {import("@chee/eleventy-stable").UserConfig} config
 */
export default config => {
	config.setServerOptions({
		port: 1234,
		watch: ["components/**/*.webc", "_site/**/*.css"],
	})
	config.setQuietMode(true)
	config.addPlugin(dirstats)
	config.addPlugin(render)
	config.addPlugin(nav)
	config.addPlugin(bundler, {
		hoistDuplicateBundlesFor: ["css", "js"],
	})
	config.addPlugin(syntaxHighlighting)
	let webcOptions = {
		components: [
			"components/**/*.webc",
			// todo
			"npm:@11ty/eleventy-img/*.webc",
		],
		scopedHelpers: ["css", "js", "html"],
		transformData: {},
		useTransform: true,
	}
	config.addPlugin(webc, webcOptions)

	config.addFilter("sortByOrder", function (list) {
		return list.sort((a, b) => a.order - b.order)
	})

	config.addFilter("toTitleCase", function (string) {
		return string.replace(
			/\w\S*/g,
			t => t[0].toUpperCase() + t.slice(1).toLowerCase()
		)
	})
	config.addPlugin(base)
	config.addFilter("attr", val => {
		return !(val == null || val === false || val == "false")
	})
	config.setLibrary(
		"md",
		md({
			html: true,
			breaks: false,
		})
			.use(mdAnchor)
			.use(mdDeluge)
			.use(mdContainer, "note")
			.use(mdContainer, "caution")
			.use(mdContainer, "idea")
	)
	config.addPassthroughCopy("fonts")
	config.addPassthroughCopy("images")
	config.addPassthroughCopy("css")
	return {
		dir: {
			input: "../manual",
			output: "_site",
			includes: "../app/includes",
			data: "../app/data",
		},
 		htmlTemplateEngine: "webc",
		markdownTemplateEngine: "liquid",
	}
}
