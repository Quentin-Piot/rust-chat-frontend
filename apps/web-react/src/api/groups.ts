import { dbConfig } from "@/config/config";
import { Group } from "@/types/Group";

export const fetchUserGroups = async (userId: number) => {
  const res = await fetch(`${dbConfig.apiUrl}/users/${userId}/groups`);
  const groups: Group[] = await res.json();
  return groups;
};
