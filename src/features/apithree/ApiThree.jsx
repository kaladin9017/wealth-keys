import React from 'react';
import {
  Form,
  Dropdown,
  Segment
} from 'semantic-ui-react';

const FACTIONS = [
  // skip other entries
  {value : 'lc', text : 'Stuff Stuff'},
  {value : 'wd', text : 'Stuff\'s Stuffs'}
];

const ApiThree = () => {
  return (
    <Segment attached='bottom'>
      <Form size='large'>
        <Form.Field name="name" width={6} >
          <label>Stuff  Name</label>
          <input placeholder="Name" value="Black Widow Company"/>
        </Form.Field>
        <Form.Field name="affiliation" width={6}>
          <label>Stuff Affiliation</label>
          <Dropdown
             selection
             options={FACTIONS}
             value="wd"
          />
        </Form.Field>
      </Form>
    </Segment>
  )
}

export default ApiThree;
