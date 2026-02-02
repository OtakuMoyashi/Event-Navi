// src/features/store/update-form.tsx
"use client";

import { Event } from "@/generated/prisma/client";
import { useActionState } from "react";
import { updateStoreEventId } from "./action";

type Props = {
  events: Event[];
  storeId: string;
};

export default function UpdateStoreForm({ events, storeId }: Props) {
  // storeIdを固定したActionを作成
  const updateWithId = updateStoreEventId.bind(null, storeId);
  const [state, dispatch, isPending] = useActionState(updateWithId, null);

  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <form action={dispatch} className="flex flex-col gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">所属イベントの変更</label>
          <select
            name="eventId"
            className="w-full border p-2 rounded-md"
            disabled={isPending}
          >
            {events.map((event) => (
              <option key={event.id} value={event.id}>
                {event.name}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="bg-blue-600 text-white py-2 rounded-md disabled:bg-gray-400"
        >
          {isPending ? "更新中..." : "イベントを紐づけする"}
        </button>

        {state?.message && (
          <p className="text-red-500 text-sm">{state.message}</p>
        )}
      </form>
    </div>
  );
}
