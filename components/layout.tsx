import { PropsWithChildren, ReactNode } from 'react';

const Layout = ({ children }: PropsWithChildren<ReactNode>): JSX.Element => (
  <div id="container">
    {children}
  </div>
);

export default Layout;
