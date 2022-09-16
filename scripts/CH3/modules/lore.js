import { getScore } from "../events/onTick.js";
import {
  world,
  ItemStack,
  MinecraftEnchantmentTypes,
  MinecraftItemTypes,
  Player,
  BlockLocation,
  Location,
  MinecraftEffectTypes,
  TickEvent,
  MinecraftBlockTypes
} from "mojang-minecraft";


world.events.tick.subscribe(() => {
  for(const player of world.getPlayers()) {
    const slot = player.selectedSlot;
    const newItem = player.getComponent("inventory").container.getItem(slot);
    if(newItem?.id != "minecraft:diamond_pickaxe") continue;
    newItem.setLore([
    `§e§lMerchant: ${getScore(player, "Merchant")}`,
    `§bGem Finder: ${getScore(player, "GemFinder")}`
]);
    player.getComponent("minecraft:inventory").container.setItem(slot, newItem);
  }
});
