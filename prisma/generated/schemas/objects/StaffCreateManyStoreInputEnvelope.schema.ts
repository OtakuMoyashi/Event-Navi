import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StaffCreateManyStoreInputObjectSchema as StaffCreateManyStoreInputObjectSchema } from './StaffCreateManyStoreInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => StaffCreateManyStoreInputObjectSchema), z.lazy(() => StaffCreateManyStoreInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const StaffCreateManyStoreInputEnvelopeObjectSchema: z.ZodType<Prisma.StaffCreateManyStoreInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.StaffCreateManyStoreInputEnvelope>;
export const StaffCreateManyStoreInputEnvelopeObjectZodSchema = makeSchema();
