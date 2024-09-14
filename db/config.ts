import { defineDb, defineTable, column } from 'astro:db';
import { createId } from '@paralleldrive/cuid2';

const randID = createId();

const Paste = defineTable({
  columns: {
    id: column.text({ primaryKey: true, default: randID }),
    paste: column.text(),
  }
})

export default defineDb({
  tables: { Paste },
})