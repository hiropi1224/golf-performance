'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [view, setView] = useState('sign-in');
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    setView('check-email');
  };

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await supabase.auth.signInWithPassword({
      email,
      password,
    });
    router.push('/');
    router.refresh();
  };

  return (
    <div className='flex w-full flex-1 flex-col justify-center gap-2 px-8 sm:max-w-md'>
      <Link
        href='/'
        className='group absolute left-8 top-8 flex items-center rounded-md bg-btn-background px-4 py-2 text-sm text-foreground no-underline hover:bg-btn-background-hover'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1'
        >
          <polyline points='15 18 9 12 15 6' />
        </svg>{' '}
        Back
      </Link>
      {view === 'check-email' ? (
        <p className='text-center text-foreground'>
          Check <span className='font-bold'>{email}</span> to continue signing
          up
        </p>
      ) : (
        <form
          className='flex w-full flex-1 flex-col justify-center gap-2 text-foreground'
          onSubmit={view === 'sign-in' ? handleSignIn : handleSignUp}
        >
          <label htmlFor='email'>Email</label>
          <input
            className='mb-6 rounded-md border px-4 py-2'
            name='email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder='you@example.com'
          />
          <label className='text-base' htmlFor='password'>
            Password
          </label>
          <input
            className='mb-6 rounded-md border px-4 py-2'
            type='password'
            name='password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder='••••••••'
          />
          {view === 'sign-in' && (
            <>
              <button className='mb-6 rounded bg-green-9 px-4 py-2 text-mauve-1 hover:bg-green-8'>
                Sign In
              </button>
              <p className='text-center text-sm'>
                アカウントを持っていない方はこちら
                <button
                  className='ml-1 underline'
                  onClick={() => setView('sign-up')}
                >
                  Sign Up Now
                </button>
              </p>
            </>
          )}
          {view === 'sign-up' && (
            <>
              <button className='mb-6 rounded bg-green-9 px-4 py-2 text-mauve-1 hover:bg-green-8'>
                Sign Up
              </button>
              <p className='text-center text-sm'>
                すでにアカウントを持っている方はこちら
                <button
                  className='ml-1 underline'
                  onClick={() => setView('sign-in')}
                >
                  Sign In Now
                </button>
              </p>
            </>
          )}
        </form>
      )}
    </div>
  );
}
