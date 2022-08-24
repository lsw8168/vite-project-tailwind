import tw, { css } from 'twin.macro';
import { greetingsES5, greetingsES6, sum } from './main';

function Test() {
  const a = sum(5, 4);
  const b = greetingsES5('es5555');
  const c = greetingsES6('es6666');
  return (
    <div>
      <p>{a}</p>
      <p>{b}</p>
      <p>{c}</p>
      <div css={tw`border`}>Hover to change color.</div>
      <div className="flex h-screen">
        <div className="m-auto">
          <div className="text-6xl text-red-600">asd</div>
          <button className="px-6 py-2 rounded bg-green-800 hover:bg-green-600 text-white" type="button">
            count+
          </button>
        </div>
      </div>
    </div>
  );
}

export default Test;
