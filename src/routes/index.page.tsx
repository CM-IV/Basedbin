import { ActionContext, ActionResult } from "rakkasjs";
import { db } from "src/data/db";
import crypto from "crypto";

export async function action(ctx: ActionContext): Promise<ActionResult> {
    const pasteData = await ctx.requestContext.request.formData();
    const uploadData = pasteData.get("postData");
    const currTime = new Date(Date.now());
    const theUUID = crypto.randomUUID().toString();

    await db.insert({
        key: theUUID,
        data: uploadData?.toString(),
        uploadedAt: currTime.toLocaleDateString()
    });

    return {
        redirect: `/paste/${theUUID}`
    }

}

export default function HomePage() {

	return (
		<>
            <section>
                <h1 className="title">Basedbin</h1>
                <p>By CM-IV</p>
            </section>
            <section>
                <form method="post">
                    <fieldset> 
                        <textarea name="postData" rows={15} className="textarea" placeholder="Paste your info here" required></textarea>
                    </fieldset>
                    <button className="button" type="submit">Submit</button>
                </form>
            </section>
        </>
	);
}