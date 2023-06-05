import { useEffect, useState } from 'react';
import { SmallData, UseDataServerResponse } from '../App/types';

const useDataServer = ({
  url,
  selectButton,
}: {
  url: string;
  selectButton: boolean;
}): UseDataServerResponse[] => {
  const [clientList, setClientList] = useState<SmallData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // const getData = (): void => {};

  useEffect(() => {
    if (!selectButton) {
      return;
    }

    setIsLoading(true);

    fetch(url, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    })
      .then((res) => res.json())
      .then((data) => {
        setClientList(data);
        setIsLoading(false);
        setIsLoaded(true);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, [selectButton, url]);

  return [{ clientList, setClientList, isLoading, isLoaded }];
};

export default useDataServer;
