/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/achievement/achievement": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get All Achievements */
        get: operations["get_all_achievements_achievement_get"];
        put?: never;
        /**
         * Create Achievement
         * @description Нужны права на: `achievements.achievement.create`
         */
        post: operations["create_achievement_achievement_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/achievement/achievement/{achievement_id}/reciever": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get All Recievers */
        get: operations["get_all_recievers_achievement__achievement_id__reciever_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/achievement/achievement/{achievement_id}/reciever/{user_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create Reciever
         * @description Нужны права на: `achievements.achievement.give`
         */
        post: operations["create_reciever_achievement__achievement_id__reciever__user_id__post"];
        /**
         * Revoke Reciever
         * @description Нужны права на: `achievements.achievement.revoke`
         */
        delete: operations["revoke_reciever_achievement__achievement_id__reciever__user_id__delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/achievement/achievement/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get Achievement */
        get: operations["get_achievement_achievement__id__get"];
        put?: never;
        post?: never;
        /**
         * Delete Achievement
         * @description Нужны права на: `achievements.achievement.delete`
         */
        delete: operations["delete_achievement_achievement__id__delete"];
        options?: never;
        head?: never;
        /**
         * Edit Achievement
         * @description Нужны права на: `achievements.achievement.edit`
         */
        patch: operations["edit_achievement_achievement__id__patch"];
        trace?: never;
    };
    "/achievement/achievement/{id}/picture": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** Upload Picture */
        patch: operations["upload_picture_achievement__id__picture_patch"];
        trace?: never;
    };
    "/achievement/user/{user_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get All Achievements */
        get: operations["get_all_achievements_user__user_id__get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** AchievementGet */
        achievement_api__routes__achievement__AchievementGet: {
            /** Description */
            description: string;
            /** Id */
            id: number;
            /** Name */
            name: string;
            /** Owner User Id */
            owner_user_id: number;
            /** Picture */
            picture: string | null;
        };
        /** AchievementGet */
        achievement_api__routes__reciever__AchievementGet: {
            /** Description */
            description: string;
            /** Id */
            id: number;
            /** Name */
            name: string;
            /** Owner User Id */
            owner_user_id: number;
            /** Picture */
            picture: string | null;
            /** Recievers */
            recievers: components["schemas"]["RecieverGet"][];
        };
        /** AchievementGet */
        achievement_api__routes__user__AchievementGet: {
            /** Description */
            description: string;
            /** Id */
            id: number;
            /** Name */
            name: string;
            /** Owner User Id */
            owner_user_id: number;
            /** Picture */
            picture: string | null;
        };
        /** AchievementCreate */
        AchievementCreate: {
            /** Description */
            description: string;
            /** Name */
            name: string;
        };
        /** AchievementEdit */
        AchievementEdit: {
            /** Description */
            description: string | null;
            /** Name */
            name: string | null;
        };
        /** Body_upload_picture_achievement__id__picture_patch */
        Body_upload_picture_achievement__id__picture_patch: {
            /**
             * Picture File
             * Format: binary
             */
            picture_file: string;
        };
        /** HTTPValidationError */
        HTTPValidationError: {
            /** Detail */
            detail?: components["schemas"]["ValidationError"][];
        };
        /** RecieverGet */
        RecieverGet: {
            /** User Id */
            user_id: number;
        };
        /** StatusResponseModel */
        StatusResponseModel: {
            /** Message */
            message: string;
            /** Ru */
            ru: string;
            /** Status */
            status: string;
        };
        /** UserGet */
        UserGet: {
            /** Achievement */
            achievement: components["schemas"]["achievement_api__routes__user__AchievementGet"][];
            /** User Id */
            user_id: number;
        };
        /** ValidationError */
        ValidationError: {
            /** Location */
            loc: (string | number)[];
            /** Message */
            msg: string;
            /** Error Type */
            type: string;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    get_all_achievements_achievement_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["achievement_api__routes__achievement__AchievementGet"][];
                };
            };
        };
    };
    create_achievement_achievement_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AchievementCreate"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["achievement_api__routes__achievement__AchievementGet"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_all_recievers_achievement__achievement_id__reciever_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                achievement_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["achievement_api__routes__reciever__AchievementGet"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_reciever_achievement__achievement_id__reciever__user_id__post: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                achievement_id: number;
                user_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["achievement_api__routes__reciever__AchievementGet"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    revoke_reciever_achievement__achievement_id__reciever__user_id__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                achievement_id: number;
                user_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["achievement_api__routes__reciever__AchievementGet"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_achievement_achievement__id__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["achievement_api__routes__achievement__AchievementGet"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_achievement_achievement__id__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["StatusResponseModel"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    edit_achievement_achievement__id__patch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["AchievementEdit"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["achievement_api__routes__achievement__AchievementGet"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    upload_picture_achievement__id__picture_patch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": components["schemas"]["Body_upload_picture_achievement__id__picture_patch"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["achievement_api__routes__achievement__AchievementGet"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_all_achievements_user__user_id__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                user_id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserGet"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
}
