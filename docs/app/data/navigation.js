// function findChildren(collection, parent) {
// 	return collection.filter(item => {
// 		let url = item.url.slice(0, -1)
// 		return url.slice(0, url.lastIndexOf("/")) == parent.url.slice(0, -1)
// 	})
// }

export function create(collection) {
	let navigation = [{}]

	for (let item of collection) {
		let path = item.url.split("/").slice(1, -1)
		let target = navigation[0]
		while (path.length) {
			let key = path.shift()
			if (!Array.isArray(target.children)) {
				target.children = []
			}

			let next = target.children.find(n => n.key == key)
			if (!next) {
				next = {}
				target.children.push(next)
			}
			target = next
			target.key = key
		}
		target.title =
			item.data.navigation.title ||
			item.data.title ||
			target.key.replace(
				/\w\S*/g,
				t => t[0].toUpperCase() + t.slice(1).toLowerCase()
			)
		target.order = item.data.navigation.order || 0
		target.url = item.url
	}

	return navigation
}

export function html(navigation, pageURL, toHTML) {
	return (
		navigation
			.sort((a, b) => a.order - b.order)
			.reduce((html, item) => {
				let title = item.url
					? `<a ${item.url == pageURL ? 'aria-current="page"' : ""} href="${
							item.url
					  }">${item.title}</a>`
					: item.title ||
					  item.key.replace(
							/\w\S*/g,
							t => t[0].toUpperCase() + t.slice(1).toLowerCase()
					  )
				return (
					html +
					`<li>${title}${
						item.children?.length ? toHTML(item.children, pageURL, toHTML) : ""
					}</li>`
				)
			}, `<ol>`) + `</ol>`
	)
}
