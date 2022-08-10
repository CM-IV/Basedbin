import { LayoutProps, Head } from "rakkasjs";
import "../css/mystyles.css";

export default function MainLayout({ children }: LayoutProps) {
    return (
        <>
            <Head title="Basedbin">
                <html lang="en" />
                <meta name="description" content="Some posts for a website" />
            </Head>
            <div className="container">
                <div className="columns is-centered">
                    <div className="column is-full">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}