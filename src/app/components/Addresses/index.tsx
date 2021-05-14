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

export const AddressesList = (props: any): JSX.Element => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="state" />
      <TextField source="city" />
      <TextField source="street" />
      <TextField source="home" />
      <TextField source="number" />
      <TextField source="counters" />
      <TextField source="users" />
      <EditButton />
    </Datagrid>
  </List>
)

export const AddressesEdit = (props: any): JSX.Element => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="state" />
      <TextInput source="city" />
      <TextInput source="street" />
      <TextInput source="home" />
      <TextInput source="number" />
      <TextInput source="counters" />
      <TextInput source="users" />
    </SimpleForm>
  </Edit>
)

export const AddressesCreate = (props: any): JSX.Element => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="state" />
      <TextInput source="city" />
      <TextInput source="street" />
      <TextInput source="home" />
      <TextInput source="number" />
      <TextInput source="counters" />
      <TextInput source="users" />
    </SimpleForm>
  </Create>
)
