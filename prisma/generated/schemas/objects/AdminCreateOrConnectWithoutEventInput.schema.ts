import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { AdminWhereUniqueInputObjectSchema as AdminWhereUniqueInputObjectSchema } from './AdminWhereUniqueInput.schema';
import { AdminCreateWithoutEventInputObjectSchema as AdminCreateWithoutEventInputObjectSchema } from './AdminCreateWithoutEventInput.schema';
import { AdminUncheckedCreateWithoutEventInputObjectSchema as AdminUncheckedCreateWithoutEventInputObjectSchema } from './AdminUncheckedCreateWithoutEventInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AdminWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AdminCreateWithoutEventInputObjectSchema), z.lazy(() => AdminUncheckedCreateWithoutEventInputObjectSchema)])
}).strict();
export const AdminCreateOrConnectWithoutEventInputObjectSchema: z.ZodType<Prisma.AdminCreateOrConnectWithoutEventInput> = makeSchema() as unknown as z.ZodType<Prisma.AdminCreateOrConnectWithoutEventInput>;
export const AdminCreateOrConnectWithoutEventInputObjectZodSchema = makeSchema();
