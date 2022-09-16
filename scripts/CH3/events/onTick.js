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

/* On Tick */
export function getScore(player, objective) {
  try {
    return parseInt(player.runCommand(`scoreboard players test @s "${objective}" * *`)?.statusMessage?.match(/-?\d+/));
  } catch (e) {
    return 0;
  }
}
