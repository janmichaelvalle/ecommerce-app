/* GPT explanation
the asyncHandler function simplifies error handling for asynchronous route handlers by wrapping them in a middleware function. It ensures that any errors thrown or rejected by the asynchronous handler are properly caught and passed to Express's error handling middleware for centralized error handling. This helps to avoid repetitive error handling code in individual route handlers.
 */

/* Course explanation 
The function returns a Promise that resolves with the result of calling fn(req, res, next) (i.e., the result of the asynchronous operation). If the Promise is rejected (i.e., the asynchronous operation throws an error), the error is caught and passed to the next middleware function using catch(next). This allows the error to be handled by Express's error-handling middleware.
*/
const asyncHandler = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
}

export default asyncHandler;