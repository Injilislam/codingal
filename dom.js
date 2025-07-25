// 🎒 Backpack items (Array)
let backpack = ["Notebook", "Pen", "Charger"];

// 📂 Backpack Details (Object)
let backpackDetails = {
  capacity: "15L",
  color: "black",
  compartments: 3
};

// 🧩 Display items
function showItems() {
  console.log("Current Items:", backpack.join(", "));
}

// 🪄 Add item
function addItem(item) {
  backpack.push(item);
  console.log(`${item} added.`);
  showItems();
}

// 🧹 Remove last item
function removeItem() {
  const removed = backpack.pop();
  console.log(`${removed} removed.`);
  showItems();
}

// 🔑 Show object keys
function showBackpackKeys() {
  console.log("Backpack Details Keys:", Object.keys(backpackDetails).join(", "));
}

// 📦 Run simulation
showItems();
addItem("Water Bottle");
removeItem();
showBackpackKeys();
