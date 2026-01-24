import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StoreCreateManyEventInputObjectSchema as StoreCreateManyEventInputObjectSchema } from './StoreCreateManyEventInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => StoreCreateManyEventInputObjectSchema), z.lazy(() => StoreCreateManyEventInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const StoreCreateManyEventInputEnvelopeObjectSchema: z.ZodType<Prisma.StoreCreateManyEventInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.StoreCreateManyEventInputEnvelope>;
export const StoreCreateManyEventInputEnvelopeObjectZodSchema = makeSchema();
