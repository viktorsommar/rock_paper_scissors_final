import React from "react";
import { Segment, Divider, Grid, Header, Icon } from 'semantic-ui-react'

const Score = (props) => {
  return(
    <Segment placeholder id="scoreboard">
      <Grid columns={2} stackable textAlign='center'>
        <Divider vertical>VS</Divider>

        <Grid.Row verticalAlign='middle'>
          <Grid.Column>
            <Header icon>
              <Icon name='user secret' />
              Player Score {props.playerScore}
            </Header>
          </Grid.Column>

          <Grid.Column>
            <Header icon>
              <Icon name='android' />
              {props.computerScore} Computer Score
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default Score;