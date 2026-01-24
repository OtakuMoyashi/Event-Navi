import * as z from 'zod';
// prettier-ignore
export const EventModelSchema = z.object({
    id: z.string(),
    slug: z.string(),
    name: z.string(),
    isActive: z.boolean(),
    startedAt: z.date().nullable(),
    finishedAt: z.date().nullable(),
    description: z.string().nullable(),
    stores: z.array(z.unknown()),
    admins: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type EventPureType = z.infer<typeof EventModelSchema>;
