import * as z from 'zod';

export const StoreTypeSchema = z.enum(['ATTRACTION', 'FOOD'])

export type StoreType = z.infer<typeof StoreTypeSchema>;