import React, { useState } from "react";
import { Checkbox, Grid, Header, Icon, Image, Menu, Segment, Sidebar } from "semantic-ui-react";

const SidebarTest: React.FC = () => {
  const [visible, setVisible] = useState<boolean | undefined>(false);

  return (
    <Grid columns={1}>
      <Grid.Column>
        <Checkbox
          checked={!!visible} // Use !! to ensure a boolean value
          onChange={(_e, data) => {
            if (data.checked !== undefined) {
              setVisible(data.checked);
            }
          }}
        />
      </Grid.Column>

      <Grid.Column>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="overlay"
            icon="labeled"
            inverted
            onHide={() => setVisible(false)}
            vertical
            visible={visible}
          >
            <Menu.Item as="a">
              <Icon name="home" />
              Home
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="gamepad" />
              Games
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="camera" />
              Channels
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic>
              <Header as="h3">Application Content</Header>
              <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
  );
};

export default SidebarTest;
