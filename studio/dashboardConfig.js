export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '62e37b71c1b4d34b755af5d1',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-18kp88kv',
                  apiId: 'f67a2ac4-912f-46a3-aa30-071db9df75a7'
                },
                {
                  buildHookId: '62e37b7223a21949a94a9b3c',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-2311mrqx',
                  apiId: '21b92fa3-cfd8-4a04-ab20-02d47b9aa209'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rmasonh22/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-2311mrqx.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
