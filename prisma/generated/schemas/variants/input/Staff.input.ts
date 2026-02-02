import * as z from 'zod';
// prettier-ignore
export const StaffInputSchema = z.object({
    id: z.string(),
    supabaseUserId: z.string(),
    email: z.string(),
    name: z.string().optional().nullable(),
    storeId: z.string(),
    store: z.unknown(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type StaffInputType = z.infer<typeof StaffInputSchema>;
