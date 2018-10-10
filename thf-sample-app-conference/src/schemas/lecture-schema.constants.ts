import { ThfSyncSchema } from '@totvs/thf-sync';

export const lectureSchema: ThfSyncSchema = {
  getUrlApi: 'http://api.thf.totvs.com.br/conference/conference-api/api/v1/lectures',
  diffUrlApi: 'http://api.thf.totvs.com.br/conference/conference-api/api/v1/lectures/diff',
  deletedField: 'deleted',
  fields: [ 'id', 'title', 'room', 'startTime', 'endTime', 'description', 'track', 'speaker' ],
  idField: 'id',
  name: 'Lectures',
  pageSize: 10
};
