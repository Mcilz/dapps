import { useState } from 'react';

import { List } from '@/components';
import { useMergedAllNFTs } from '@/hooks';
import { MarketNFT } from '@/types';

const filters = ['All', 'Buy now', 'On auction', 'Has offers'];

function Listings() {
  const { NFTs, isEachNFTRead } = useMergedAllNFTs();
  const [filter, setFilter] = useState('All');

  const getFilteredNft = (nft: MarketNFT) => {
    const { price, auction, offers } = nft;

    switch (filter) {
      case 'Buy now':
        return !!price;
      case 'On auction':
        return !!auction;
      case 'Has offers':
        return Object.keys(offers).length > 0;
      default:
        return nft;
    }
  };

  const filteredNfts = NFTs?.filter(getFilteredNft);

  return (
    <List
      heading="NFT Marketplace"
      filter={{ value: filter, list: filters, onChange: setFilter }}
      NFTs={{ list: filteredNfts, isRead: isEachNFTRead, fallback: 'There are no listings at the moment.' }}
    />
  );
}

export { Listings };
