import styled from "styled-components";
import { Text } from "@companycam/slab-web";
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
  return (
    <AppContainer>
      <Navigation />
      <MainContent>
        <Text as="h1" size="xxl" family="heading" ccMargin="0 0 m">
          Hello, World!
        </Text>
        <Text as="p" size="m" color="subtle" family="heading">
          Welcome to your fake CompanyCam application!
        </Text>
      </MainContent>
    </AppContainer>
  );
};

export default Index;
