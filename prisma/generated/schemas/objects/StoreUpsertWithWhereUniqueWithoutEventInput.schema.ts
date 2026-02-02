import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StoreWhereUniqueInputObjectSchema as StoreWhereUniqueInputObjectSchema } from './StoreWhereUniqueInput.schema';
import { StoreUpdateWithoutEventInputObjectSchema as StoreUpdateWithoutEventInputObjectSchema } from './StoreUpdateWithoutEventInput.schema';
import { StoreUncheckedUpdateWithoutEventInputObjectSchema as StoreUncheckedUpdateWithoutEventInputObjectSchema } from './StoreUncheckedUpdateWithoutEventInput.schema';
import { StoreCreateWithoutEventInputObjectSchema as StoreCreateWithoutEventInputObjectSchema } from './StoreCreateWithoutEventInput.schema';
import { StoreUncheckedCreateWithoutEventInputObjectSchema as StoreUncheckedCreateWithoutEventInputObjectSchema } from './StoreUncheckedCreateWithoutEventInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StoreWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => StoreUpdateWithoutEventInputObjectSchema), z.lazy(() => StoreUncheckedUpdateWithoutEventInputObjectSchema)]),
  create: z.union([z.lazy(() => StoreCreateWithoutEventInputObjectSchema), z.lazy(() => StoreUncheckedCreateWithoutEventInputObjectSchema)])
}).strict();
export const StoreUpsertWithWhereUniqueWithoutEventInputObjectSchema: z.ZodType<Prisma.StoreUpsertWithWhereUniqueWithoutEventInput> = makeSchema() as unknown as z.ZodType<Prisma.StoreUpsertWithWhereUniqueWithoutEventInput>;
export const StoreUpsertWithWhereUniqueWithoutEventInputObjectZodSchema = makeSchema();
