import { User } from "@/types/User";
import { Group } from "@/types/Group";

export type MessageDb = {
  id: number;

  content: string;
  group: number;
  user: number;
};

export type Message = {
  id: number;
  content: string;
  group: Group;
  user: User;
};
