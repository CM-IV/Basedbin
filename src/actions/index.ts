import { defineAction } from "astro:actions";
import { z } from 'astro:schema';
import { db, Paste } from 'astro:db';

export const server = {
    pasteInfo: defineAction({
        accept: "form",
        input: z.object({
            paste: z.string()
        }),
        handler: async (input) => {
            const pasteNum = await db.insert(Paste).values(input).returning({ pasteId: Paste.id });
            console.log(pasteNum[0])
            return { id: pasteNum[0].pasteId }
        }
    })
}