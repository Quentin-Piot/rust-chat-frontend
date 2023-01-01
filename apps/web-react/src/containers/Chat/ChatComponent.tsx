import { Box, Card, Heading } from "@chakra-ui/react";
import { useChats } from "@/contexts/ChatContext";

const ChatComponent = ({}) => {
  const { selectedGroup } = useChats();

  return (
    <Box flex={1}>
      <Heading fontSize="2xl">Chats</Heading>
      <Box mt={6}>
        {selectedGroup && (
          <Card bg="white" p={3}>
            {selectedGroup.name}
          </Card>
        )}
      </Box>
    </Box>
  );
};

export default ChatComponent;
