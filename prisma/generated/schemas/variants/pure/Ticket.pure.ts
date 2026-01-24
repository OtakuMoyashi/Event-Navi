import * as z from 'zod';
import { TicketStatusSchema } from '../../enums/TicketStatus.schema';
// prettier-ignore
export const TicketModelSchema = z.object({
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

export type TicketPureType = z.infer<typeof TicketModelSchema>;
