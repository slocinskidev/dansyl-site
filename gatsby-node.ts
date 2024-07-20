import LoadablePlugin from '@loadable/webpack-plugin';
import { GatsbyNode } from 'gatsby';
import { resolve } from 'path';

const PROJECT_ROOT = resolve(__dirname);

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  actions,
}) => {
  actions.setWebpackConfig({
    plugins: [new LoadablePlugin()],
    resolve: {
      alias: {
        '@/assets': resolve(PROJECT_ROOT, 'src/assets'),
        '@/components': resolve(PROJECT_ROOT, 'src/components'),
        '@/constants': resolve(PROJECT_ROOT, 'src/constants'),
        '@/lib': resolve(PROJECT_ROOT, 'src/lib'),
        '@/hooks': resolve(PROJECT_ROOT, 'src/hooks'),
        '@/pages': resolve(PROJECT_ROOT, 'src/pages'),
        '@/styles': resolve(PROJECT_ROOT, 'src/styles'),
        '@/test-utils': resolve(PROJECT_ROOT, 'src/test-utils'),
        '@/types': resolve(PROJECT_ROOT, 'src/types'),
      },
    },
  });
};
