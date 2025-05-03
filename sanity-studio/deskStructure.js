export default (S) =>
  S.list()
    .title('Content')
    .items([
      // Content
      S.listItem()
        .title('Content')
        .child(
          S.list()
            .title('Content')
            .items([
              S.listItem()
                .title('Pages')
                .schemaType('page')
                .child(S.documentTypeList('page')),
              S.listItem()
                .title('Posts')
                .schemaType('post')
                .child(S.documentTypeList('post')),
            ])
        ),
      
      // Forms
      S.listItem()
        .title('Forms')
        .schemaType('form')
        .child(S.documentTypeList('form')),
      
      // Navigation
      S.listItem()
        .title('Navigation')
        .schemaType('menu')
        .child(S.documentTypeList('menu')),
      
      // Site Settings
      S.listItem()
        .title('Site Settings')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      
      // Optional Types (commented out by default)
      /*
      S.listItem()
        .title('Products')
        .schemaType('product')
        .child(S.documentTypeList('product')),
      
      S.listItem()
        .title('Events')
        .schemaType('event')
        .child(S.documentTypeList('event')),
      */
    ])