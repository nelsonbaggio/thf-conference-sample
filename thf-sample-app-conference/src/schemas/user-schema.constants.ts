import { ThfSyncSchema } from '@totvs/thf-sync';

export const userSchema: ThfSyncSchema = {
  getUrlApi: 'http://api.thf.totvs.com.br/conference/conference-api/api/v1/users',
  diffUrlApi: 'http://api.thf.totvs.com.br/conference/conference-api/api/v1/users/diff',
  deletedField: 'deleted',
  fields: [
    'id',
    'username',
    'password',
    'notes',
    { name: 'favoriteLectures', local: true }
  ],
  idField: 'id',
  name: 'Users',
  pageSize: 20
};
