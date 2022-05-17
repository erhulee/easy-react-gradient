import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript';
import jsx from 'acorn-jsx';
export default {
    input: "src/index.ts",
    acornInjectPlugins: [jsx()],
    plugins: [
      resolve(),
      babel(),
      commonjs(
          {    
            namedExports: {
            'node_modules/react-is/index.js': [
              'typeOf',
              'isElement',
              'isValidElementType',
              'ForwardRef'
            ]
          }}
      ),
    //   typescript({ jsx: 'preserve' }),
      typescript(),
    ],
    output: {
      file: 'lib/bundle.js',
      format: 'esm',
    },
  }

