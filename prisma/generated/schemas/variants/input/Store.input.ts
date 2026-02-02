import * as z from 'zod';
import { StoreTypeSchema } from '../../enums/StoreType.schema';
// prettier-ignore
export const StoreInputSchema = z.object({
    id: z.string(),
    slug: z.string(),
    name: z.string(),
    isActive: z.boolean(),
    startedAt: z.date().optional().nullable(),
    finishedAt: z.date().optional().nullable(),
    description: z.string().optional().nullable(),
    storeType: StoreTypeSchema,
    attraction: z.unknown().optional().nullable(),
    food: z.unknown().optional().nullable(),
    event: z.unknown().optional().nullable(),
    eventId: z.string().optional().nullable(),
    admins: z.array(z.unknown()),
    staffs: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type StoreInputType = z.infer<typeof StoreInputSchema>;
