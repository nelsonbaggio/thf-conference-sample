import { ThfSyncSchema } from '@totvs/thf-sync';

export const noteSchema: ThfSyncSchema = {
  getUrlApi: 'http://api.thf.totvs.com.br/conference/conference-api/api/v1/notes',
  diffUrlApi: 'http://api.thf.totvs.com.br/conference/conference-api/api/v1/notes/diff',
  deletedField: 'deleted',
  fields: [ 'id', 'title', 'text', 'lectureId', 'userId' ],
  idField: 'id',
  name: 'Notes',
  pageSize: 10
};
