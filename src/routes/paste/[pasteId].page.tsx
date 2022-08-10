import { PageProps, useServerSideQuery } from "rakkasjs";
import { db } from "src/data/db";

export default function ResultPage({ params }: PageProps) {

    const query = useServerSideQuery(async () => {

        const information = await db.get(params.pasteId);

        return String(information!.data);
    })

	return (
		<>
            <section className="hero is-info mt-4">
                <div className="hero-body">
                    <h1 className="title">Result</h1>
                </div>
            </section>
            <section className="section">
                <h2 className="subtitle">Paste Data</h2>
                <div className="control">
                    <textarea className="textarea has-fixed-size" rows={20} value={query.data} readOnly></textarea>
                </div>
            </section>
            <section className="section">
                <h2 className="subtitle">Pre-formatted Paste Data</h2>
                <pre>{query.data}</pre>
            </section>
        </>
	);
}