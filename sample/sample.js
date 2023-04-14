export default [
  {
    title: 'RECEIVED_WAREHOUSE_SUBMIT',
    created_by_name: 'Soong Teng',
    created_datetime_utc: '21-03-2023 17:58',
    action: 'Incoming API',
    description: '',
    data: [
      {
        field: 'Party Code',
        value: 'DTH',
      },
      {
        field: 'Message Type',
        value: 'JYNASUB',
      },
      {
        field: 'Batch Identification',
        value: 'DTH-JYN-AIR-20230404-10000',
      },
    ],
  },
  {
    title: 'STATUS_REGISTERED',
    created_by_name: 'Soong Teng',
    created_datetime_utc: '21-03-2023 17:58',
    action: 'Internal Processing',
    description: '',
    data: [],
  },
  {
    title: 'STATUS_REJECTED',
    created_by_name: 'Soong Teng',
    created_datetime_utc: '21-03-2023 17:58',
    action: 'Internal Processing',
    description: '',
    data: [
      {
        field: 'WAREHOUSE_APPROVAL_NO',
        value: '001 | Invalid City',
      },
      {
        field: 'WAREHOUSE_APPROVAL_DATE',
        value: '002 | Invalid Date',
      },
    ],
  },
  {
    title: 'SEND_ACKNOWLEDGEMENT_RESPONSE_MESSAGE',
    created_by_name: 'Soong Teng',
    created_datetime_utc: '21-03-2023 17:58',
    action: 'Outgoing API',
    description: '',
    data: [
      {
        field: 'Party Code',
        value: 'DTH',
      },
      {
        field: 'Message Type',
        value: 'JYNASUB',
      },
      {
        field: 'Batch Identification',
        value: 'DTH-JYN-AIR-20230404-10000',
      },
      {
        field: 'Reference Batch Identification',
        value: 'DTH-JYN-AIR-20230404-10000',
      },
      {
        field: 'Status',
        value: '002-Rejected',
      },
    ],
  },
];
