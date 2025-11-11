import { Tiptap } from "./components/Tiptap";

function App() {
    return (
        <>
            <main className="flex flex-col items-center space-y-4 p-10">
                <h1 className="text-2xl font-bold">Editor de texto</h1>
                <Tiptap />
            </main>
        </>
    );
}

export default App;
