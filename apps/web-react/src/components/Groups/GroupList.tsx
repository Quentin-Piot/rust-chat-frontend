import { useChats } from "@/contexts/ChatContext";
import { Button, Card, Flex, Text } from "@chakra-ui/react";

const GroupList = () => {
  const { groups, selectGroup } = useChats();

  return (
    <Flex flexDirection="column" w="100%" gap={2}>
      {groups.map((group) => (
        <Card key={group.id}>
          <Button p={3} onClick={() => selectGroup(group.id)}>
            <Text>{group.name}</Text>
          </Button>
        </Card>
      ))}
    </Flex>
  );
};

export default GroupList;
