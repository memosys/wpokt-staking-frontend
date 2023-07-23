import { useGlobalContext } from "@/context/Globals";
import {
  Button,
  Center,
  Divider,
  HStack,
  Heading,
  Input,
  Text,
  VStack
} from "@chakra-ui/react";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useState } from "react";
import { useAccount, useBalance } from "wagmi";
import { EthIcon } from "./icons/eth";


export default function StakingWidget() {
  const { mobile } = useGlobalContext();
  const { address } = useAccount();
  const { openConnectModal } = useConnectModal();

  const [stakeAmount, setStakeAmount] = useState("0");

  const { data: balance } = useBalance({
    address: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
    token: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
  });

  const newTotal = Number(balance?.formatted) - Number(stakeAmount);

  const handleStakeButtonClick = () => {
    console.log("Pressed it");
  };

  const handleAllButtonClick = () => {
    setStakeAmount(balance?.formatted as string);
  };

  const isStakeButtonDisabled = newTotal < 0;
  const isInvalidStakeAmount = Number(stakeAmount) > Number(balance?.formatted);

  const renderStakeButton = () => {
    if (!address) {
      return (
        <Button
          variant="outline"
          borderColor="poktLime"
          bg="transparent"
          color="white"
          leftIcon={<EthIcon fill={"white"} />}
          onClick={openConnectModal}
        >
          Connect Wallet
        </Button>
      );
    }

    return (
      <Button
        bg="poktLime"
        onClick={handleStakeButtonClick}
        isDisabled={isStakeButtonDisabled}
      >
        Stake
      </Button>
    );
  };

  const renderStakeInput = () => {
    return (
      <Center position="relative" width="60%">
        <Input
          placeholder="0.0"
          width="100%"
          color="white"
          _placeholder={{ color: "white" }}
          _focus={{ borderColor: "poktLime" }}
          _hover={{ borderColor: "poktLime" }}
          _invalid={{ borderColor: "red" }}
          borderRadius={0}
          type="number"
          value={stakeAmount}
          onChange={(e) => setStakeAmount(e.target.value)}
          isInvalid={isInvalidStakeAmount}
        />
        <Button
          bg="poktLime"
          onClick={handleAllButtonClick}
          isDisabled={isStakeButtonDisabled}
          position="absolute"
          right={1}
          float="right"
        >
          All
        </Button>
      </Center>
    );
  };

  return (
    <VStack
      flexDirection="column"
      justify="center"
      align="center"
      fontSize={16}
      gap={8}
      textAlign="center"
      flexGrow={1}
      bg="darkOverlay"
      mx={!mobile ? "20%" : "0%"}
      px={10}
      py={10}
    >
      <Heading>Stake LP tokens</Heading>
      <HStack justify="space-between" maxWidth="80%">
        <Text>Amount to Stake:</Text>
        {!address ? <Text>No wallet connected</Text> : <Text>{balance?.formatted} LP Tokens in wallet</Text>}
      </HStack>
      {address ? renderStakeInput() : <Center>{renderStakeButton()}</Center>}

      <Divider borderColor="poktLime" marginX={20} />

      <Center flexDirection="column">
        <Text>Currently Staked</Text>
        <Text>{address ? balance?.formatted : "No wallet connected"}</Text>
      </Center>
      <Center flexDirection="column">
        <Text>New Total Staked:</Text>
        <Text color={newTotal > 0 ? "white" : "red"}>
          {address ? (newTotal > 0 ? newTotal : "Stake Amount can't be more than staked!") : "No wallet connected"}
        </Text>
      </Center>
      <Center flexDirection="column">
        <Text>Estimated Gas Cost:</Text>
        <Text>0.001 Gwei</Text>
      </Center>

      <Center gap={2}>{renderStakeButton()}</Center>
    </VStack>
  );
}
