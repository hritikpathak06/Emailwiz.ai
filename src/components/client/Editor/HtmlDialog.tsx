import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CopyPlusIcon } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

const HtmlDialog = ({ openDialog, htmlCode, closeDialog }: any) => {
  const handleCopyText = async () => {
    await navigator.clipboard.writeText(htmlCode);
    alert("Text Copied");
  };

  return (
    <Dialog open={openDialog} onOpenChange={closeDialog}>
      <DialogContent className="w-full max-w-2xl h-[80vh] p-4">
        <DialogHeader className="mb-2">
          <DialogTitle>
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">HTML Generated Code 😎</h2>
              <Button onClick={handleCopyText} size="icon" className="h-8 w-8">
                <CopyPlusIcon className="h-4 w-4" />
              </Button>
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="flex-1 h-auto overflow-hidden rounded-md bg-zinc-950">
          <div className="h-full  overflow-auto">
            <SyntaxHighlighter
              language="html"
              style={dark}
              customStyle={{
                margin: 0,
                padding: "1rem",
                background: "transparent",
                fontSize: "0.9rem",
                lineHeight: "1.4",
                height: "100%",
              }}
              wrapLongLines={true}
            >
              {htmlCode}
            </SyntaxHighlighter>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HtmlDialog;
