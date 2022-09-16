# CH3-Item-Info

<!--- These are examples. See https://shields.io for others or to customize this set of shields. You might want to include dependencies, project status and licence info here --->
<a src="https://discord.gg/qpVXBNryuM">![Discord](https://img.shields.io/discord/975420390081978390)</a>
![Github Followers](https://img.shields.io/github/followers/CrestedHeart3)

CH3 Item Info is a Minecraft add-on that uses gametest. Gametest is a experimental framework that needs to be enabled in your world / realm / server.

## Usage
AddLore > scripts > CH3 > modules > lore.js
```js
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
```
This is where you can add an item to be given lore or add lore to the item in the template. For example if you add another element to the setLore array, it will add a new line. To stay on the same line you need to stay within the same element.

## Contributing to `CH3 Item Info`
To contribute to `CH3 Item Info`, follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin <project_name>/<location>`
5. Create the pull request.

Alternatively see the GitHub documentation on [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## Contributors

Thanks to the following people who have contributed to this project:

* [@CrestedHeart3](https://github.com/CrestedHeart3) 📖.

## Contact

If you want to contact me you can reach me on discord <@CrestedHeart3#0399>.
