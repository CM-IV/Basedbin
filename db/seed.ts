import { createId } from '@paralleldrive/cuid2';
import { db, Paste } from 'astro:db';

export default async function() {

  await db.insert(Paste).values([
    { id: createId(), paste: 'Hope you like Astro DB!' },
    { id: createId(), paste: 'Enjoy!'},
  ])
}