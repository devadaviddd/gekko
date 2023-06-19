import {
  ReactNode,
  createContext,
  useContext,
  useState,
} from 'react';

type ParentProps = {
  children: ReactNode;
};

interface NavContextProps {
  isInfoOpen: boolean;
  setIsInfoOpen: (isInfoOpen: boolean) => void;
  isSupportOpen: boolean;
  setIsSupportOpen: (isOpen: boolean) => void;
  isSocialOpen: boolean;
  setIsSocialOpen: (isOpen: boolean) => void;
  isMoreOpen: boolean;
  setIsMoreOpen: (isOpen: boolean) => void;
}

const NavContext = createContext<NavContextProps | undefined>(
  undefined,
);

export const NavProvider: React.FC<ParentProps> = ({ children }) => {
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [isSocialOpen, setIsSocialOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const value: NavContextProps = {
    isInfoOpen,
    setIsInfoOpen,
    isSupportOpen,
    setIsSupportOpen,
    isSocialOpen,
    setIsSocialOpen,
    isMoreOpen,
    setIsMoreOpen,
  };

  return (
    <NavContext.Provider value={value}>
      {children}
    </NavContext.Provider>
  );
};

export const useNavContext = () => {
  const context = useContext(NavContext);
  if (context === undefined) {
    throw new Error(
      'useNavContext must be used within a NavProvider',
    );
  }
  return context;
};
