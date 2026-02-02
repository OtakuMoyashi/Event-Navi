import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { AdminCreateManyEventInputObjectSchema as AdminCreateManyEventInputObjectSchema } from './AdminCreateManyEventInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => AdminCreateManyEventInputObjectSchema), z.lazy(() => AdminCreateManyEventInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const AdminCreateManyEventInputEnvelopeObjectSchema: z.ZodType<Prisma.AdminCreateManyEventInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.AdminCreateManyEventInputEnvelope>;
export const AdminCreateManyEventInputEnvelopeObjectZodSchema = makeSchema();
