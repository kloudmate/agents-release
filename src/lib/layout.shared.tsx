import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const gitConfig = {
  user: 'kloudmate',
  repo: 'km-agent',
  branch: 'develop',
};

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: <><img src="https://avatars.githubusercontent.com/u/103623326?s=26&v=4" alt="KloudMate" /><div className='font-medium'>KloudMate Agent Docs</div></>,
      transparentMode: "always",
    },
    // links: [
    //   {
    //     text: 'Docs',
    //     url: '/docs',
    //   },
    //   {
    //     text: 'Admin',
    //     url: '/admin',
    //   },
    // ],
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
