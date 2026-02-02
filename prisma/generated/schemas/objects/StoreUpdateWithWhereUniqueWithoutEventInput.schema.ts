import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StoreWhereUniqueInputObjectSchema as StoreWhereUniqueInputObjectSchema } from './StoreWhereUniqueInput.schema';
import { StoreUpdateWithoutEventInputObjectSchema as StoreUpdateWithoutEventInputObjectSchema } from './StoreUpdateWithoutEventInput.schema';
import { StoreUncheckedUpdateWithoutEventInputObjectSchema as StoreUncheckedUpdateWithoutEventInputObjectSchema } from './StoreUncheckedUpdateWithoutEventInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StoreWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => StoreUpdateWithoutEventInputObjectSchema), z.lazy(() => StoreUncheckedUpdateWithoutEventInputObjectSchema)])
}).strict();
export const StoreUpdateWithWhereUniqueWithoutEventInputObjectSchema: z.ZodType<Prisma.StoreUpdateWithWhereUniqueWithoutEventInput> = makeSchema() as unknown as z.ZodType<Prisma.StoreUpdateWithWhereUniqueWithoutEventInput>;
export const StoreUpdateWithWhereUniqueWithoutEventInputObjectZodSchema = makeSchema();
