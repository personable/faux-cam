import styled from 'styled-components';
import { ButtonIconCondensed, Avatar, Text, Badge, InputText } from '@companycam/slab-web';

const NavContainer = styled.nav`
  width: 250px;
  height: 100dvh;
  background: var(--cc_color_background_1);
  border-right: 1px solid var(--cc_color_border_default);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const NavHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--cc_size_spacing_m);
  border-bottom: 1px solid var(--cc_color_border_default);
`;

const LogoImage = styled.img`
  width: 32px;
  height: 32px;
  display: block;
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: var(--cc_size_spacing_xs);
`;

const NotificationWrapper = styled.div`
  position: relative;
  margin-inline-end: var(--cc_size_spacing_s);
`;

const NotificationBadge = styled.div`
  position: absolute;
  top: -4px;
  right: -4px;
  background: #ef4e4e;
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 600;
`;

const SearchContainer = styled.div`
  padding: var(--cc_size_spacing_m) var(--cc_size_spacing_m) 0 var(--cc_size_spacing_m);
`;

const NavContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: var(--cc_size_spacing_m) 0;
`;

const NavSection = styled.div`
  margin-bottom: var(--cc_size_spacing_l);
`;

const SectionTitle = styled.div`
  padding: var(--cc_size_spacing_s) var(--cc_size_spacing_m);
  margin-bottom: var(--cc_size_spacing_xs);
  font-size: var(--cc_size_text_xs);
`;

const MenuItem = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: var(--cc_size_spacing_m);
  padding: var(--cc_size_spacing_s) var(--cc_size_spacing_m);
  border: none;
  background: transparent;
  color: var(--cc_color_link_subtle);
  cursor: pointer;
  text-align: left;
  transition: background 0.2s;

  &:hover {
    background: var(--cc_color_background_2);
  }
`;

const MenuIcon = styled.i`
  font-size: 20px;
  color: var(--cc_color_text_subtle);
  width: 20px;
`;

const MenuLabel = styled.span`
  flex: 1;
  font-size: 14px;
`;

const NavFooter = styled.div`
  border-top: 1px solid var(--cc_color_border_default);
  padding: var(--cc_size_spacing_m) 0;
`;

export function Navigation() {
  return (
    <NavContainer className="dark-environment">
      <NavHeader>
        <LogoImage
          src="https://assets.c.companycam.com/vite/assets/CC-Logo-Mark-DqAcdOr2.png"
          alt="CompanyCam"
        />

        <NavActions>
          <ButtonIconCondensed
            iconName="plus-circle-outline"
            accessibilityLabel="Add new item"
            color="subtle"
            size="large"
            shape="circle"
          />

          <NotificationWrapper>
            <ButtonIconCondensed
              iconName="bell-outline"
              accessibilityLabel="Notifications"
              color="subtle"
              size="large"
              shape="circle"
            />
            <NotificationBadge>2</NotificationBadge>
          </NotificationWrapper>

          <Avatar
            fullName="John Doe"
            imageSrc="https://i.pravatar.cc/150?img=32"
            size="small"
          />
        </NavActions>
      </NavHeader>

      <SearchContainer>
        <InputText
          id="nav-search"
          label="Search"
          hideLabel
          placeholder="Search"
          type="search"
        />
      </SearchContainer>

      <NavContent>
        <NavSection>
          <SectionTitle>
            <Text as="h2" size="xs" weight={700} color="default" family="heading">
              CompanyCam
            </Text>
          </SectionTitle>

          <MenuItem>
            <MenuIcon className="mdi mdi-diamond-stone" />
            <MenuLabel>Leads</MenuLabel>
            <Badge size="small" iconName="flask">Beta</Badge>
          </MenuItem>

          <MenuItem>
            <MenuIcon className="mdi mdi-map-marker-outline" />
            <MenuLabel>Projects</MenuLabel>
          </MenuItem>

          <MenuItem>
            <MenuIcon className="mdi mdi-account-group-outline" />
            <MenuLabel>Customers</MenuLabel>
            <Badge size="small" iconName="flask">Beta</Badge>
          </MenuItem>

          <MenuItem>
            <MenuIcon className="mdi mdi-image-outline" />
            <MenuLabel>Photos</MenuLabel>
          </MenuItem>

          <MenuItem>
            <MenuIcon className="mdi mdi-account-outline" />
            <MenuLabel>Users</MenuLabel>
          </MenuItem>

          <MenuItem>
            <MenuIcon className="mdi mdi-account-multiple-outline" />
            <MenuLabel>User Groups</MenuLabel>
          </MenuItem>

          <MenuItem>
            <MenuIcon className="mdi mdi-file-document-outline" />
            <MenuLabel>Reports</MenuLabel>
          </MenuItem>

          <MenuItem>
            <MenuIcon className="mdi mdi-clipboard-check-outline" />
            <MenuLabel>Checklists</MenuLabel>
          </MenuItem>

          <MenuItem>
            <MenuIcon className="mdi mdi-currency-usd" />
            <MenuLabel>Payments</MenuLabel>
            <Badge size="small" color="caution">NEW</Badge>
          </MenuItem>

          <MenuItem>
            <MenuIcon className="mdi mdi-map-outline" />
            <MenuLabel>Map</MenuLabel>
          </MenuItem>
        </NavSection>

        <NavSection>
          <SectionTitle>
            <Text as="h2" size="xs" weight={700} color="default" family="heading">
              Marketing
            </Text>
          </SectionTitle>

          <MenuItem>
            <MenuIcon className="mdi mdi-star-outline" />
            <MenuLabel>Reviews</MenuLabel>
          </MenuItem>

          <MenuItem>
            <MenuIcon className="mdi mdi-view-grid-outline" />
            <MenuLabel>Portfolio</MenuLabel>
          </MenuItem>
        </NavSection>

        <NavSection>
          <SectionTitle>
            <Text as="h2" size="s" weight={700} color="default" family="heading">
              Resources
            </Text>
          </SectionTitle>

          <MenuItem>
            <MenuIcon className="mdi mdi-puzzle-outline" />
            <MenuLabel>Integrations</MenuLabel>
          </MenuItem>

          <MenuItem>
            <MenuIcon className="mdi mdi-folder-outline" />
            <MenuLabel>Templates</MenuLabel>
          </MenuItem>
        </NavSection>
      </NavContent>

      <NavFooter>
        <MenuItem>
          <MenuIcon className="mdi mdi-gift-outline" />
          <MenuLabel>Refer, get $$$</MenuLabel>
        </MenuItem>

        <MenuItem>
          <MenuIcon className="mdi mdi-swap-horizontal" />
          <MenuLabel>Switch to Org Admin</MenuLabel>
        </MenuItem>

        <MenuItem>
          <MenuIcon className="mdi mdi-message-outline" />
          <MenuLabel>Chat with Support</MenuLabel>
        </MenuItem>
      </NavFooter>
    </NavContainer>
  );
}
