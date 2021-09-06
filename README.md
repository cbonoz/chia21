<p align='center'>
    <img src="./img/chiaspace_3_2.png" width=400/>
</p>

# Chia-Space

Converts any coin built on Chia to be treatable as a purchasable and tradeable NFT.

Built for the Build on Chia hackathon. Going after the 'Improved NFT' category.

Slides: https://docs.google.com/presentation/d/1Vb4PSAf5_2Hm5rlaL4zCIEeAncJ1iyX_QXR7_cytg_I/edit?usp=sharing

<!-- Demo:  -->

## Motivation

Platforms such as opensea exist for NFT discovery on ethereum-based platforms. This project can serve as an open source base for Chia NFTs.

End goal would be to host this as a project and begin accepting user uploads with payable addresses and shareable links.

- Increase adoption of non-ethereum based NFTs.
- Leverage Chia's representation of NFTs as coins to reduce friction in transfering and issuing new NFTs.
- Attach file assets to Chia coins without additional work or friction.
- User GUI for managing wallet and creating a listing.

## How it works

- Converts a chia coin into a tradeable NFT by attaching hosted image files.
- Stores entries for Chiaspace in a centralized DB for the marketplace (could be distributed storage potentially).
- Attaches pngs to Chia coin addresses / puzzle hashes using IPFS.
- Enable searching through existing coins based on name rather than puzzlehash.

## Challenges

- Running chia node locally for RPC calls (would be useful to have hosted tested url's similarly to infura).
- Integrating Chia wallet (in future work). Currently key would need to be provided to issue RPC calls directly.

## Future Work

- Deploy requires dedicated chia node to answer RPC requests.
- Need integrated wallet for sign on (ideally something similar to metamask).
- Needs implementation

While not a ChiaLisp implementation, I hope this prototype qualifies for hackathon purposes around improving NFT!

## Screenshots

<!-- TODO -->

## Dev notes

- https://chiaforum.com/t/dfi-digital-farming-initiative-the-first-chia-nft-marketplace/12704
-

## Preview

```bash
$ npm install
$ npm start
```

or:

```bash
$ yarn
$ yarn start
```
