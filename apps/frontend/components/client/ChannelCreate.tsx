import {
  Flex,
  cn,
  Body,
  Card,
  Headline,
  BodyLarge,
} from "@river/design-system";
import Image from "next/image";
import { ChannelModal } from "./AddToChannelModal";
import { shortenAddress } from "../../utils";
import { Hex } from "viem";
import { Channel } from "../../gql/sdk.generated";
import { ipfsToHttps } from "../../utils";
import { useState } from "react";
import { ChannelUri } from "./ChannelUri/ChannelUri";

export function ChannelCreate({
  channels,
  name,
  setName,
  description,
  setDescription,
}: {
  channels?: Channel;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [cid, setCid] = useState<string>("");

  return (
    <Flex className="gap-x-10 h-[248px]">
<Card size="lg" className="relative bg-gray-400 w-[300px] h-[300px]">
  <Image
    className="object-cover aspect-square bg-gray-400"
    
    src={
      cid
        ? `https://ipfs.io/ipfs/${cid}`
        : ipfsToHttps(channels?.contractUri?.image as string)
    }
    alt={
      channels?.contractUri?.name
        ? channels?.contractUri?.name
        : "Channel name missing"
    }
    fill
  />
</Card>

      {/* Channel settings */}
      {/* Second Column: Text details */}
      <Flex className="h-full flex-col justify-between cursor-default">
        <div></div>
        <div className="">
        <Headline className="font-medium text-label">
  {name || "Channel name missing"}
</Headline>
<Body className="text-label-muted">
  {description || ""}
</Body>
        </div>
        <ChannelUri
          cid={cid}
          setCid={setCid}
          name={name}
          setName={setName}
          description={description}
          setDescription={setDescription}
        />
      </Flex>
    </Flex>
  );
}