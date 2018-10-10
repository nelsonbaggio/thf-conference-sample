import { ThfSyncSchema } from '@totvs/thf-sync';

export const conferenceSchema: ThfSyncSchema = {
  getUrlApi: 'http://api.thf.totvs.com.br/conference/conference-api/api/v1/conferences',
  diffUrlApi: 'http://api.thf.totvs.com.br/conference/conference-api/api/v1/conferences/diff',
  deletedField: 'deleted',
  fields: [ 'id', 'title', 'date', 'location', 'description' ],
  idField: 'id',
  name: 'Conferences',
  pageSize: 1
};
