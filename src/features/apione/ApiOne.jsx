import React from 'react';

import {
  Grid,
  Table,
  Segment,
  Header,
  Form,
} from "semantic-ui-react";

const ApiOne = () => {


return (
<Segment>
 <Grid>
     <Grid.Column width={10}>
         <Header as="h3">ApiOne List</Header>
          <Table celled>

          <Table.Header>
           <Table.Row>
               <Table.HeaderCell width={1}>
                   Stuff
               </Table.HeaderCell>
               <Table.HeaderCell width={5}>
                   Stuff
               </Table.HeaderCell>
               <Table.HeaderCell width={3}>
                   Stuff
               </Table.HeaderCell>
               <Table.HeaderCell width={3}>
                   Weight (tons)
               </Table.HeaderCell>
               <Table.HeaderCell width={2}>
                   Stuff
               </Table.HeaderCell>

             </Table.Row>
           </Table.Header>
           <Table.Body>
             <Table.Row>
               <Table.Cell>
                 Stuff
               </Table.Cell>
               <Table.Cell>
                 Stuff
               Stuff</Table.Cell>
               <Table.Cell>
                 Stuff
               Stuff</Table.Cell>
               <Table.Cell>
                   Stuff
               </Table.Cell>
               <Table.Cell>
                   Stuff
               </Table.Cell>
           </Table.Row>
         </Table.Body>

         </Table>
     </Grid.Column>
     <Grid.Column width={6}>
       <Header as="h3">Stuff</Header>
       <Segment >
         <Form size="large">
           <Form.Field name="id" width={6} >
             <label>Stuff</label>
             <input
                 placeholder="ID"
                 value="1"
             />
           </Form.Field>
           <Form.Field name="name" width={16} >
             <label>Stuff</label>
             <input
                 placeholder="Name"
                 value="namename"
             />
           </Form.Field>
         </Form>
       </Segment>
   </Grid.Column>
 </Grid>
</Segment>
)
}
  export default ApiOne;
