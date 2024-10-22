import Client from "openapi-fetch";
import { Middleware } from "openapi-fetch";

import type { paths as achievementPaths } from "./openapi/achievement.ts";
import type { paths as authPaths } from "./openapi/auth.ts";
import type { paths as marketingPaths } from "./openapi/marketing.ts";
import type { paths as printPaths } from "./openapi/print.ts";
import type { paths as servicesPaths } from "./openapi/services.ts";
import type { paths as socialPaths } from "./openapi/social.ts";
import type { paths as timetablePaths } from "./openapi/timetable.ts";
import type { paths as userdataPaths } from "./openapi/userdata.ts";
import type { paths as ratingPaths } from "./openapi/rating.js";


export type paths = (
    achievementPaths &
    authPaths &
    marketingPaths &
    printPaths &
    servicesPaths &
    socialPaths &
    timetablePaths &
    userdataPaths &
    ratingPaths
);

let currentClient: ReturnType<typeof Client<paths>> | undefined = undefined;
let currentToken: string | undefined = undefined;

const authMiddleware: Middleware = {
    async onRequest({ request, options }) {
        if (currentToken) {
            request.headers.set("Authorization", currentToken);
        }
        return request;
    },
};

export const createClient = (baseUrl: string): ReturnType<typeof Client<paths>> => {
    if (currentClient) {
        throw new Error("Client already initialized");
    }

    currentClient = Client<paths>({ baseUrl })
    if (currentToken) {
        currentClient.use(authMiddleware);
    }
    return currentClient;
}

export const createTestClient = (baseUrl: string): ReturnType<typeof Client<paths>> => {
    return Client<paths>({ baseUrl });
}

export const setupAuth = (newToken: string | undefined) => {
    currentToken = newToken;
    if (currentClient !== undefined) {
        if (!newToken) {
            currentClient.eject(authMiddleware)
        } else {
            currentClient.use(authMiddleware);
        }
    }
}
