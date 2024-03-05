import { dungeon } from "./index.js";

// test("Strength > 50 and IQ > 90", () => {
//   expect(dungeon(90, 100)).toBe("🦸‍♂️⚔💰💍👑");
// });

// test("Strength > 90 and IQ > 70", () => {
//   expect(dungeon(90, 70)).toBe("🦸‍♂️⚔🚑");
// });

// test("Strength > 40 and IQ > 120", () => {
//   expect(dungeon(40, 120)).toBe("🦸‍♂️🐍💰💍👑");
// });

// test("Strength > 30 and IQ > 70", () => {
//   expect(dungeon(30, 70)).toBe("💀");
// });

test("Strength > 50 and IQ > 90", () => {
  expect(dungeon(90, 100, "🦸‍♂️")).toBe("🦸‍♂️⚔💰💍👑");
});

test("Strength > 90 and IQ > 70", () => {
  expect(dungeon(90, 70, "🦸‍♂️")).toBe("🦸‍♂️⚔🚑");
});

test("Strength > 40 and IQ > 120", () => {
  expect(dungeon(40, 120, "🦸‍♂️")).toBe("🦸‍♂️🐍💰💍👑");
});

test("Strength > 30 and IQ > 70", () => {
  expect(dungeon(30, 70, "🦸‍♂️")).toBe("💀");
});
