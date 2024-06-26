import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/DocsPage/CodeBlock";
import React from "react";
import { AlertDialog } from "@/components/hexta-ui/AlertDialog";

import { Table } from "@/components/hexta-ui/Table";
import { useState } from "react";
import { InstallationSteps } from "@/components/utils/InstallationSteps";
import { DocsHeader } from "@/components/utils/DocsHeader";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";

const alertdialog = () => {
  const [showDialog, setShowDialog] = useState(false);

  const handleConfirm = () => {
    console.log("Action confirmed");
    setShowDialog(false);
  };

  const handleCancel = () => {
    console.log("Action canceled");
    setShowDialog(false);
  };
  const data = [
    {
      propName: "title",
      propType: "string",
      defaultValue: "null",
      description: "Title of the dialog.",
    },
    {
      propName: "message",
      propType: "string",
      defaultValue: "null",
      description: "Message of the dialog.",
    },
    {
      propName: "onConfirm",
      propType: "function",
      defaultValue: "null",
      description: "Function to be called on confirm.",
    },
    {
      propName: "onCancel",
      propType: "function",
      defaultValue: "null",
      description: "Function to be called on cancel.",
    },
    {
      propName: "isOpen",
      propType: "boolean",
      defaultValue: "false",
      description: "State to open the dialog.",
    },
    {
      propName: "className",
      propType: "string",
      defaultValue: "null",
      description: "Custom class name for the dialog.",
    },
  ];
  const columns = [
    {
      label: "Prop Name",
      key: "propName",
    },
    {
      label: "Prop Type",
      key: "propType",
    },
    {
      label: "Default Value",
      key: "defaultValue",
    },
    {
      label: "Description",
      key: "description",
    },
  ];
  return (
    <>
      <DocsSEO
        title="Alert Dialog - HextaUI ✨"
        description="A modal dialog that interrupts the user with important content and expects a response."
        image="https://i.imgur.com/KKUqpjL.png"
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Alert Dialog"
            description=" A modal dialog that interrupts the user with important content and
              expects a response."
          />
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Preview</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem]">
                  <button
                    className="px-[20px] py-[8px] text-white rounded-lg flex items-center font-[600] text-[14px] hover:bg-zinc-950 transition-all duration-[0.4s] border border-zinc-900"
                    onClick={() => setShowDialog(true)}
                  >
                    Show Dialog
                  </button>

                  <AlertDialog
                    title="Are you sure?"
                    message="Rethink, This action cannot be undone."
                    onConfirm={handleConfirm}
                    onCancel={handleCancel}
                    isOpen={showDialog}
                  />
                </div>
              </div>
            </div>
            <InstallationSteps component="AlertDialog" />
            <div className="installation">
              <h3 className="h3">Usage</h3>
              <CodeBlock
                lang="tsx"
                filename="home.tsx"
                code={`import { useState } from "react";

export const Home = () => {
  const [showDialog, setShowDialog] = useState(false);

  const handleConfirm = () => {
    console.log("Action confirmed");
    setShowDialog(false);
  };

  const handleCancel = () => {
    console.log("Action canceled");
    setShowDialog(false);
  };

  return (
    <>
      <button
        className="px-[20px] py-[8px] text-white rounded-lg flex items-center font-[600] text-[14px] hover:bg-zinc-950 transition-all duration-[0.4s] border border-zinc-900"
        onClick={() => setShowDialog(true)}
      >
        Show Dialog
      </button>

      <AlertDialog
        title="Are you sure?"
        message="Rethink, This action cannot be undone."
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        isOpen={showDialog}
      />
    </>
  );
};`}
              />
            </div>
          </div>
          <div className="mt-[5rem]">
            <Table
              columns={columns}
              data={data}
              tableTitle="Props Information"
            />
          </div>{" "}
        </main>
      </DocsLayout>
    </>
  );
};

export default alertdialog;
