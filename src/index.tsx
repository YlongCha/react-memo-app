import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';
const rootElement = document.getElementById('root') as HTMLElement;

const root = createRoot(rootElement);

root.render(
  <RecoilRoot>
    <StrictMode>
      <App />
    </StrictMode>
  </RecoilRoot>,
);
