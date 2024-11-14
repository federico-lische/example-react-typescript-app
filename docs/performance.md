# 🚄 Performance

### Code Splitting

Code splitting involves splitting production JavaScript into smaller files to optimize application loading times. This technique enables the application to be downloaded in parts, fetching only the necessary code when required.

Ideally, code splitting should be implemented at the routes level, ensuring that only essential code is loaded initially, with additional parts fetched lazily as needed. It's important to avoid excessive code splitting, as this can lead to a performance decline due to the increased number of requests required to fetch all the code chunks. Strategic code splitting, focusing on critical parts of the application, helps balance performance optimization with efficient resource loading.

### Component and state optimizations

- Do not put everything in a single state. That might trigger unnecessary re-renders. Instead split the global state into multiple states according to where they are being used.

- Keep the state as close as possible to where it is being used. This will prevent re-rendering components that do not depend on the updated state.

- If you have a piece of state that is initialized by an expensive computation, use the state initializer function instead of executing it directly because the expensive function will be run only once as it is supposed to. e.g:

```javascript
// instead of this which would be executed on every re-render:
const [state, setState] = React.useState(myExpensiveFn());

// prefer this which is executed only once:
const [state, setState] = React.useState(() => myExpensiveFn());
```

### Image optimizations

Consider lazy loading images that are not in the viewport.

Use modern image formats such as WEBP for faster image loading.

Use `srcset` to load the most optimal image for the clients screen size.

### Web vitals

Since Google started taking web vitals in account when indexing websites, you should keep an eye on web vitals scores from [Lighthouse](https://web.dev/measure/) and [Pagespeed Insights](https://pagespeed.web.dev/).

### Data prefetching

It is possible to prefetch data before the user navigates to a page. This can be done by using the `queryClient.prefetchQuery` method from the `@tanstack/react-query` library. This method allows you to prefetch data for a specific query. This can be useful when you know that the user will navigate to a specific page and you want to prefetch the data before the user navigates to the page. This can help to improve the performance of the application by reducing the time it takes to load the data when the user navigates to the page.
