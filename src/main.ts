import createClient from "openapi-fetch";

import type { paths as achievementPaths } from "./openapi/achievement.ts";
import type { paths as authPaths } from "./openapi/auth.ts";
import type { paths as marketingPaths } from "./openapi/marketing.ts";
import type { paths as pingerPaths } from "./openapi/pinger.ts";
import type { paths as printPaths } from "./openapi/print.ts";
import type { paths as servicesPaths } from "./openapi/services.ts";
import type { paths as socialPaths } from "./openapi/social.ts";
import type { paths as timetablePaths } from "./openapi/timetable.ts";
import type { paths as userdataPaths } from "./openapi/userdata.ts";


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

// TODO: Научить работать с различными средами
export const client = createClient<paths>({ baseUrl: "https://api.profcomff.com/" });

export default client;
