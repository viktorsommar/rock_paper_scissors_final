import React from "react";
import { Segment, Divider, Grid, Header, Icon } from 'semantic-ui-react'

const Score = (props) => {
  return(
    <Segment placeholder id="scoreboard">
      <Grid columns={2} stackable textAlign='center'>
        <Divider vertical id="divider">VS</Divider>

        <Grid.Row verticalAlign='middle'>
          <Grid.Column>
            <Header icon id="user-icon">
              <Icon name='user secret' />
              Player Score 
              <br></br>
              {props.playerScore}
            </Header>
          </Grid.Column>

          <Grid.Column>
            <Header icon id="computer-icon">
              <Icon name='android'/>
              Computer Score
              <br></br>
              {props.computerScore}
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default Score;