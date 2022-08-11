import { LayoutProps, Head } from "rakkasjs";
import "../css/styles.css";

export default function MainLayout({ children }: LayoutProps) {
    return (
        <>
            <Head title="Basedbin">
                <html lang="en" />
                <meta name="description" content="Some posts for a website" />
            </Head>
            <div className="container">
                <div className="column-100">
                    {children}
                </div>
            </div>
        </>
    )
}