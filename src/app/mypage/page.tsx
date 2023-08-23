import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function MyPage() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    redirect('/login');
  }

  return (
    <main className='flex w-full flex-col items-center justify-center'>
      <Link href='/'>TOP</Link>
      <p>myPage</p>
    </main>
  );
}
