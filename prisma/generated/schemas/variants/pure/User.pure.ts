import * as z from 'zod';
// prettier-ignore
export const UserModelSchema = z.object({
    id: z.string(),
    tickets: z.array(z.unknown()),
    pushSubscriptions: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type UserPureType = z.infer<typeof UserModelSchema>;
