export default {
  name: 'tour',
  type: 'document',
  title: 'Концерт',
  fields: [
    {
      name: 'concertDate',
      type: 'datetime',
      title: 'Дата концерта',
      validation: (Rule) => Rule.required(),
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        timeStep: 15,
        calendarTodayLabel: 'Today',
      },
    },
    {
      name: 'city',
      title: 'Город',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'location',
      title: 'Место проведения',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'ticketLink',
      title: 'Ссылка на билеты',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'soldOut',
      title: 'Билеты еще можно купить?',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'eventReport',
      title: 'Отчет о прошедшем ивенте',
      type: 'object',
      fields: [
        {
          name: 'groupLink',
          title: 'Ссылка на группу, посвященную ивенту',
          type: 'string',
        },
        {
          name: 'videoLink',
          title: 'Ссылка на видео с концерта',
          type: 'string',
        },
        {
          name: 'newsLink',
          title: 'Ссылка на упоминание в медиа',
          type: 'string',
        },
        {
          name: 'photoLink',
          title: 'Фото с концерта',
          type: 'image',
        },
      ],
    },
  ],
}
