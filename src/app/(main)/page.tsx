import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { LoadingPrompt } from "@/components/prompt/loading-prompt";
import { NotFoundPrompt } from "@/components/prompt/not-found-prompt";
import { events } from "@/lib/db/schema";
import { getDB } from "@/lib/db";

//TODO 組織一覧も追加する
export default async function Home() {
  const db = await getDB();
  const fetchedEvents = await db.select().from(events);
  return (
    <div className="space-y-4">
      <Suspense fallback={<LoadingPrompt contentName="イベント一覧" />}>
        <div className="space-y-6">
          <h2 className="text-xl font-bold px-1">イベント一覧</h2>

          {fetchedEvents.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {fetchedEvents.map((event) => (
                <Card key={event.id} className="flex flex-col">
                  <CardHeader>
                    <CardTitle>{event.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 space-y-4">
                    <p className="text-sm text-muted-foreground">
                      イベント名：{event.name}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href={`/event/${event.slug}`}>イベントページ</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <NotFoundPrompt contentName="イベント" />
          )}
        </div>
      </Suspense>
    </div>
  );
}
