import { useCallback, useState } from 'react';

const useToggle = (initValue: boolean) => {
  const [value, setValue] = useState<boolean>(initValue);

  const onToggle = useCallback(() => {
    setValue(!value);
  }, [value]);
  return [value, onToggle];
};

export default useToggle;
