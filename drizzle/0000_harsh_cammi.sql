CREATE TABLE `price_history` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`item_id` text NOT NULL,
	`title` text NOT NULL,
	`price` integer NOT NULL,
	`original_price` integer,
	`currency` text DEFAULT 'CLP' NOT NULL,
	`permalink` text DEFAULT '' NOT NULL,
	`thumbnail` text,
	`seller` text,
	`shipping` text,
	`observed_at` text NOT NULL
);
--> statement-breakpoint
CREATE INDEX `idx_price_history_item_observed` ON `price_history` (`item_id`,`observed_at`);