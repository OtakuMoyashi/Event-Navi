import * as z from 'zod';
import { StoreTypeSchema } from '../../enums/StoreType.schema';
// prettier-ignore
export const StoreModelSchema = z.object({
    id: z.string(),
    slug: z.string(),
    name: z.string(),
    isActive: z.boolean(),
    startedAt: z.date().nullable(),
    finishedAt: z.date().nullable(),
    description: z.string().nullable(),
    storeType: StoreTypeSchema,
    attraction: z.unknown().nullable(),
    food: z.unknown().nullable(),
    event: z.unknown().nullable(),
    eventId: z.string().nullable(),
    admins: z.array(z.unknown()),
    staffs: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type StorePureType = z.infer<typeof StoreModelSchema>;
