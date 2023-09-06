import React, { useState } from "react";
import { Checkbox, Grid, Header, Icon, Image, Menu, Segment, Sidebar } from "semantic-ui-react";
import Profile from "../../pages/Profile";
import * as S from "./style";
import { equal } from "assert";

const SidebarTest: React.FC = () => {
  const [visible, setVisible] = useState<boolean | undefined>(false);

  return (
    <>
      {/* <S.HideCheck> */}
      <Checkbox
        checked={!!visible}
        onChange={(_e, data) => {
          if (data.checked !== undefined) {
            setVisible(data.checked);
          }
        }}
      />
      {/* </S.HideCheck> */}

      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          style={{ paddingTop: "0", paddingBottom: "0" }}
          onHide={() => setVisible(false)}
          visible={visible}
        >
          <Grid>
            <Grid columns={2}>
              <Grid.Column>
                <Menu.Item>
                  <Icon name="angle left" />
                </Menu.Item>
              </Grid.Column>
              <Grid.Column>
                <Menu.Item>PCOT</Menu.Item>
              </Grid.Column>
            </Grid>

            <Grid>
              <Grid.Row>
                <Menu.Item as="a">
                  <Icon name="home" />
                  Home
                </Menu.Item>
              </Grid.Row>
              <Grid.Row>
                <Menu.Item as="a">
                  <Icon name="gamepad" />
                  Games
                </Menu.Item>
              </Grid.Row>
              <Grid.Row>
                <Menu.Item as="a">
                  <Icon name="camera" />
                  Channels
                </Menu.Item>
              </Grid.Row>
            </Grid>
          </Grid>
        </Sidebar>

        <Sidebar.Pusher dimmed={visible}>
          <Segment basic>
            <Profile />
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </>
  );
};

export default SidebarTest;
