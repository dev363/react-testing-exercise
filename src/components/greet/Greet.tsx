interface GreetProps {
  name?: string;
}

export const Greet = ({ name }: GreetProps) => {
  return (
    <>
      <div>Hello {name}</div>
      <p role="paragraph">I m Software Developer</p>
    </>
  );
};
