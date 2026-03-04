import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import prisma from "@/lib/prisma";

export default async function AttracionWaitngStatus() {
  const attractions = await prisma.attraction.findMany({
    include: {
      store: true,
      tickets: {
        where: { status: "ISSUED" },
        select: { numberOfPeople: true },
      },
    },
  });
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>企画名</TableHead>
          <TableHead>待ち人数（人）</TableHead>
          <TableHead>待ち時間（分）</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {attractions.map((attraction) => {
          //TODO 待ち時間の計算式を再検討する
          const waitingPeople = attraction.tickets.reduce(
            (sum, t) => sum + t.numberOfPeople,
            0,
          );
          const groupCount = Math.ceil(
            waitingPeople / (attraction.peopleCapacity || 1),
          );
          const waitMinutes = groupCount * (attraction.playTime || 0);
          return (
            <TableRow key={attraction.id}>
              <TableCell>{attraction.store.name}</TableCell>
              <TableCell>{waitingPeople}</TableCell>
              <TableCell>{waitMinutes}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
