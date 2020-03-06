import React from 'react';
import Brand from '@components/brand';
import Nav from '@components/nav';
import { Header } from '@styles';
import { HeaderInterface } from '@types';

const SiteHeaderComponent = ({ title, desc }: HeaderInterface) => (
  <Header.main>
    <Header.inner>
      {title && <Brand title={title} desc={desc} />}
      <Nav
        items={[
          {
            title: 'Sobre',
            link: 'https://nandomoreira.dev/sobre',
          },
          {
            title: 'Projetos',
            link: 'https://nandomoreira.dev/portfolio',
          },
          {
            title: 'Contato',
            link: 'https://nandomoreira.dev/contato',
          },
        ]}
      />
    </Header.inner>
  </Header.main>
);

export default SiteHeaderComponent;
