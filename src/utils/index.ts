export const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return `${color}90`;
};

export const getRandomBackgroundColorClass = () => {
  const colors = [
    'red',
    'stone',
    'neutral',
    'zinc',
    'gray',
    // Add more color names as needed
  ];

  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const randomClass = `bg-${randomColor}-200`;
  return randomClass;
};

export const formatDate = (date: string) => {
  const parsedDate = new Date(date);
  const formattedDate = `${parsedDate.getFullYear()}/${String(
    parsedDate.getMonth() + 1,
  ).padStart(2, '0')}/${String(parsedDate.getDate()).padStart(2, '0')}`;
  return formattedDate;
};

export const findDateDifference = (date: string) => {
  const date1 = new Date(date);
  const date2 = new Date(formatDate(String(new Date())));
  const differenceInTime = date2.getTime() - date1.getTime();
  const differenceInDays = differenceInTime / (1000 * 3600 * 24);
  return differenceInDays.toFixed(0);
};

export function isBrowser() {
  return typeof window !== 'undefined';
}

export function checkUserAgent() {
  const { userAgent } = window.navigator;

  if (/Android/i.test(userAgent)) {
    return 'mobile';
  }
  return 'web';
}
