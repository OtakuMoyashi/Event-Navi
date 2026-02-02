import * as z from 'zod';
import { TicketStatusSchema } from '../../enums/TicketStatus.schema';
// prettier-ignore
export const TicketResultSchema = z.object({
    id: z.string(),
    index: z.number().int(),
    numberOfPeople: z.number().int(),
    status: TicketStatusSchema,
    attractionId: z.string(),
    attraction: z.unknown(),
    userId: z.string(),
    user: z.unknown(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type TicketResultType = z.infer<typeof TicketResultSchema>;
