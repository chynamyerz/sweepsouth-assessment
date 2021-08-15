export const isServer = () => {
  return typeof window === 'undefined';
};

export const getLocalStorageItem = (key: string) => {
  if (!isServer()) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : undefined;
  }
};

export const setLocalStorageItem = (key: string, value: any) => {
  if (!isServer() && value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};
