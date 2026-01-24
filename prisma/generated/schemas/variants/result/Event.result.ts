import * as z from 'zod';
// prettier-ignore
export const EventResultSchema = z.object({
    id: z.string(),
    slug: z.string(),
    name: z.string(),
    isActive: z.boolean(),
    startedAt: z.date(),
    finishedAt: z.date(),
    description: z.string().nullable(),
    stores: z.array(z.unknown()),
    admins: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type EventResultType = z.infer<typeof EventResultSchema>;
