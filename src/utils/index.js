
const store = {
	set: (name, value) => {
		if (typeof window !== "undefined") {
			sessionStorage.setItem(name, value)
		}
	},

	get: (name) => {
		if (typeof window !== "undefined") {
			return sessionStorage.getItem(name)
		}
		return null
	},

	remove: (name) => {
		if (typeof window !== "undefined") {
			sessionStorage.removeItem(name)
		}
	},
}

export default store