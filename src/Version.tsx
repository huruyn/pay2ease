import { useMsal } from '@azure/msal-react';
import { useEffect, useState } from 'react';
import Api from './api';

export const VersionPure = ({
  appVersion,
  apiVersion,
}: {
  appVersion: string,
  apiVersion: string
}) => (
  <div className="text-end">
    <span>
      App:
      {' '}
      {appVersion}
    </span>
    {' '}
    <span>
      API:
      {' '}
      {apiVersion}
    </span>
  </div>
);

export const Version = () => {
  const { instance, accounts } = useMsal();
  const [apiVersion, setApiVersion] = useState<string>();
  const [apiError, setApiError] = useState<string>();

  useEffect(() => {
    new Api(instance, accounts[0])
      .getVersion()
      .then((response) => setApiVersion(response.version))
      .catch((error) => setApiError(error));
  }, []);

  return (
    <VersionPure
      appVersion={process.env.REACT_APP_VERSION as string}
      apiVersion={apiVersion || apiError || 'Loading...'}
    />
  );
};
