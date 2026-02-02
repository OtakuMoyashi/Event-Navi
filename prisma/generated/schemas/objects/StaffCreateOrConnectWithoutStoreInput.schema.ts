import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StaffWhereUniqueInputObjectSchema as StaffWhereUniqueInputObjectSchema } from './StaffWhereUniqueInput.schema';
import { StaffCreateWithoutStoreInputObjectSchema as StaffCreateWithoutStoreInputObjectSchema } from './StaffCreateWithoutStoreInput.schema';
import { StaffUncheckedCreateWithoutStoreInputObjectSchema as StaffUncheckedCreateWithoutStoreInputObjectSchema } from './StaffUncheckedCreateWithoutStoreInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StaffWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => StaffCreateWithoutStoreInputObjectSchema), z.lazy(() => StaffUncheckedCreateWithoutStoreInputObjectSchema)])
}).strict();
export const StaffCreateOrConnectWithoutStoreInputObjectSchema: z.ZodType<Prisma.StaffCreateOrConnectWithoutStoreInput> = makeSchema() as unknown as z.ZodType<Prisma.StaffCreateOrConnectWithoutStoreInput>;
export const StaffCreateOrConnectWithoutStoreInputObjectZodSchema = makeSchema();
