import { getRandomColor } from '@/utils';

const Avatar = ({ username }: { username: string }) => {
  const initials = username
    .split(' ')
    .map((word: string) => word[0])
    .join('')
    .toUpperCase();

  const bgColor = getRandomColor();

  return (
    <div
      className="flex h-42 w-42 items-center  justify-center rounded-full text-16 font-medium text-white"
      style={{ backgroundColor: bgColor }}
    >
      {initials}
    </div>
  );
};

export default Avatar;
