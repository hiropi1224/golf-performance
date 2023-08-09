import { ClubHeader } from '@/app/performance/_components/club-item';

export const metadata = {
  title: 'club performance',
  description: 'クラブパフォーマンス一覧',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='flex w-full flex-col items-center justify-center'>
      <header className='w-full bg-[#447604] text-center text-xl text-whitea-12'>
        クラブパフォーマンス
      </header>
      <ClubHeader />
      {children}
    </main>
  );
}
