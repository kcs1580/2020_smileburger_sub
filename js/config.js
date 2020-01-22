angular.module('config', [])
  .constant('config',
  {
    prod: {
      region: 'ap-northeast-2',
      upload_bucket_name: 'jytestbucket79',
      identity_pool_id: 'ap-northeast-2_hs8UJAsfo',
      face_collection: 'rekognition-demo-go',
      ddb_table: 'rekognition-demo-go'

    }
  }
  )
  ;

