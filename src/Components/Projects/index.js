import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../Cards/ProjectCards';
import { projects } from '../../Data/constants';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 40px 0px 80px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 80px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
margin-top: 12px;
      font-size: 32px;
  }
`;

const Desc = styled.div`
font-size: 18px;
text-align: center;
max-width: 600px;
color: ${({ theme }) => theme.text_secondary};
@media (max-width: 768px) {
    font-size: 16px;
}
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 20px;
  position: relative;
  padding :40px 80px; 
`;

const Projects = ({ openModal, setOpenModal }) => {
  return (
    <Container id="projects">
      <Wrapper>
      <Title>Projects</Title>
        <Desc> I have worked on a wide range of projects. Here are some of my projects.
        </Desc>
        <CardContainer>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal} />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
