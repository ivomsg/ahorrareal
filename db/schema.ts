import { integer, index, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const priceHistory = sqliteTable(
  "price_history",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    itemId: text("item_id").notNull(),
    title: text("title").notNull(),
    price: integer("price").notNull(),
    originalPrice: integer("original_price"),
    currency: text("currency").notNull().default("CLP"),
    permalink: text("permalink").notNull().default(""),
    thumbnail: text("thumbnail"),
    seller: text("seller"),
    shipping: text("shipping"),
    observedAt: text("observed_at").notNull(),
  },
  (table) => ({
    itemObservedIdx: index("idx_price_history_item_observed").on(
      table.itemId,
      table.observedAt,
    ),
  }),
);
