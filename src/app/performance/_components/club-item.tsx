import { FC } from 'react';

type Props = {
  club: string;
  max: string;
  ave: string;
};

export const ClubItem: FC<Props> = ({ club, max, ave }) => {
  return (
    <div className='grid w-full grid-cols-6 gap-4 border border-mauve-5 py-2'>
      <div className='col-span-3 mx-2 flex  justify-center gap-4'>
        <div>{club}</div>
      </div>
      <p className='text-center'>{max === '-' ? '-' : `${max}ヤード`}</p>
      <p className='text-center'>{ave === '-' ? '-' : `${ave}ヤード`}</p>
      <p className=''></p>
    </div>
  );
};
export const ClubHeader: FC = () => {
  return (
    <div className='grid w-full grid-cols-6 gap-4 bg-[#6cc551] text-whitea-12'>
      <div className='col-span-3 mx-2 flex  justify-center gap-4'>
        <div>番手</div>
      </div>
      <div className='text-center'>Max</div>
      <div className='text-center'>Ave</div>
      <div className=''></div>
    </div>
  );
};
