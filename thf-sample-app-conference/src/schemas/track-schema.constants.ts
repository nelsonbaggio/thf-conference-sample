import { ThfSyncSchema } from '@totvs/thf-sync';

export const trackSchema: ThfSyncSchema = {
  getUrlApi: 'http://api.thf.totvs.com.br/conference/conference-api/api/v1/tracks',
  diffUrlApi: 'http://api.thf.totvs.com.br/conference/conference-api/api/v1/tracks/diff',
  deletedField: 'deleted',
  fields: [ 'id', 'name', 'color' ],
  idField: 'id',
  name: 'Tracks',
  pageSize: 10
};
