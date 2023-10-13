interface GreetProps {
  name?: string;
}

export default ({ name }: GreetProps) => {
  return <div>Hello {name}</div>;
};
