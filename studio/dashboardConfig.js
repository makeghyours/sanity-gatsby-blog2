export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e22f15c5fb6189b030e52f2',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog2-studio-dk7o1d25',
                  apiId: '2559093d-553b-4ef7-9f56-274f45cac913'
                },
                {
                  buildHookId: '5e22f15c399260d3e60c42a4',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog2-web-omaaxsnk',
                  apiId: '1e97eb9e-f91c-4a89-8d43-c3b819eac106'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/makeghyours/sanity-gatsby-blog2',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog2-web-omaaxsnk.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
