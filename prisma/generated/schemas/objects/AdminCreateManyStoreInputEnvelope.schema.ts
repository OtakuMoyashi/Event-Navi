import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { AdminCreateManyStoreInputObjectSchema as AdminCreateManyStoreInputObjectSchema } from './AdminCreateManyStoreInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => AdminCreateManyStoreInputObjectSchema), z.lazy(() => AdminCreateManyStoreInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const AdminCreateManyStoreInputEnvelopeObjectSchema: z.ZodType<Prisma.AdminCreateManyStoreInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.AdminCreateManyStoreInputEnvelope>;
export const AdminCreateManyStoreInputEnvelopeObjectZodSchema = makeSchema();
