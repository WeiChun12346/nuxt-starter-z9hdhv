export default [
  {
    created_datetime_utc: '2023-03-29T08:31:55:119Z',
    created_by_name: 'SYSTEM',
    action: 'INCOMING_API',
    data: [
      {
        title: 'k11_received_submission',
        data: [
          {
            field: 'sp_code',
            value: 'PC',
          },
          {
            field: 'message_type',
            value: 'K11SUB',
          },
          {
            field: 'batch_id',
            value: 'K11SUB00001',
          },
        ],
      },
      {
        title: 'k11_beginning_message_status_registered',
        data: [
          {
            field: 'customs_reference_no',
            value: 'CUS0001',
          },
          {
            field: 'Supporting Document',
            value: `<a target="_blank" href="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw">sample.pdf</a>`,
          },
        ],
      },
    ],
  },
  {
    action: 'INTERNAL_PROCESSING',
    data: [
      {
        title: 'k11_beginning_message_status_updated',
        data: [
          {
            field: '',
            value: ['COUNTRY', 'CHANGED_FROM', 'MY', 'to', 'SG'],
          },
        ],
      },
    ],
    created_by_name: 'SYSTEM',
    created_datetime_utc: '2023-03-29T08:31:55:119Z',
  },
  {
    action: 'INTERNAL_PROCESSING',
    data: [
      {
        title: 'k11_beginning_message_status_received',
      },
    ],
    created_by_name: 'SYSTEM',
    created_datetime_utc: '2023-03-29T08:31:55:119Z',
  },
  {
    action: 'INTERNAL_PROCESSING',
    data: [
      {
        title: 'k11_beginning_message_status_registered',
        data: [
          {
            field: 'customs_reference_no',
            value: 'CUS0001',
          },
        ],
      },
    ],
    created_by_name: 'SYSTEM',
    created_datetime_utc: '2023-03-29T08:31:55:119Z',
  },
];
