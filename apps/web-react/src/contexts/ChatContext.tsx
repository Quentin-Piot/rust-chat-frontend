import React, { createContext, useContext, useEffect, useState } from "react";
import { Group } from "@/types/Group";

export interface IChatsContext {
  groups: Group[];
}

const ChatsContext = createContext<IChatsContext>({
  groups: [],
});

export const useChats = () => useContext(ChatsContext);

export interface ChatsProviderProps {
  children: React.ReactNode;
  shouldBeAuth?: boolean;
}

export const ChatsProvider: React.FC<ChatsProviderProps> = ({ children }) => {
  const [groups, setGroups] = useState<Group[]>([]);

  useEffect(() => {
    setGroups([]);
  }, []);

  return (
    <ChatsContext.Provider
      value={{
        groups,
      }}
    >
      {children}
    </ChatsContext.Provider>
  );
};

export default ChatsContext;
