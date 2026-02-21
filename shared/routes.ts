import { z } from 'zod';
import { insertPartnerSchema, insertNewsSchema, insertResultSchema, insertContactSchema, partners, news, results, contacts } from './schema';

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  notFound: z.object({
    message: z.string(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  partners: {
    list: {
      method: 'GET' as const,
      path: '/api/partners' as const,
      responses: {
        200: z.array(z.custom<typeof partners.$inferSelect>()),
      },
    },
  },
  news: {
    list: {
      method: 'GET' as const,
      path: '/api/news' as const,
      input: z.object({
        type: z.enum(['news', 'event']).optional(),
      }).optional(),
      responses: {
        200: z.array(z.custom<typeof news.$inferSelect>()),
      },
    },
    get: {
      method: 'GET' as const,
      path: '/api/news/:id' as const,
      responses: {
        200: z.custom<typeof news.$inferSelect>(),
        404: errorSchemas.notFound,
      },
    }
  },
  results: {
    list: {
      method: 'GET' as const,
      path: '/api/results' as const,
      input: z.object({
        type: z.enum(['deliverable', 'newsletter', 'promotional']).optional(),
      }).optional(),
      responses: {
        200: z.array(z.custom<typeof results.$inferSelect>()),
      },
    },
  },
  contacts: {
    create: {
      method: 'POST' as const,
      path: '/api/contacts' as const,
      input: insertContactSchema,
      responses: {
        201: z.object({ success: z.boolean() }),
        400: errorSchemas.validation,
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
