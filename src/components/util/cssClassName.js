/**
 * @summary A utility function to create a CSS class name string from multiple parts.
 *
 * The basic use is to take one or more objects and concatenate the names of all the (enumerable own) properties of
 * the object that have a "truthy" value.
 *
 *  It is important to note that pieces are concatenated by traversing the parameters list in order (i.e. left to right),
 * that arrays are traversed in order, and that Object properties are traversed in the order returned by the `Object.keys()` method.
 * In particular, this means that object properties are traversed in the order that they were added to the object,
 * (**with the exception of properties with names that are numbers which always appear first**, i.e.,
 *  `cssClassName({a: true, 2: true, b: true, 1: true})' returns `"12ab"` (*not* `"a2b1")).
 *
 *
 * @param {...(string | number | Array | Object)} args - the pieces to concatenate. Strings and numbers are simply concatenated.
 *          Arrays are recursed into. Objects have their keys traveresed (using `Object.keys`) and for each "truthy" value the associated
 *          key gets concatenated. Other types (e.g. Booleans) are ignored
 *
 *           Note that arrays as values of object keys are not recursed into, and simply serve to decide
 *          whether the object key is "truthy" or "falsy".
 *
 * @example <caption>returns `undefined` (*not* the empty string)</caption>
 * cssClassName({hello: false, big: false, world: false})
 *
 * @return {string} the concatenation of all the pieces in `args` that were not under a "falsy" key,
 *      or `undefined` if this concatenation is empty (or contains only white spaces).
 *
 * @example <caption>returns `"helloworld"`</caption>
 * cssClassName({hello: true, big: false, world: true})
 *
 * @example <caption>returns `"helloworld"`</caption>
 *   cssClassName({hello: true}, 'world')
 *
 * @example <caption>returns `"a bdef"`</caption>
 *  cssClassName(['a    ', {b: true, c: false }, {d: true, e: true}, 'f']))
 *
 * @example <caption>returns `"a"` (since the value `['b', 'c', {d: true}]` is "truthy"</caption>
 *   cssClassName({ a: ['b', 'c', {d: true}])
 *
 */
 export function cssClassName(...args) {
    let classNameParts = []; // the pieces are accumulatred here
  
    for (const arg of args) {
      const argType = typeof arg;
      if (argType === "string" || argType === "number") {
        classNameParts.push(arg); // strings and numbers are simply added
      } else if (Array.isArray(arg)) {
        classNameParts.push(cssClassName.apply(null, arg)); // recurse into arrays
      } else if (argType === "object") {
        // note that we do not use a for-in loop, since the order of traversal is not guaranteed by it
        // (we use Object.keys instead of Object.entries due to better performance)
        const argKeys = Object.keys(arg);
        for (let i = 0; i < argKeys.length; i++) {
          if (arg[argKeys[i]]) {
            classNameParts.push(argKeys[i]);
          }
        }
      }
    }
  
    let result = classNameParts
      .join("")
      .replace(/ +(?= )/g, "")
      .trim(); // join all parts and replace multiple spaces with a single space
    // returned undefined instead of an empty string so that when assigning the return value to the className prop of a React element
    // React will supress this prop (instead of resulting with an HTML element with class="")
    return result.length > 0 ? result : undefined;
  }
  