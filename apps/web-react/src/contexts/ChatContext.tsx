import React, { createContext, useContext, useEffect, useState } from "react";
import { Group } from "@/types/Group";
import { useQuery } from "react-query";
import { fetchUserGroups } from "@/api/groups";

export interface IChatsContext {
  groups: Group[];
  selectedGroup: Group | undefined;

  selectGroup: (id: number) => void;
}

const ChatsContext = createContext<IChatsContext>({
  groups: [],
  selectedGroup: undefined,
  selectGroup: () => null,
});

export const useChats = () => useContext(ChatsContext);

export interface ChatsProviderProps {
  children: React.ReactNode;
  shouldBeAuth?: boolean;
}

export const ChatsProvider: React.FC<ChatsProviderProps> = ({ children }) => {
  const [groups, setGroups] = useState<Group[]>([]);
  const [selectedGroup, setSelectedGroup] = useState<Group>();

  const { data } = useQuery("user-groups", () => fetchUserGroups(1));
  useEffect(() => {
    setGroups([]);
  }, []);

  useEffect(() => {
    if (data) setGroups(data as Group[]);
  }, [data]);

  const selectGroup = (id: number) => {
    const group = groups.find((g) => g.id === id);
    if (group) {
      setSelectedGroup(group);
    }
  };

  return (
    <ChatsContext.Provider
      value={{
        selectedGroup,
        groups,
        selectGroup,
      }}
    >
      {children}
    </ChatsContext.Provider>
  );
};

export default ChatsContext;
