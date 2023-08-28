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

## Changelog

See the [CHANGELOG.md](./CHANGELOG.md) file for a history of changes and updates.

## Usage

Wrap your application in the `ToastsProvider` component like so:
```
<ToastsProvider>
    <Example />
</ToastsProvider>
```

The `useToasts` hook will provide you with `createToast` and `removeToast` and you can use them as shown below:

```jsx
import { useToasts } from "hooks/useToasts";

export const Example = () => {
  const { createToast } = useToasts();

  return (
    <button
      onClick={() => createToast({
        type: "warning",
        title: "Achtung!",
        message:
          "There's something happening in your application that needs your attention ⚠️",
        duration: 3,
      })
      }
    >
      Toast Noty!
    </button>
  );
};
```

## Documentation

### `createToast`

Creates and displays a new toast with customizable properties.

| Parameter             | Description                                                                      | Default Value               |
| --------------------- | -------------------------------------------------------------------------------- | --------------------------- |
| `{ id, type, title, message, duration }` | An object containing the toast properties.                    |                             |
| `id`                  | _(Optional)_ Custom `'id'` to use for the notification.                          | `uuid`                      |
| `type`                | _(Optional)_ The type of the toast: `'warning'`, `'success'`, or `'danger'`.     | `'success'`                 |
| `title`               | _(Optional)_ The title of the toast.                                             | `type`                      |
| `message`             | The main message content of the toast.                                           |                             |
| `duration`            | _(Optional)_ The duration (in seconds) the toast should be displayed.            | `6`                         |

### `removeToast`

Removes a toast with the specified `id`.

| Parameter             | Description                                                                      |
| --------------------- | -------------------------------------------------------------------------------- |
| `id`                  | The unique identifier of the toast to be removed.                                |

## Demo

[Simple Preview](https://istevkovski.github.io/toast-noty/)

## Contribute

Help this package reach more people by giving it a ⭐.

## License

Licensed under MIT