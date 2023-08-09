import dataList from '@/app/_data/performance.json';
import { ClubItem } from '@/app/performance/_components/club-item';
import { idToClub } from '@/utils/id-to-club';

export default async function Performance() {
  return (
    <main className='flex w-full flex-col items-center justify-center'>
      {dataList.map((data) => (
        <ClubItem
          key={data.id}
          club={idToClub(data.id)}
          max={data.max}
          ave={data.ave}
        />
      ))}
    </main>
  );
}
