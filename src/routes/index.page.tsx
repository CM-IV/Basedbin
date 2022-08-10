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
            <section className="hero is-info mt-4">
                <div className="hero-body">
                    <h1 className="title">Basedbin</h1>
                    <p>By CM-IV</p>
                </div>
            </section>
            <section className="section">
                <form method="post">
                    <div className="field">
                        <textarea name="postData" className="textarea has-fixed-size" placeholder="Paste your info here" rows={20} required></textarea>
                    </div>
                    <div className="field">
                        <button className="button" type="submit">Submit</button>
                    </div>
                </form>
            </section>
        </>
	);
}