export default {
  name: 'post',
  type: 'document',
  title: 'Пост (новость)',
  fields: [
    {
      name: 'meta_title',
      type: 'string',
      title: 'Заголовок для вкладки',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      type: 'string',
      title: 'Заголовок',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'publishedDate',
      type: 'date',
      title: 'Дата публикации',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      validation: (Rule) => Rule.required(),
      title: 'Изображение',
      fields: [
        {
          name: 'caption',
          type: 'string',
          validation: (Rule) => Rule.required(),
          title: 'Подпись',
        },
      ],
    },
    {
      name: 'slug',
      title: 'Часть ссылки после "/". Название должно быть уникальным и только латиницей',
      validation: (Rule) => Rule.required(),
      type: 'slug',
      options: {
        // source: 'title',
        maxLength: 200,
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      name: 'description',
      title: 'Аннотация',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'body',
      validation: (Rule) => Rule.required(),
      title: 'Пост',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
        },
      ],
    },
  ],
}
