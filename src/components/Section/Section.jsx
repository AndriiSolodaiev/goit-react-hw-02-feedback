import { SectionStyled, Title } from './Section.styled';
export function Section({ title, children }) {
  return (
    <SectionStyled>
      <Title>{title}</Title>
      {children}
    </SectionStyled>
  );
}
