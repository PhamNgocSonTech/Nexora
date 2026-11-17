import { pgTable, uuid, varchar, text, jsonb, integer, timestamp } from 'drizzle-orm/pg-core'

export const portfolioItems = pgTable('portfolio_items', {
  id: uuid('id').defaultRandom().primaryKey(),
  title: varchar('title', { length: 200 }).notNull(),
  description: text('description'),
  techStack: jsonb('tech_stack').$type<string[]>().default([]),
  imageUrl: varchar('image_url', { length: 500 }),
  link: varchar('link', { length: 500 }),
  order: integer('order').default(0),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})