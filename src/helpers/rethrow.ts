/**
 * Just throw an error again.
 *
 * Can be used in promise-based error handling:
 *
 * @example
 * ```
 *  const result = getPromise().catch(rethrow);
 * ```
 */
export const rethrow = (err: Error): never => {
  throw err;
};
