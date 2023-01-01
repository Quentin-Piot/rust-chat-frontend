import { User } from "@/types/User";
import { Message } from "@/types/Message";

export type GroupDb = {
  id: number;
  is_duo: number;
  created_by: number;
};

export type Group = {
  id: number;
  is_duo: number;
  created_by: User;
  users: User[];
  messages: Message[];
};
