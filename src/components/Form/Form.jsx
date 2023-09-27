import { FormList, Input } from './Form.styled';

const Form = ({ value, onChange }) => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <FormList onSubmit={handleSubmit}>
      <Input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </FormList>
  );
};
export default Form;
