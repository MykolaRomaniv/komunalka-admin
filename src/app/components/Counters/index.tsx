import {
  Create,
  Datagrid,
  Edit,
  EditButton,
  List,
  SimpleForm,
  TextField,
  TextInput,
} from 'react-admin'

export const CountersList = (props: any): JSX.Element => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="kind" />
      <TextField source="currentState" />
      <TextField source="previousPaidState" />
      <EditButton />
    </Datagrid>
  </List>
)

export const CountersEdit = (props: any): JSX.Element => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="kind" />
      <TextInput source="currentState" />
      <TextInput source="previousPaidState" />
    </SimpleForm>
  </Edit>
)

export const CountersCreate = (props: any): JSX.Element => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="kind" />
      <TextInput source="currentState" />
      <TextInput source="previousPaidState" />
    </SimpleForm>
  </Create>
)
