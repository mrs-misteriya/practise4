import { Section, Container, Header, TodoList, EditForm } from 'components';
import { Form } from 'components';
import { Filter } from 'components';
import { useSelector } from 'react-redux';
import { selectEdit } from 'reduxTodo/selectors';

export const App = () => {
  const isEdit = useSelector(selectEdit);

  return (
    <>
      <Header />
      <Section>
        <Container>
          {!isEdit ? <Form /> : <EditForm />}
          <Filter />
          <TodoList />
        </Container>
      </Section>
    </>
  );
};
