import * as z from 'zod';
// prettier-ignore
export const StaffResultSchema = z.object({
    id: z.string(),
    supabaseUserId: z.string(),
    email: z.string(),
    storeId: z.string(),
    store: z.unknown(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type StaffResultType = z.infer<typeof StaffResultSchema>;
