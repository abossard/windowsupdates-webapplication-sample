import { LogLevel } from "@azure/msal-browser"; //MIT LICENSE < https://github.com/AzureAD/microsoft-authentication-library-for-js >

export const msalConfig = {
  auth: {
    clientId: process.env.CLIENT_ID,
    authority: "https://login.windows.net/" + process.env.TENANT_ID, //e.g. "https://login.windows.net/4d67e6d4-78f7-438b-8e40-7e408dcfa0ca"
    redirectUri: "http://localhost:3000/",
  },
  cache: {
    cacheLocation: "sessionStorage",
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
            return;
        }
      },
    },
  },
};

export const wufbRequest = {
  scopes: [
    "00000003-0000-0000-c000-000000000000/WindowsUpdates.ReadWrite.All",
    "User.Read",
  ],
};

export const userFeedbackRequest = {
  scopes: ["User.Read"],
};
