import { lazy, Suspense } from 'react';
import tw, { css } from 'twin.macro';
const TestComponent = lazy(() => import('./Test'));

function App() {
  return (
    <div>
      <p className="bg-yellow-600 text-[70px]">Hello Vite + React!</p>
      <p tw="bg-yellow-600 text-[70px]">Hello Vite + React!</p>
      <p css={[tw`bg-yellow-600 text-[70px]`]}>Hello Vite + React!</p>
      <p
        css={[
          tw`bg-yellow-600`,
          css`
            ${tw`text-[70px]`}
          `
        ]}
      >
        Hello Vite + React!
      </p>
      <Suspense fallback={<div>Loading...</div>}>
        <TestComponent />
      </Suspense>
    </div>
  );
}

export default App;
