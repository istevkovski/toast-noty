# Toast Noty 🚀

![npm](https://img.shields.io/npm/dm/toast-noty.svg?label=%E2%8F%ACdownloads&style=for-the-badge)
![npm](https://img.shields.io/npm/v/toast-noty.svg?style=for-the-badge)
![NPM](https://img.shields.io/npm/l/toast-noty.svg?label=%F0%9F%93%9Clicense&style=for-the-badge)
![Coveralls github](https://img.shields.io/coveralls/github/istevkovski/toast-noty.svg?label=%E2%9B%B1coverage&style=for-the-badge)

🎉 Toast Noty - The next thing that pops on your screen! ✨

## Installation

```
$ npm install --save toast-noty
```

## Usage

```jsx
  import { useToasts } from 'hooks/useToasts';

	export const Example = () => {
		const { createToast } = useToasts();

		return (
			<button
				onClick={() =>
					createToast({
						type: "warning",
						title: "Achtung!",
						message: "There's something happening in your application that needs your attention ⚠️",
						duration: 3,
					})
				}
			>
				Toast Noty!
			</button>
		);
	};
```

## Demo

## Documentation

## Contribute

Help this package reach more people by giving it a ⭐.

### Code Contributors

<a href="https://github.com/istevkovski/toast-noty/graphs/contributors"><img src="https://opencollective.com/toast-noty/contributors.svg?width=890&button=false" /></a>

## License

Licensed under MIT