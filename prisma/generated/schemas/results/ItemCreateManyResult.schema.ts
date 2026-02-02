import * as z from 'zod';
export const ItemCreateManyResultSchema = z.object({
  count: z.number()
});