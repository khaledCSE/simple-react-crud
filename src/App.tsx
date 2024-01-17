import 'bootstrap/dist/css/bootstrap.min.css';
import BaseLayout from './components/layouts/BaseLayout';
import { useFormContext } from './contexts/User.context';
import { Button, Card, CardHeader, CardBody, CardText, CardTitle, Col, Row, CardFooter } from 'reactstrap';
import { Link } from 'react-router-dom';


function App() {
  const { state: users, dispatch } = useFormContext();

  function getRandomColor(): string {
    const colors = ['primary', 'success', 'info', 'dark'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
  return <BaseLayout>
    <h1>All Users</h1>
    {users.length > 0 && (
      <Row className='g-4'>
        {users.map((user) => {
          const color = getRandomColor()
          return (
            <Col sm={4} key={user.id}>
              <Card
                className="my-2"
                color={color}
                inverse={color !== 'info'}
                style={{
                  width: '18rem'
                }}
              >
                <CardHeader>
                  {user.email}
                </CardHeader>
                <CardBody>
                  <CardTitle tag="h5">
                    {user.name}
                  </CardTitle>
                  <CardText>
                    <p>{user.address}</p>
                    <p>{user.state}</p>
                    <p>{user.city} - {user.zip}</p>
                  </CardText>
                </CardBody>

                <CardFooter>
                  <Button color='warning'>
                    <Link to="/update-user" state={user}>
                      Edit User
                    </Link>
                  </Button>
                  <Button color='danger' className='mx-2' onClick={() => dispatch({ type: 'delete', payload: user.id })}>Delete User</Button>
                </CardFooter>
              </Card>
            </Col>
          )
        })}
      </Row>
    )}
  </BaseLayout>
}

export default App