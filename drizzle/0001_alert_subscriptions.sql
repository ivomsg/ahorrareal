CREATE TABLE `alert_subscriptions` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`email` text NOT NULL,
	`product` text DEFAULT 'ofertas generales' NOT NULL,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `idx_alert_subscriptions_email_product` ON `alert_subscriptions` (`email`,`product`);
