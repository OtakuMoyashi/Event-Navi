import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma/client';
import { StoreScalarWhereInputObjectSchema as StoreScalarWhereInputObjectSchema } from './StoreScalarWhereInput.schema';
import { StoreUpdateManyMutationInputObjectSchema as StoreUpdateManyMutationInputObjectSchema } from './StoreUpdateManyMutationInput.schema';
import { StoreUncheckedUpdateManyWithoutEventInputObjectSchema as StoreUncheckedUpdateManyWithoutEventInputObjectSchema } from './StoreUncheckedUpdateManyWithoutEventInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => StoreScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => StoreUpdateManyMutationInputObjectSchema), z.lazy(() => StoreUncheckedUpdateManyWithoutEventInputObjectSchema)])
}).strict();
export const StoreUpdateManyWithWhereWithoutEventInputObjectSchema: z.ZodType<Prisma.StoreUpdateManyWithWhereWithoutEventInput> = makeSchema() as unknown as z.ZodType<Prisma.StoreUpdateManyWithWhereWithoutEventInput>;
export const StoreUpdateManyWithWhereWithoutEventInputObjectZodSchema = makeSchema();
