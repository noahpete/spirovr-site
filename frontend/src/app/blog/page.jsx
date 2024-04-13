import Week1 from "./week1";
import Week2 from "./week2";
import Week3 from "./week3";

export default function Blog() {
    return (
        <main className="min-h-screen pt-16">
            <Week3 />
            <Week2 />
            <Week1 />
        </main>
    );
}