import {defineField, defineType} from 'sanity'

export const movieType = defineType({
  name: 'movie',
  title: 'Movie',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'externalId',
      title: 'External ID',
      type: 'number',
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'popularity',
      title: 'Popularity',
      type: 'number',
    }),
    defineField({
      name: 'releaseDate',
      title: 'Release Date',
      type: 'date',
    }),
    defineField({
      name: 'poster',
      title: 'Poster',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'overview',
      title: 'Overview',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'castMembers',
      title: 'Cast Members',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'characterName',
              title: 'Character Name',
              type: 'string',
            },
            {
              name: 'person',
              title: 'Person',
              type: 'reference',
              to: [{type: 'person'}],
            },
          ],
          preview: {
            select: {
              title: 'characterName',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'crewMembers',
      title: 'Crew Members',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'department',
              title: 'Department',
              type: 'string',
            },
            {
              name: 'person',
              title: 'Person',
              type: 'reference',
              to: [{type: 'person'}],
            },
          ],
          preview: {
            select: {
              title: 'department',
            },
          },
        },
      ],
    }),
  ],
})
