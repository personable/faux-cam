import { useState } from "react";
import styled from "styled-components";
import { Text, Table, TimeStamp, Button, Modal, InputText } from "@companycam/slab-web";
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

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <AppContainer>
      <Navigation />
      <MainContent>
        <Text as="h1" size="xxl" family="heading" ccMargin="0 0 l">
          Leads
        </Text>
        <Button color="primary" onClick={() => setIsModalOpen(true)} ccMargin="0 0 l">
          Open Modal
        </Button>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="New Lead" size="small">
          <InputText id="lead-name" label="Lead Name" placeholder="Enter a name" />
        </Modal>
      </MainContent>
    </AppContainer>
  );
};

export default Index;
