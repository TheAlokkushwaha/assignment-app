import React from "react";
import { Card } from "./ui/card";
import { Bold, Italic, Underline, List } from "lucide-react";

const toolbarButtons = [
  { command: "bold", icon: <Bold size={20} />, label: "Bold" },
  { command: "italic", icon: <Italic size={20} />, label: "Italic" },
  { command: "underline", icon: <Underline size={20} />, label: "Underline" },
  { command: "insertUnorderedList", icon: <List size={20} />, label: "List" },
];

const RichTextEditor = () => {
  const handleFormat = (command) => {
    document.execCommand(command, false, null);
  };

  return (
    <div className="p-8">
      <Card className="max-w-4xl mx-auto p-6">
        {/* Toolbar */}
        <div className="mb-4 flex space-x-2">
          {toolbarButtons.map(({ command, icon, label }) => (
            <button
              key={command}
              onClick={() => handleFormat(command)}
              className="p-2 border rounded hover:bg-gray-100"
              aria-label={label}
            >
              {icon}
            </button>
          ))}
        </div>

        {/* Editable Content */}
        <div
          contentEditable
          className="min-h-[200px] border p-4 rounded"
        />
      </Card>
    </div>
  );
};

export default RichTextEditor;
