import Image from "@tiptap/extension-image";
import Subscript from "@tiptap/extension-subscript";
import TextAlign from "@tiptap/extension-text-align";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import questao from "@/assets/questao-exemplo.json";
import { useState } from "react";
import { Menu } from "./Menu";
import { Button } from "./ui/button";

export function Tiptap() {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Image,
            Subscript,
            TextAlign.configure({
                types: ["heading", "paragraph"],
            }),
        ],
        content: questao,
    });

    const [json, setJson] = useState<string>(JSON.stringify(questao, null, 2));

    const visualizarJson = () => {
        if (editor) {
            const jsonData = editor.getJSON();
            setJson(JSON.stringify(jsonData, null, 2));
        }
    };

    return (
        <>
            <Menu editor={editor} />

            <EditorContent editor={editor} className="border-2 rounded-md p-3 max-w-[700px] bg-white" />

            <Button onClick={visualizarJson}>Atualizar JSON</Button>
            <div className="p-3 bg-gray-900 text-gray-100 rounded-md overflow-auto text-sm font-mono">
                <pre>{json}</pre>
            </div>
        </>
    );
}
