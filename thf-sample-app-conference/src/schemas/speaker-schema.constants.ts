import { ThfSyncSchema } from '@totvs/thf-sync';

export const speakerSchema: ThfSyncSchema = {
  getUrlApi: 'http://api.thf.totvs.com.br/conference/conference-api/api/v1/speakers',
  diffUrlApi: 'http://api.thf.totvs.com.br/conference/conference-api/api/v1/speakers/diff',
  deletedField: 'deleted',
  fields: [ 'id', 'name', 'email', 'photo', 'description', 'lectures' ],
  idField: 'id',
  name: 'Speakers',
  pageSize: 10
};
