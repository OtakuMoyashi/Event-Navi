import * as z from 'zod';
// prettier-ignore
export const StaffModelSchema = z.object({
    id: z.string(),
    supabaseUserId: z.string(),
    email: z.string(),
    storeId: z.string(),
    store: z.unknown(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type StaffPureType = z.infer<typeof StaffModelSchema>;
