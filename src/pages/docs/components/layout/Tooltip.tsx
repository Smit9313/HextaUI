import { DocsLayout } from "@/components/DocsPage/DocsLayout";
import { CodeBlock } from "@/components/DocsPage/CodeBlock";
import React from "react";

import { Tooltip } from "@/components/hexta-ui/Tooltip";

import { Badge } from "@/components/hexta-ui/Badge";
import { Table } from "@/components/hexta-ui/Table";
import { InstallationSteps } from "@/components/utils/InstallationSteps";
import { DocsHeader } from "@/components/utils/DocsHeader";
import { DocsSEO } from "@/components/DocsPage/DocsSEO";

const tooltip = () => {
  const data = [
    {
      propName: "direction",
      propType: "string",
      defaultValue: "top",
      description: "Direction of the tooltip.",
    },
    {
      propName: "text",
      propType: "string",
      defaultValue: "null",
      description: "Text to be displayed in the tooltip.",
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
        title="Tooltip - HextaUI ✨"
        description="An awesome component to display tooltip for information."
        image="https://i.imgur.com/TQAInIK.png"
      />
      <DocsLayout>
        <main>
          <DocsHeader
            title="Tooltip"
            description="An awesome component to display tooltip for information."
          />
          <div>
            <div className="flex flex-col gap-4 py-10 preview">
              <div>
                <h3 className="h3">Preview</h3>
                <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem]">
                  <Tooltip direction="top" text="Meow ~">
                    <Badge outlined className="cursor-default">
                      🐈 Hover me
                    </Badge>
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
          <InstallationSteps component="Tooltip" />
          <div>
            <div className="relative flex items-center justify-center my-3 overflow-hidden border border-white border-opacity-10 rounded-2xl preview-container h-[15rem]">
              <Tooltip direction="top" text="Meow ~">
                <Badge outlined className="cursor-default">
                  🐈 Hover me
                </Badge>
              </Tooltip>
            </div>
            <h3 className="h3">Usage</h3>
            <CodeBlock
              lang="tsx"
              filename="Home.tsx"
              code={`<Tooltip direction="top" text="Meow ~">
  <Badge outlined className="cursor-default">
    🐈 Hover me
  </Badge>
</Tooltip>`}
            />
          </div>
          <div className="mt-[5rem]">
            <Table
              columns={columns}
              data={data}
              tableTitle="Props Information"
            />
          </div>
        </main>
      </DocsLayout>
    </>
  );
};

export default tooltip;
