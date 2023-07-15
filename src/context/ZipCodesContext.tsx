// ZipCodesContext.tsx

import React, { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

interface ZipCodesContextData {
  zipCodes: string[];
  setZipCodes: React.Dispatch<React.SetStateAction<string[]>>;
  removeZipCode: (value: string) => void;
}

const ZipCodesContext = createContext<ZipCodesContextData | undefined>(
  undefined,
);

export const ZipCodesProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [zipCodes, setZipCodes] = useLocalStorage<string[]>('zipCodes', []);

  const removeZipCode = (value: string) => {
    const filteredZipCodes = zipCodes.filter((zipCode) => zipCode !== value);
    setZipCodes(filteredZipCodes);
  };

  return (
    <ZipCodesContext.Provider value={{ zipCodes, setZipCodes, removeZipCode }}>
      {children}
    </ZipCodesContext.Provider>
  );
};

export const useZipCodes = () => {
  const context = useContext(ZipCodesContext);
  if (context === undefined) {
    throw new Error('useZipCodes must be used within a ZipCodesProvider');
  }
  return context;
};
