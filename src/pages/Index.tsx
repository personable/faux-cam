import styled from "styled-components";
import { Text, Table, TimeStamp } from "@companycam/slab-web";
import { createColumnHelper } from "@tanstack/react-table";
import { Navigation } from "@/components/Navigation";

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
`;

const MainContent = styled.main`
  flex: 1;
  background: var(--cc_color_background_1);
  padding: var(--cc_size_spacing_xl);
  overflow-y: auto;
`;

type Lead = {
  name: string;
  company: string;
  lastUpdated: string;
};

const data: Lead[] = [
  { name: "Sarah Mitchell", company: "Apex Roofing Co.", lastUpdated: "Feb 12, 2026 at 3:45 PM" },
  { name: "Marcus Johnson", company: "Greenfield Landscaping", lastUpdated: "Feb 10, 2026 at 11:20 AM" },
  { name: "Diana Reeves", company: "Summit Contractors", lastUpdated: "Feb 8, 2026 at 9:05 AM" },
];

const columnHelper = createColumnHelper<Lead>();

const columns = [
  columnHelper.accessor("name", {
    header: "Name",
    cell: (info) => <Text as="span" size="s" weight={600}>{info.getValue()}</Text>,
  }),
  columnHelper.accessor("company", {
    header: "Company",
    cell: (info) => <Text as="span" size="s" color="subtle">{info.getValue()}</Text>,
  }),
  columnHelper.accessor("lastUpdated", {
    header: "Last Updated",
    cell: (info) => <TimeStamp size="small">{info.getValue()}</TimeStamp>,
  }),
];

const Index = () => {
  return (
    <AppContainer>
      <Navigation />
      <MainContent>
        <Text as="h1" size="xxl" family="heading" ccMargin="0 0 l">
          Leads
        </Text>
        <Table
          defaultData={data}
          columns={columns}
          columnSizes={["medium", "medium", "medium"]}
          defaultSortedColumns={[{ id: "name", desc: false }]}
        />
      </MainContent>
    </AppContainer>
  );
};

export default Index;
