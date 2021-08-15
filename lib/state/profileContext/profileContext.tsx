import {
  Context,
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { getLocalStorageItem } from '../../../src/utils/helper';
import { IProfile } from './types';

const ProfileContext: Context<{
  profile: IProfile | undefined;
  profiles: IProfile[];
  setProfile?: Dispatch<SetStateAction<IProfile | undefined>>;
  setProfiles?: Dispatch<SetStateAction<IProfile[]>>;
}> = createContext({
  profile: getLocalStorageItem('profile'),
  profiles: getLocalStorageItem('profiles')?.profiles,
});

export function useProfile() {
  return useContext(ProfileContext);
}

export function ProfileProvider(children: { children: ReactNode }) {
  const [profile, setProfile] = useState<IProfile>();
  const [profiles, setProfiles] = useState<IProfile[]>([]);

  const value = {
    profile,
    profiles,
    setProfile,
    setProfiles,
  };
  return (
    <ProfileContext.Provider value={value}>
      {children.children}
    </ProfileContext.Provider>
  );
}
