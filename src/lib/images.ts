type Host = "images" | "plus";
export type Photo = { host: Host; id: string };

function url(host: Host, id: string, w: number, q = 80) {
  const base = host === "images" ? "images.unsplash.com" : "plus.unsplash.com";
  return `https://${base}/${id}?w=${w}&q=${q}&auto=format&fit=crop`;
}

/**
 * Curated Unsplash photo library for the Fitbox editorial. Grouped by the
 * moment/mood each shot serves so sections can pull a coherent set instead
 * of repeating the same frame twice.
 */
export const photos: Record<string, Photo[]> = {
  overheadSpread: [
    { host: "plus", id: "premium_photo-1677666509899-7c8cbc69ddc5" },
    { host: "images", id: "photo-1535473895227-bdecb20fb157" },
    { host: "images", id: "photo-1633195000232-ca6e3cbcfd41" },
    { host: "images", id: "photo-1602097944182-c43423a8056d" },
    { host: "plus", id: "premium_photo-1723291252333-e37e3d779580" },
    { host: "images", id: "photo-1690983322070-22861e13ce47" },
  ],
  breakfast: [
    { host: "images", id: "photo-1528207776546-365bb710ee93" },
    { host: "images", id: "photo-1597249637214-a85d31f434d6" },
    { host: "images", id: "photo-1606149186228-4e5ac94a742e" },
    { host: "images", id: "photo-1630661297756-15265d08960d" },
    { host: "images", id: "photo-1579592853658-21155196c4df" },
    { host: "images", id: "photo-1528301392571-0dfab3c00216" },
    { host: "images", id: "photo-1594491084435-07c418f83735" },
    { host: "plus", id: "premium_photo-1663854478296-dd00b6257021" },
  ],
  lunch: [
    { host: "images", id: "photo-1566918214014-a3b3e0132267" },
    { host: "images", id: "photo-1594254916028-742dedb72062" },
    { host: "images", id: "photo-1633945488458-f8cc1f3a0144" },
    { host: "images", id: "photo-1707056503922-91c9ebaf0774" },
    { host: "images", id: "photo-1561560562-900846ccf8ef" },
    { host: "images", id: "photo-1695712468478-789ccc733903" },
    { host: "images", id: "photo-1673238114980-47d4e9cc793e" },
  ],
  dinner: [
    { host: "images", id: "photo-1543339308-43e59d6b73a6" },
    { host: "images", id: "photo-1606757819934-d61a9f7279d5" },
    { host: "images", id: "photo-1631311695255-8dde6bf96cb5" },
    { host: "images", id: "photo-1646487793655-bbf280273d2f" },
    { host: "images", id: "photo-1606791422814-b32c705e3e2f" },
    { host: "images", id: "photo-1518133299975-8e1b628e1cfd" },
    { host: "images", id: "photo-1614648692330-eb129aeb6880" },
    { host: "images", id: "photo-1620019989479-d52fcedd99fe" },
  ],
  dessert: [
    { host: "plus", id: "premium_photo-1716152295684-21731e330e36" },
    { host: "images", id: "photo-1606313564200-e75d5e30476c" },
    { host: "images", id: "photo-1624353365286-3f8d62daad51" },
    { host: "images", id: "photo-1588539543889-20cc7ce4df55" },
    { host: "images", id: "photo-1606884285898-277317a7bf12" },
    { host: "images", id: "photo-1623659945109-a0ab8cee7762" },
    { host: "images", id: "photo-1461009312844-e80697a81cc7" },
    { host: "images", id: "photo-1654796605330-8a1248a2cb07" },
  ],
  airFryer: [
    { host: "plus", id: "premium_photo-1672192166833-c8ae84e5e127" },
    { host: "images", id: "photo-1695089028114-ce28248f0ab9" },
    { host: "images", id: "photo-1621955293419-2655068eee84" },
    { host: "images", id: "photo-1745846664210-756817e1b19c" },
    { host: "plus", id: "premium_photo-1711725196376-9f1bb3db3093" },
    { host: "images", id: "photo-1627670381055-487000952cb0" },
    { host: "images", id: "photo-1544027657-36ca1f4a0a4f" },
    { host: "images", id: "photo-1700406901630-be74b14dbb5e" },
  ],
  ingredients: [
    { host: "images", id: "photo-1636647511729-6703539ba71f" },
    { host: "images", id: "photo-1556911073-52527ac43761" },
    { host: "images", id: "photo-1518291344630-4857135fb581" },
    { host: "images", id: "photo-1591189863430-ab87e120f312" },
    { host: "images", id: "photo-1605522283494-4901a98d458e" },
    { host: "images", id: "photo-1744104135578-6768f2061be1" },
    { host: "images", id: "photo-1577048982768-5cb3e7ddfa23" },
    { host: "images", id: "photo-1588467850695-a898367ce465" },
    { host: "images", id: "photo-1516824711718-9c1e683412ac" },
    { host: "images", id: "photo-1589985269035-ab4c827b76e0" },
  ],
  hands: [
    { host: "plus", id: "premium_photo-1671377387797-8d3307a546a6" },
    { host: "images", id: "photo-1528712306091-ed0763094c98" },
    { host: "images", id: "photo-1653233797467-1a528819fd4f" },
    { host: "images", id: "photo-1514986888952-8cd320577b68" },
    { host: "images", id: "photo-1507048331197-7d4ac70811cf" },
    { host: "images", id: "photo-1551218808-94e220e084d2" },
    { host: "images", id: "photo-1549590143-d5855148a9d5" },
  ],
  cookbook: [
    { host: "images", id: "photo-1542010589005-d1eacc3918f2" },
    { host: "images", id: "photo-1627907228175-2bf846a303b4" },
    { host: "images", id: "photo-1495546968767-f0573cca821e" },
    { host: "images", id: "photo-1589152144820-692b189e0b34" },
    { host: "images", id: "photo-1547516508-4c1f9c7c4ec3" },
    { host: "images", id: "photo-1602516095206-3365caa029e4" },
    { host: "images", id: "photo-1589152145119-9f9a33d49772" },
    { host: "images", id: "photo-1541377391972-03ee2fe4c4a5" },
    { host: "images", id: "photo-1695716482432-6ea93a903675" },
    { host: "images", id: "photo-1655967022634-c43eeb8c07b1" },
  ],
  grocery: [
    { host: "plus", id: "premium_photo-1664551734602-49640bd82eba" },
    { host: "images", id: "photo-1628102491629-778571d893a3" },
    { host: "images", id: "photo-1609842947419-ba4f04d5d60f" },
    { host: "images", id: "photo-1418669112725-fb499fb61127" },
    { host: "images", id: "photo-1596776572010-93e181f9fc07" },
    { host: "images", id: "photo-1690934164598-99267828e900" },
  ],
  snack: [
    { host: "images", id: "photo-1621797350488-fb28c9217e3b" },
    { host: "images", id: "photo-1654923064926-be7e64267a31" },
    { host: "images", id: "photo-1627308595228-9d0497edbe74" },
    { host: "images", id: "photo-1684403620650-81dc661a69db" },
    { host: "images", id: "photo-1498507297833-5373e346b4e0" },
    { host: "images", id: "photo-1590301157284-ab2f8707bdc1" },
    { host: "images", id: "photo-1590288488147-f46142daf112" },
  ],
};

export function img(entry: Photo, w = 1600, q = 80) {
  return url(entry.host, entry.id, w, q);
}

export function pick<T>(list: readonly T[], index: number): T {
  return list[index % list.length];
}
