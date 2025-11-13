import { useCallback } from "react";
import { Button } from "./ui/button";
import { Image, AlignCenter, AlignLeft, AlignRight, Bold, Italic } from "lucide-react";
import type { Editor } from "@tiptap/react";

export function Menu({ editor }: { editor: Editor }) {
    const aplicarEstiloCitacao = () => editor.chain().focus().toggleSubscript().run();

    const aplicarAlternativas = () => editor.chain().focus().toggleOrderedList().run();

    const aplicarNegrito = () => editor.chain().focus().toggleBold().run();
    const aplicarItalico = () => editor.chain().focus().toggleItalic().run();

    const aplicarAlinhamentoEsquerdo = () => editor.chain().focus().setTextAlign("left").run();
    const aplicarAlinhamentoCentro = () => editor.chain().focus().setTextAlign("center").run();
    const aplicarAlinhamentoDireito = () => editor.chain().focus().setTextAlign("right").run();

    const aplicarImagem = useCallback(() => {
        const url = window.prompt("URL da imagem");
        if (url && editor) {
            editor.chain().focus().setImage({ src: url }).run();
        }
    }, [editor]);

    if (!editor) return null;

    return (
        <header className="flex items-center flex-wrap space-x-5">
            <div className="space-x-1">
                <Button onClick={aplicarEstiloCitacao}>Citação</Button>
                <Button onClick={aplicarAlternativas}>Alternativas</Button>
            </div>
            <div className="space-x-1">
                <Button onClick={aplicarNegrito}>
                    <Bold />
                </Button>
                <Button onClick={aplicarItalico}>
                    <Italic />
                </Button>
            </div>
            <div className="space-x-1">
                <Button onClick={aplicarAlinhamentoEsquerdo}>
                    <AlignLeft />
                </Button>
                <Button onClick={aplicarAlinhamentoCentro}>
                    <AlignCenter />
                </Button>
                <Button onClick={aplicarAlinhamentoDireito}>
                    <AlignRight />
                </Button>
            </div>
            <Button onClick={aplicarImagem}>
                <Image />
            </Button>
        </header>
    );
}
