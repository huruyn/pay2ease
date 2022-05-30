/* eslint no-console: 0 */

import { Configuration, LogLevel } from '@azure/msal-browser';

/**
 * Enter here the user flows and custom policies for your B2C application
 * To learn more about user flows, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
 * To learn more about custom policies, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
 */
export const b2cPolicies = {
  names: {
    signIn: 'B2C_1_SignIn',
    signUpBusiness: 'B2C_1_SignUp_Business',
    signUpPersonal: 'B2C_1_SignUp_Personal',
  },
  authorities: {
    signIn: {
      authority: 'https://login-dev.zippy.cash/d0c1aedf-ff82-46fd-890a-3100c16e14ab/B2C_1_SignIn',
    },
    signUpBusiness: {
      authority: 'https://login-dev.zippy.cash/d0c1aedf-ff82-46fd-890a-3100c16e14ab/B2C_1_SignUp_Business',
    },
    signUpPersonal: {
      authority: 'https://login-dev.zippy.cash/d0c1aedf-ff82-46fd-890a-3100c16e14ab/B2C_1_SignUp_Personal',
    },
  },
  authorityDomain: 'login-dev.zippy.cash',
};

/**
 * Configuration object to be passed to MSAL instance on creation.
 * For a full list of MSAL.js configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md
 */
export const msalConfig: Configuration = {
  auth: {
    // This is the ONLY mandatory field that you need to supply.
    clientId: '682965b8-8f23-4561-a62c-c82a40aa511d',
    // Use a sign-up/sign-in user-flow as a default authority.
    authority: b2cPolicies.authorities.signIn.authority,
    // Mark your B2C tenant's domain as trusted.
    knownAuthorities: [b2cPolicies.authorityDomain],
    // Points to window.location.origin. You must register this URI on Azure Portal/App
    // Registration.
    redirectUri: '/',
    // Indicates the page to navigate after logout.
    postLogoutRedirectUri: '/',
    // If 'true', will navigate back to the original request location before processing the auth
    // code response.
    navigateToLoginRequestUrl: false,
  },
  cache: {
    // Configures cache location. 'sessionStorage' is more secure, but 'localStorage' gives you SSO
    // between tabs.
    cacheLocation: 'sessionStorage',
    // Set this to 'true' if you are having issues on IE11 or Edge
    storeAuthStateInCookie: false,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            break;
          case LogLevel.Info:
            console.info(message);
            break;
          case LogLevel.Verbose:
            console.debug(message);
            break;
          case LogLevel.Warning:
            console.warn(message);
            break;
          default:
            break;
        }
      },
    },
  },
};

/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 * For more information about OIDC scopes, visit:
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 */
export const loginRequest = {
  scopes: [],
};
