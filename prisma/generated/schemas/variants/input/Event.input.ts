import * as z from 'zod';
// prettier-ignore
export const EventInputSchema = z.object({
    id: z.string(),
    slug: z.string(),
    name: z.string(),
    isActive: z.boolean(),
    startedAt: z.date(),
    finishedAt: z.date(),
    description: z.string().optional().nullable(),
    stores: z.array(z.unknown()),
    admins: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type EventInputType = z.infer<typeof EventInputSchema>;
