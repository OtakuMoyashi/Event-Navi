import * as z from 'zod';
export const ItemDeleteManyResultSchema = z.object({
  count: z.number()
});