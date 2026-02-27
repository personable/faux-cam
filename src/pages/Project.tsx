import { useState } from "react";
import styled from "styled-components";
import { Text, Button, ButtonIconCondensed, Badge } from "@companycam/slab-web";
import { Navigation } from "@/components/Navigation";

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
`;

const MainContent = styled.main`
  flex: 1;
  background: var(--cc_color_background_1);
  overflow-y: auto;
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--cc_size_spacing_m) var(--cc_size_spacing_l);
`;

const BackLink = styled.button`
  display: flex;
  align-items: center;
  gap: var(--cc_size_spacing_xs);
  background: none;
  border: none;
  color: var(--cc_color_text_subtle);
  cursor: pointer;
  font-size: var(--cc_size_text_s);
  font-family: inherit;
  padding: 0;

  &:hover {
    color: var(--cc_color_text_default);
  }
`;

const TopBarActions = styled.div`
  display: flex;
  align-items: center;
  gap: var(--cc_size_spacing_m);
`;

const TopBarAction = styled.button`
  background: none;
  border: none;
  color: var(--cc_color_text_subtle);
  cursor: pointer;
  font-size: var(--cc_size_text_s);
  font-family: inherit;
  font-weight: 600;
  padding: var(--cc_size_spacing_xs) var(--cc_size_spacing_s);

  &:hover {
    color: var(--cc_color_text_default);
  }
`;

const ProjectHeader = styled.div`
  padding: var(--cc_size_spacing_l) var(--cc_size_spacing_xl) 0;
`;

const AddressLink = styled.a`
  color: var(--cc_color_text_subtle);
  font-size: var(--cc_size_text_s);
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: var(--cc_color_text_default);
  }
`;

const AddLabelsButton = styled.button`
  display: flex;
  align-items: center;
  gap: var(--cc_size_spacing_xs);
  background: none;
  border: none;
  color: var(--cc_color_link_default);
  cursor: pointer;
  font-size: var(--cc_size_text_s);
  font-family: inherit;
  padding: 0;
  margin-top: var(--cc_size_spacing_s);

  &:hover {
    text-decoration: underline;
  }
`;

const TabsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0;
  padding: 0 var(--cc_size_spacing_xl);
  margin-top: var(--cc_size_spacing_l);
  border-bottom: 1px solid var(--cc_color_border_default);
`;

const Tab = styled.button<{ $active?: boolean }>`
  background: none;
  border: none;
  border-bottom: 2px solid ${({ $active }) => ($active ? "var(--cc_color_link_secondary)" : "transparent")};
  color: ${({ $active }) => ($active ? "var(--cc_color_link_secondary)" : "var(--cc_color_link_subtle)")};
  font-weight: 400;
  font-size: var(--cc_size_text_m);
  font-family: inherit;
  padding: var(--cc_size_spacing_m);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: var(--cc_size_spacing_xs);
  white-space: nowrap;

  &:hover {
    color: var(--cc_color_link_secondary);
  }
`;

const ContentArea = styled.div`
  padding: var(--cc_size_spacing_xl);
`;

const EmptyCard = styled.div`
  background: var(--cc_color_background_2);
  border: 1px solid var(--cc_color_border_default);
  border-radius: var(--cc_size_border_radius_l);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--cc_size_spacing_xxxl) var(--cc_size_spacing_xl);
  text-align: center;
  min-height: 300px;
  gap: var(--cc_size_spacing_m);
`;

const tabs = [
  { id: "photos", label: "Photos", count: 0 },
  { id: "activity", label: "Activity", count: 0, badge: true },
  { id: "pages", label: "Pages", count: 0 },
  { id: "files", label: "Files", count: 0 },
  { id: "payments", label: "Payments", count: 0 },
  { id: "checklists", label: "Checklists", count: 0 },
  { id: "reports", label: "Reports", count: 0 },
];

const Project = () => {
  const [activeTab, setActiveTab] = useState("payments");

  return (
    <AppContainer>
      <Navigation />
      <MainContent>
        <TopBar>
          <BackLink>
            <i className="mdi mdi-chevron-left" />
            Projects
          </BackLink>
          <TopBarActions>
            <ButtonIconCondensed iconName="star-outline" accessibilityLabel="Favorite" color="subtle" />
            <TopBarAction>Share</TopBarAction>
            <TopBarAction>Showcase This Project</TopBarAction>
            <TopBarAction>Request Review</TopBarAction>
            <ButtonIconCondensed
              iconName="dots-horizontal"
              accessibilityLabel="More options"
              color="subtle"
              shape="circle"
            />
          </TopBarActions>
        </TopBar>

        <ProjectHeader>
          <Text as="h1" size="xxl" family="heading" weight={700}>
            Some New Project
          </Text>
          <AddressLink>5501 Cavvy Rd · Lincoln, NE 68516</AddressLink>
          <AddLabelsButton>
            <i className="mdi mdi-label-outline" />
            Add Labels
          </AddLabelsButton>
        </ProjectHeader>

        <TabsContainer>
          {tabs.map((tab) => (
            <Tab key={tab.id} $active={activeTab === tab.id} onClick={() => setActiveTab(tab.id)}>
              {tab.label} ({tab.count})
              {tab.badge && (
                <Badge size="small" iconName="flask">
                  BETA
                </Badge>
              )}
            </Tab>
          ))}
        </TabsContainer>

        <ContentArea>
          <EmptyCard>
            <Text as="h2" size="l" family="heading" weight={700}>
              Start taking pictures in the mobile app.
            </Text>
            <Text as="p" size="s" color="subtle">
              All photos and videos taken by your team will appear here, instantly.
            </Text>
            <Button color="primary" icon={{ name: "plus-circle-outline" }} ccMargin="s 0 0">
              Upload Photos
            </Button>
            <Button design="outline" icon={{ name: "account-multiple-outline" }}>
              Assign Users
            </Button>
          </EmptyCard>
        </ContentArea>
      </MainContent>
    </AppContainer>
  );
};

export default Project;
