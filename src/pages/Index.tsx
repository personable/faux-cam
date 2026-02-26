import { useState } from "react";
import styled from "styled-components";
import { Text, Button, Modal, InputText, InputTextArea, InputSelectHTML } from "@companycam/slab-web";
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

const FormRow = styled.div`
  display: flex;
  gap: var(--cc_size_spacing_m);
`;

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <AppContainer>
      <Navigation />
      <MainContent>
        <Text as="h1" size="xxl" family="heading" ccMargin="0 0 l">
          Faux Cam
        </Text>
        <Button color="primary" onClick={() => setIsModalOpen(true)} ccMargin="0 0 l">
          Open Modal
        </Button>
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Contact Information"
          size="medium"
          footerActions={
            <>
              <Button design="outline" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button color="primary" onClick={() => setIsModalOpen(false)}>
                Save
              </Button>
            </>
          }
        >
          <FormRow>
            <InputText id="first-name" label="First Name" placeholder="Enter first name" />
            <InputText id="last-name" label="Last Name" placeholder="Enter last name" />
          </FormRow>
          <InputText id="email" label="Email" type="email" placeholder="Enter email address" />
          <InputText id="phone" label="Phone" type="tel" placeholder="Enter phone number" />
          <InputText id="company" label="Company" placeholder="Enter company name" />
          <InputText id="job-title" label="Job Title" placeholder="Enter job title" />
          <InputSelectHTML
            id="contact-type"
            label="Contact Type"
            options={[
              { label: "Select a type...", value: "", disabled: true },
              { label: "Client", value: "client" },
              { label: "Vendor", value: "vendor" },
              { label: "Partner", value: "partner" },
              { label: "Other", value: "other" },
            ]}
            defaultValue=""
          />
          <InputTextArea id="notes" label="Notes" placeholder="Additional notes..." />
        </Modal>
      </MainContent>
    </AppContainer>
  );
};

export default Index;
