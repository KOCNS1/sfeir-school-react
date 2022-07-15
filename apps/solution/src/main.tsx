import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './app/app';
import NewPersonForm from './components/new-person-form/new-person-form';
import People from './components/people/people';

const container = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="people" element={<People />} />
          <Route path="people/new" element={<NewPersonForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
