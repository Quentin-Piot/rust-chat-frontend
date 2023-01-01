import {
  Box,
  BoxProps,
  CloseButton,
  Flex,
  IconButton,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import GroupList from "@/components/Groups/GroupList";
import { BiPlus } from "react-icons/all";

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const Sidebar = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Rust Chat
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>

      <Flex flexDirection="column" px={3} mt={6} alignItems="center" w="100%">
        <Text mb={3} fontSize="md" fontWeight={600} w="100%">
          Group list
        </Text>
        <GroupList />
        <IconButton
          aria-label={"add button"}
          icon={<BiPlus />}
          rounded="full"
          mx="auto"
          mt={2}
        />
      </Flex>
    </Box>
  );
};

export default Sidebar;
