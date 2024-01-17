import { FormEvent, useState } from "react"
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row
} from "reactstrap"
import BaseLayout from "../layouts/BaseLayout"
import { useFormContext } from "../../contexts/User.context"
import { useNavigate } from "react-router-dom"

interface IFormState {
  name: string
  email: string
  address: string
  city: string
  state: string
  zip: string
}

const AddUser = () => {
  const { dispatch } = useFormContext();
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState<IFormState>({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: ''
  })

  const handleFieldChange = (field: string, value: string) => {
    setFormValues((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch({ type: 'add', payload: formValues })
    navigate('/');
  }

  return (
    <BaseLayout>
      <Container className="p-5">
        <h3 className="mb-2">Add User</h3>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="examplePassword">
                  Name
                </Label>
                <Input
                  id="examplePassword"
                  name="name"
                  placeholder="name placeholder"
                  type="text"
                  onChange={(e) => handleFieldChange('name', e.target.value)}
                  value={formValues.name}
                  required
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleEmail">
                  Email
                </Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="with a placeholder"
                  type="email"
                  onChange={(e) => handleFieldChange('email', e.target.value)}
                  value={formValues.email}
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="exampleAddress">
              Address
            </Label>
            <Input
              id="exampleAddress"
              name="address"
              placeholder="1234 Main St"
              onChange={(e) => handleFieldChange('address', e.target.value)}
              value={formValues.address}
              required
            />
          </FormGroup>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleCity">
                  City
                </Label>
                <Input
                  id="exampleCity"
                  name="city"
                  onChange={(e) => handleFieldChange('city', e.target.value)}
                  value={formValues.city}
                  required
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleState">
                  State
                </Label>
                <Input
                  id="exampleState"
                  name="state"
                  onChange={(e) => handleFieldChange('state', e.target.value)}
                  value={formValues.state}
                  required
                />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="exampleZip">
                  Zip
                </Label>
                <Input
                  id="exampleZip"
                  name="zip"
                  onChange={(e) => handleFieldChange('zip', e.target.value)}
                  value={formValues.zip}
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          <Button color="success" size="lg" className="my-2">
            Add User
          </Button>
        </Form>
      </Container>
    </BaseLayout>
  );
}

export default AddUser