import Client from "openapi-fetch";
import { Middleware } from "openapi-fetch";

import type { paths as achievementPaths } from "./openapi/achievement.ts";
import type { paths as authPaths } from "./openapi/auth.ts";
import type { paths as marketingPaths } from "./openapi/marketing.ts";
import type { paths as pingerPaths } from "./openapi/pinger.ts";
import type { paths as printPaths } from "./openapi/print.ts";
import type { paths as servicesPaths } from "./openapi/services.ts";
import type { paths as socialPaths } from "./openapi/social.ts";
import type { paths as timetablePaths } from "./openapi/timetable.ts";
import type { paths as userdataPaths } from "./openapi/userdata.ts";


let currentClient: ReturnType<typeof Client> | undefined = undefined;
let currentToken: string | undefined = undefined;

export type paths = (
    achievementPaths &
    authPaths &
    marketingPaths &
    pingerPaths &
    printPaths &
    servicesPaths &
    socialPaths &
    timetablePaths &
    userdataPaths
);

const authMiddleware: Middleware = {
    async onRequest({ request, options }) {
        request.headers.set("Authorization", currentToken);
        return request;
    },
};

export const createClient = (baseUrl: string) => {
    if (currentClient) {
        throw new Error("Client already initialized");
    }

    currentClient = Client<paths>({ baseUrl })
    if (currentToken !== null) {
        currentClient.use(authMiddleware);
    }
    return currentClient;
}

export const setupAuth = (newToken: string | null) => {
    currentToken = newToken;
    if (currentClient !== undefined) {
        if (newToken === null) {
            currentClient.eject(authMiddleware)
        } else {
            currentClient.use(authMiddleware);
        }
    }
}

