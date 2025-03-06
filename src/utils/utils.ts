
export function debounce<T extends (...args: any[]) => void>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>;
  return function(...args: Parameters<T>) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export const uniqueId = (prefix = ""): string => 
  prefix + Math.random().toString(36).slice(2, 10) + Date.now().toString(36);

export const isEmptyObject = (obj: Record<string, unknown>): boolean => 
  obj && Object.keys(obj).length === 0 && obj.constructor === Object;

export const deepClone = <T>(obj: T): T => {
  if (obj === null || typeof obj !== "object") return obj;
  if (obj instanceof Date) return new Date(obj) as T;
  if (Array.isArray(obj)) return obj.map((item) => deepClone(item)) as T;
  return Object.keys(obj).reduce((acc, key) => {
    acc[key as keyof T] = deepClone(obj[key as keyof T]);
    return acc;
  }, {} as T);
};

export const clone = <T>(obj: T): T => ({ ...obj });

export const throttle = <T extends (...args: any[]) => void>(fn: T, limit = 300) => {
  let lastCall = 0;
  return (...args: Parameters<T>) => {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn(...args);
    }
  };
};

export const isDate = (value: unknown): boolean => 
  Object.prototype.toString.call(value) === "[object Date]" && !isNaN(value as number);

export const matchString = (str: string, pattern: string): boolean => 
  new RegExp(pattern).test(str);

export const capitalize = (str: string): string => 
  str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

// Example Usage
// console.log(isEmptyObject({})); // true
// console.log(deepClone({ a: 1, b: { c: 2 } })); // { a: 1, b: { c: 2 } }
// console.log(clone({ x: 10 })); // { x: 10 }
// const debouncedFn = debounce(() => console.log("Debounced!"), 500);
// debouncedFn();
// const throttledFn = throttle(() => console.log("Throttled!"), 500);
// throttledFn();
// console.log(isDate(new Date())); // true
// console.log(matchString("hello world", "hello")); // true
// console.log(capitalize("hello")); // Hello
// console.log(uniqueId("user_")); // user_xxxxxxxx
// console.log(objectToQueryString({ name: "John", age: 30 })); // name=John&age=30