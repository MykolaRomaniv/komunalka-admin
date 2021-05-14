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

export const BillsList = (props: any): JSX.Element => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="counters" />
      <TextField source="addresses" />
      <TextField source="toPay" />
      <TextField source="paymentStatus" />
      <EditButton />
    </Datagrid>
  </List>
)

export const BillsEdit = (props: any): JSX.Element => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="counters" />
      <TextInput source="addresses" />
      <TextInput source="toPay" />
      <TextInput source="paymentStatus" />
    </SimpleForm>
  </Edit>
)

export const BillsCreate = (props: any): JSX.Element => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="counters" />
      <TextInput source="addresses" />
      <TextInput source="toPay" />
      <TextInput source="paymentStatus" />
    </SimpleForm>
  </Create>
)
