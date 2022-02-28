import * as Tabs from "@radix-ui/react-tabs";
import styled from "styled-components";

const TabsRoot = styled(Tabs.Root)`
  display: flex;
  max-width: 20rem;

  &[data-orientation="horizontal"] {
    flex-direction: column;
  }
`;

const TabsList = styled(Tabs.List)`
  flex-shrink: 0;
  display: flex;

  &[data-orientation="vertical"] {
    flex-direction: column;
  }
  background-color: #eee;
`;

const TabsTrigger = styled(Tabs.Trigger)`
  all: unset;
  flex-shrink: 0;
  padding: 0.4em 0.6em;
  font-weight: 500;
  line-height: 1;
  user-select: none;

  &[data-orientation="horizontal"] {
    border-top: 4px solid transparent;
    border-bottom: 4px solid var(--border-color, transparent);
  }

  &[data-orientation="vertical"] {
    padding: 0.6em;
    border-right: 4px solid var(--border-color, transparent);
  }

  &[data-disabled] {
    color: lightgrey;
  }

  &[data-state="active"] {
    --border-color: crimson;
  }

  &:focus {
    --border-color: #111;
    outline: 1px solid var(--border-color);

    &[data-state="active"] {
      --border-color: crimson;
    }
  }
`;

const TabsContent = styled(Tabs.Content)`
  flex-grow: 1;
  padding: 1em;
  border: 1px solid #eee;
  font-weight: 300;
  font-size: 0.85em;
  line-height: 1.65;

  &[data-orientation="horizontal"] {
    border-top: none;
  }

  &[data-orientation="vertical"] {
    border-left: none;
  }
`;

export default function TabExample() {
  return (
    <div>
      <h1>Tabs</h1>
      <TabsRoot defaultValue="tab1" orientation="horizontal">
        <TabsList aria-label="tabs example">
          <TabsTrigger value="tab1">One</TabsTrigger>
          <TabsTrigger value="tab2">Two</TabsTrigger>
          <TabsTrigger value="tab3">Three</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Tab one content</TabsContent>
        <TabsContent value="tab2">Tab two content</TabsContent>
        <TabsContent value="tab3">Tab three content</TabsContent>
      </TabsRoot>
    </div>
  );
}
