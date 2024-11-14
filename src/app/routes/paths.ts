/**
 * An object containing the paths and helper functions for generating URLs
 * for different routes in the application.
 */
export const paths = {
  auth: {
    /**
     * Paths and helper functions related to authentication.
     */
    register: {
      /**
       * The path for the registration page.
       */
      path: '/auth/register',
      /**
       * Generates the URL for the registration page with an optional redirect parameter.
       * @param redirectTo - The URL to redirect to after registration.
       * @returns The URL for the registration page.
       */
      getHref: (redirectTo?: string | null | undefined) =>
        `/auth/register${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ''}`,
    },
    login: {
      /**
       * The path for the login page.
       */
      path: '/auth/login',
      /**
       * Generates the URL for the login page with an optional redirect parameter.
       * @param redirectTo - The URL to redirect to after login.
       * @returns The URL for the login page.
       */
      getHref: (redirectTo?: string | null | undefined) =>
        `/auth/login${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ''}`,
    },
  },

  app: {
    /**
     * Paths and helper functions related to the main application.
     */
    home: {
      /**
       * The path for the home page.
       */
      path: '/',
      /**
       * Generates the URL for the home page.
       * @returns The URL for the home page.
       */
      getHref: () => '/',
    },
    users: {
      /**
       * The path for the users page.
       */
      path: '/users',
      /**
       * Generates the URL for the users page.
       * @returns The URL for the users page.
       */
      getHref: () => '/users',
    },
    userAdd: { 
      /**
       * The path for the add user page.
       */
      path: '/users/add', 
      /**
       * Generates the URL for the add user page.
       * @returns The URL for the add user page.
       */
      getHref: () => '/users/add', 
    },
    userEdit: {
      /**
       * The path for the edit user page.
       */
      path: '/users/:userId',
      /**
       * Generates the URL for the edit user page with the specified user ID.
       * @param id - The ID of the user to edit.
       * @returns The URL for the edit user page.
       */
      getHref: (id: string) => `/users/${id}`,
    },
  },
} as const;