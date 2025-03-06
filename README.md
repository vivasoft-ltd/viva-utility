# Utility Functions Library

A collection of lightweight and versatile utility functions for JavaScript/TypeScript projects. These functions help with common tasks such as debouncing, throttling, cloning objects, string manipulation, date validation, and more.

## Features

- **Debounce:** Limit the rate at which a function is executed.
- **Throttle:** Ensure a function is only called once per specified time interval.
- **Unique ID Generation:** Create unique IDs with an optional prefix.
- **Object Utilities:** Check if an object is empty, perform deep clones, and create shallow copies.
- **Date Validation:** Check whether a value is a valid Date object.
- **String Utilities:** Match strings with regular expressions and capitalize strings.

## Installation

Install the package via npm:

```bash
npm install viva-utility
yarn add viva-utility
```

## API Reference

    VKDebounce<T>(func: T, wait: number): (...args: Parameters<T>) => void
    Creates a debounced version of a function that delays its execution until after a specified wait time in milliseconds.

    VKThrottle<T>(fn: T, limit?: number): (...args: Parameters<T>) => void
    Creates a throttled function that invokes the provided function at most once every limit milliseconds.

    VKUniqueId(prefix?: string): string
    Generates a unique identifier string with an optional prefix.

    VKIsEmptyObject(obj: Record<string, unknown>): boolean
    Checks whether an object is empty (i.e., it has no own enumerable properties).

    VKDeepClone<T>(obj: T): T
    Performs a deep clone of an object, including nested objects and arrays. Handles Date objects as well.

    VKClone<T>(obj: T): T
    Creates a shallow clone of an object using the spread operator.

    VKIsDate(value: unknown): boolean
    Returns true if the given value is a valid Date object.

    VKMatchString(str: string, pattern: string): boolean
    Tests whether the given string matches a specified regular expression pattern.

    VKCapitalize(str: string): string
    Capitalizes the first letter of the given string.

## Contributing

    Contributions are welcome! If you have ideas for new features, bug fixes, or improvements, please open an issue or submit a pull request. Check out our issues page for more details.
