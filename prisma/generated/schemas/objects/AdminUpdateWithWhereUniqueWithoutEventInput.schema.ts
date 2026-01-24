import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { AdminWhereUniqueInputObjectSchema as AdminWhereUniqueInputObjectSchema } from './AdminWhereUniqueInput.schema';
import { AdminUpdateWithoutEventInputObjectSchema as AdminUpdateWithoutEventInputObjectSchema } from './AdminUpdateWithoutEventInput.schema';
import { AdminUncheckedUpdateWithoutEventInputObjectSchema as AdminUncheckedUpdateWithoutEventInputObjectSchema } from './AdminUncheckedUpdateWithoutEventInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AdminWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => AdminUpdateWithoutEventInputObjectSchema), z.lazy(() => AdminUncheckedUpdateWithoutEventInputObjectSchema)])
}).strict();
export const AdminUpdateWithWhereUniqueWithoutEventInputObjectSchema: z.ZodType<Prisma.AdminUpdateWithWhereUniqueWithoutEventInput> = makeSchema() as unknown as z.ZodType<Prisma.AdminUpdateWithWhereUniqueWithoutEventInput>;
export const AdminUpdateWithWhereUniqueWithoutEventInputObjectZodSchema = makeSchema();
