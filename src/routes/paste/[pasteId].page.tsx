import { Link, PageProps, useServerSideQuery } from "rakkasjs";
import { db } from "src/data/db";

export default function ResultPage({ params }: PageProps) {

    const query = useServerSideQuery(async () => {

        const information = await db.get(params.pasteId);

        return String(information!.data);
    })

	return (
		<>
            <section>
                <h1>Result</h1>
            </section>
            <section>
                <strong><p>Paste Data</p></strong>
                <fieldset>
                    <textarea className="textarea" rows={20} value={query.data} readOnly></textarea>
                </fieldset>
            </section>
            <section>
                <strong><p>Paste Data as Code Block</p></strong>
                <pre>
                    <code>{query.data}</code>
                </pre>
            </section>
            <section>
                <Link href="/">
                    <button className="button button-outline">Add a Paste</button>
                </Link>
            </section>
        </>
	);
}