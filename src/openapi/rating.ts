/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/rating/comment": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Comments
         * @description Scopes: `["rating.comment.review"]`
         *
         *     `limit` - максимальное количество возвращаемых комментариев
         *
         *     `offset` -  смещение, определяющее, с какого по порядку комментария начинать выборку.
         *     Если без смещения возвращается комментарий с условным номером N,
         *     то при значении offset = X будет возвращаться комментарий с номером N + X
         *
         *     `order_by` - возможное значение `'create_ts'` - возвращается список комментариев отсортированных по времени создания
         *
         *     `lecturer_id` - вернет все комментарии для преподавателя с конкретным id, по дефолту возвращает вообще все аппрувнутые комментарии.
         *
         *     `user_id` - вернет все комментарии пользователя с конкретным id
         *
         *     `unreviewed` - вернет все непроверенные комментарии, если True. По дефолту False.
         */
        get: operations["get_comments_comment_get"];
        put?: never;
        /**
         * Create Comment
         * @description Создает комментарий к преподавателю в базе данных RatingAPI
         *     Для создания комментария нужно быть авторизованным
         */
        post: operations["create_comment_comment_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/rating/comment/{uuid}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Comment
         * @description Возвращает комментарий по его UUID в базе данных RatingAPI
         */
        get: operations["get_comment_comment__uuid__get"];
        put?: never;
        post?: never;
        /**
         * Delete Comment
         * @description Scopes: `["rating.comment.delete"]`
         *
         *     Удаляет комментарий по его UUID в базе данных RatingAPI
         */
        delete: operations["delete_comment_comment__uuid__delete"];
        options?: never;
        head?: never;
        /**
         * Review Comment
         * @description Scopes: `["rating.comment.review"]`
         *     Проверка комментария и присваивания ему статуса по его UUID в базе данных RatingAPI
         *
         *     `review_status` - возможные значения
         *     `approved` - комментарий одобрен и возвращается при запросе лектора
         *     `dismissed` - комментарий отклонен, не отображается в запросе лектора
         */
        patch: operations["review_comment_comment__uuid__patch"];
        trace?: never;
    };
    "/rating/lecturer": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Lecturers
         * @description `limit` - максимальное количество возвращаемых преподавателей
         *
         *     `offset` - нижняя граница получения преподавателей, т.е. если по дефолту первым возвращается преподаватель с условным номером N, то при наличии ненулевого offset будет возвращаться преподаватель с номером N + offset
         *
         *     `order_by` - возможные значения `"mark_kindness", "mark_freebie", "mark_clarity", "mark_general", "last_name"`.
         *     Если передано `'last_name'` - возвращается список преподавателей отсортированных по алфавиту по фамилиям
         *     Если передано `'mark_...'` - возвращается список преподавателей отсортированных по конкретной оценке
         *
         *     `info` - возможные значения `'comments'`, `'mark'`.
         *     Если передано `'comments'`, то возвращаются одобренные комментарии к преподавателю.
         *     Если передано `'mark'`, то возвращаются общие средние оценки, а также суммарная средняя оценка по всем одобренным комментариям.
         *
         *     `subject`
         *     Если передано `subject` - возвращает всех преподавателей, для которых переданное значение совпадает с одним из их предметов преподавания.
         *     Также возвращает всех преподавателей, у которых есть комментарий с совпадающим с данным subject.
         *
         *     `name`
         *     Поле для ФИО. Если передано `name` - возвращает всех преподователей, для которых нашлись совпадения с переданной строкой
         *
         *     `asc_order`
         *     Если передано true, сортировать в порядке возрастания
         *     Иначе - в порядке убывания
         */
        get: operations["get_lecturers_lecturer_get"];
        put?: never;
        /**
         * Create Lecturer
         * @description Scopes: `["rating.lecturer.create"]`
         *
         *     Создает преподавателя в базе данных RatingAPI
         */
        post: operations["create_lecturer_lecturer_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/rating/lecturer/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Lecturer
         * @description Scopes: `["rating.lecturer.read"]`
         *
         *     Возвращает преподавателя по его ID в базе данных RatingAPI
         *
         *     *QUERY* `info: string` - возможные значения `'comments'`, `'mark'`.
         *     Если передано `'comments'`, то возвращаются одобренные комментарии к преподавателю.
         *     Если передано `'mark'`, то возвращаются общие средние оценки, а также суммарная средняя оценка по всем одобренным комментариям.
         *
         *     Subject лектора возвращшается либо из базы данных, либо из любого аппрувнутого комментария
         */
        get: operations["get_lecturer_lecturer__id__get"];
        put?: never;
        post?: never;
        /**
         * Delete Lecturer
         * @description Scopes: `["rating.lecturer.delete"]`
         */
        delete: operations["delete_lecturer_lecturer__id__delete"];
        options?: never;
        head?: never;
        /**
         * Update Lecturer
         * @description Scopes: `["rating.lecturer.update"]`
         */
        patch: operations["update_lecturer_lecturer__id__patch"];
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** CommentGet */
        CommentGet: {
            /**
             * Create Ts
             * Format: date-time
             */
            create_ts: string;
            /** Lecturer Id */
            lecturer_id: number;
            /** Mark Clarity */
            mark_clarity: number;
            /** Mark Freebie */
            mark_freebie: number;
            /** Mark General */
            mark_general: number;
            /** Mark Kindness */
            mark_kindness: number;
            /** Subject */
            subject: string;
            /** Text */
            text: string;
            /**
             * Update Ts
             * Format: date-time
             */
            update_ts: string;
            /** User Id */
            user_id?: number | null;
            /**
             * Uuid
             * Format: uuid
             */
            uuid: string;
        };
        /** CommentGetAll */
        CommentGetAll: {
            /**
             * Comments
             * @default []
             */
            comments: components["schemas"]["CommentGet"][];
            /** Limit */
            limit: number;
            /** Offset */
            offset: number;
            /** Total */
            total: number;
        };
        /** CommentPost */
        CommentPost: {
            /**
             * Is Anonymous
             * @default true
             */
            is_anonymous: boolean;
            /** Mark Clarity */
            mark_clarity: number;
            /** Mark Freebie */
            mark_freebie: number;
            /** Mark Kindness */
            mark_kindness: number;
            /** Subject */
            subject: string;
            /** Text */
            text: string;
        };
        /** HTTPValidationError */
        HTTPValidationError: {
            /** Detail */
            detail?: components["schemas"]["ValidationError"][];
        };
        /** LecturerGet */
        LecturerGet: {
            /** Avatar Link */
            avatar_link?: string | null;
            /** Comments */
            comments?: components["schemas"]["CommentGet"][] | null;
            /** First Name */
            first_name: string;
            /** Id */
            id: number;
            /** Last Name */
            last_name: string;
            /** Mark Clarity */
            mark_clarity?: number | null;
            /** Mark Freebie */
            mark_freebie?: number | null;
            /** Mark General */
            mark_general?: number | null;
            /** Mark Kindness */
            mark_kindness?: number | null;
            /** Middle Name */
            middle_name: string;
            /** Subjects */
            subjects?: string[] | null;
            /** Timetable Id */
            timetable_id: number;
        };
        /** LecturerGetAll */
        LecturerGetAll: {
            /**
             * Lecturers
             * @default []
             */
            lecturers: components["schemas"]["LecturerGet"][];
            /** Limit */
            limit: number;
            /** Offset */
            offset: number;
            /** Total */
            total: number;
        };
        /** LecturerPatch */
        LecturerPatch: {
            /** Avatar Link */
            avatar_link?: string | null;
            /** First Name */
            first_name?: string | null;
            /** Last Name */
            last_name?: string | null;
            /** Middle Name */
            middle_name?: string | null;
            /** Timetable Id */
            timetable_id?: number | null;
        };
        /** LecturerPost */
        LecturerPost: {
            /** Avatar Link */
            avatar_link?: string | null;
            /** First Name */
            first_name: string;
            /** Last Name */
            last_name: string;
            /** Middle Name */
            middle_name: string;
            /** Timetable Id */
            timetable_id: number;
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
    get_comments_comment_get: {
        parameters: {
            query?: {
                lecturer_id?: number | null;
                limit?: number;
                offset?: number;
                order_by?: "create_ts"[];
                unreviewed?: boolean;
                user_id?: number | null;
            };
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
                    "application/json": components["schemas"]["CommentGetAll"];
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
    create_comment_comment_post: {
        parameters: {
            query: {
                lecturer_id: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CommentPost"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommentGet"];
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
    get_comment_comment__uuid__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                uuid: string;
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
                    "application/json": components["schemas"]["CommentGet"];
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
    delete_comment_comment__uuid__delete: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                uuid: string;
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
    review_comment_comment__uuid__patch: {
        parameters: {
            query?: {
                review_status?: "approved" | "dismissed";
            };
            header?: never;
            path: {
                uuid: string;
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
                    "application/json": components["schemas"]["CommentGet"];
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
    get_lecturers_lecturer_get: {
        parameters: {
            query?: {
                asc_order?: boolean;
                info?: ("comments" | "mark")[];
                limit?: number;
                name?: string;
                offset?: number;
                order_by?: "mark_kindness" | "mark_freebie" | "mark_clarity" | "mark_general" | "last_name";
                subject?: string;
            };
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
                    "application/json": components["schemas"]["LecturerGetAll"];
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
    create_lecturer_lecturer_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["LecturerPost"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LecturerGet"];
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
    get_lecturer_lecturer__id__get: {
        parameters: {
            query?: {
                info?: ("comments" | "mark")[];
            };
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
                    "application/json": components["schemas"]["LecturerGet"];
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
    delete_lecturer_lecturer__id__delete: {
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
    update_lecturer_lecturer__id__patch: {
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
                "application/json": components["schemas"]["LecturerPatch"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LecturerGet"];
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
