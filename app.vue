<template>
  <input
    type="checkbox"
    id="vehicle1"
    name="vehicle1"
    value="Bike"
    style="margin-left: 20px"
  />
  <label
    for="vehicle1"
    style="font-family: monospace"
    @click="translate = !translate"
  >
    show translation</label
  ><br />
  <wei-chun-service
    :logs="warehouse_received_submission"
    :format="'dash'"
    :translate="translate"
  />
  <bold>2 Dimension</bold>
  <wei-chun-service-v2
    :logs="twoDimension"
    :format="'dash'"
    :translate="translate"
  />
  <wei-chun-service-v3
    :logs="
      warehouse_received_submission.map((x) => {
        return [x];
      })
    "
  />
  <!-- <div v-for="(log, idx) in twoDimension" :key="idx">
    <wei-chun-service-v2 :logs="log" :format="'dash'" :translate="translate" />
  </div> -->
  <!-- <wei-chun-service
    :logs="warehouse_received_submission"
    :format="'dash'"
    :translate="translate"
  />
  <wei-chun-service
    :logs="warehouse_receive_goods_submission"
    :format="'dash'"
    :translate="translate"
  />
  <wei-chun-service
    :logs="warehouse_adjustment_submission"
    :format="'dash'"
    :translate="translate"
  /> -->

  <!-- <wei-chun-service :logs="journey" :format="'dash'" :translate="translate" /> -->
  <!-- <wei-chun-service :logs="cargo_air" :format="'dash'" :translate="translate" /> -->

  <!-- <wei-chun-service :logs="cargo_sea" :format="'dash'" :translate="translate" /> -->

  <!-- <wei-chun-service :logs="excise" :format="'dash'" :translate="translate" /> -->

  <!-- <wei-chun-service
    :logs="ata_carnet"
    :format="'dash'"
    :translate="translate"
  /> -->

  <!-- <wei-chun-service :logs="surety_encashment" :format="'dash'" />
  <wei-chun-service
    :logs="third_party_bank_guarantee_application"
    :format="'dash'"
  /> -->
  <!-- <wei-chun-service :logs="surety_encashment" :format="'dash'" /> -->
</template>

<script>
import weiChunServiceV3 from './wei-chun-service-v3.vue';
import weiChunService from './wei-chun-service.vue';
import weiChunServiceV2 from './wei-chun-service-v2.vue';
import twoDimension from './sample/twoDimension.js';
import sample from './sample/sample.js';
export default {
  components: {
    weiChunService,
    weiChunServiceV2,
    weiChunServiceV3,
  },
  data() {
    return {
      sample: sample,
      twoDimension: twoDimension,
      translate: false,
      newlogs: [
        [
          {
            title: 'Registered',
            created_datetime_utc: '2023-04-12',
            created_by_name: 'Li',
            data: [{ field: 'Status', value: 'Approved' }],
          },
          { title: 'Approved', data: [] },
        ],
        [
          {
            title: 'Submitted',
            created_datetime_utc: '2023-04-12',
            created_by_name: 'Li',
            data: [{ field: 'Status', value: 'Approved' }],
          },
        ],
      ],
      logs1: [
        {
          title: 'CREATED_DRAFT_APPLICATION',
          created_by_name: 'Li',
          action: 'abcde',
          description: '',
          data: [],
        },
        {
          title: 'DELETED_DRAFT_APPLICATION',
          created_by_name: 'Li',
          action: '',
          description: '',
          data: [
            {
              field: 'STATUS',
              value: 'DELETED',
            },
          ],
        },
        {
          title: 'SAVE_DRAFT_APPLICATION',
          created_by_name: 'Li',
          action: '',
          description: '',
          data: [
            {
              field: 'STATUS',
              value: 'DRAFT',
            },
          ],
        },
        {
          title: '',
          created_by_name: 'Li',
          action: '',
          description: '',
          data: [
            {
              field: 'SUBMITTED_APPLICATION',
            },
            {
              field: 'STATUS',
              value: 'SUBMITTED',
            },
            {
              field: 'NOTIFICATION_EMAIL_SENT_TO_OWNER',
            },
          ],
        },
        {
          title: 'RESUBMIT_APPLICATION',
          created_by_name: 'Li',
          action: '',
          description: '',
          data: [
            {
              field: 'SUBMITTED_APPLICATION',
              value: 'Country changed from MY to SG',
            },
          ],
        },
        {
          title: 'PICK_UP_APPLICATION',
          created_by_name: 'Li',
          action: '',
          description: '',
          data: [],
        },
      ],
      logs2: [
        {
          title: 'RECEIVED_APPLICATION',
          created_by_name: 'Li',
          action: '',
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
              field: 'Supporting Document',
              value: `<a target="_blank" href="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw">sample.pdf</a>`,
            },
          ],
        },
        {
          title: 'WAREHOUSE_STATUS_RECEIVED',
          created_by_name: 'Li',
          action: '',
          description: '',
          data: [],
        },
        {
          title: 'WAREHOUSE_STATUS_REGISTERED',
          created_by_name: 'Li',
          action: '',
          description: '',
          data: [
            {
              field: 'WAREHOUSE_APPROVAL_NO',
              value: 'WH-APV-0001',
            },
            {
              field: 'WAREHOUSE_APPROVAL_DATE',
              value: '20230404 12:00',
            },
          ],
        },
        {
          title: 'ACKNOWLEDGEMENT',
          created_by_name: 'Li',
          action: '',
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
              field: 'Supporting Document',
              value: `<a target="_blank" href="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw">sample.pdf</a>`,
            },
          ],
        },
        {
          title: 'WAREHOUSE_INVALID',
          created_by_name: 'Li',
          action: '',
          description: '',
          data: [
            {
              field: 'WAREHOUSE_APPROVAL_NO',
              value: '001 | Invalid City',
            },
            {
              field: 'WAREHOUSE_APPROVAL_DATE',
              value: '001 | Invalid City',
            },
          ],
        },
      ],
      warehouse_received_submission: [
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
            {
              field: '',
              value: ['COUNTRY', 'CHANGED_FROM', 'MY', 'to', 'SG'],
            },
            {
              field: 'Supporting Document',
              value: `<a target="_blank" href="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw">sample.pdf</a>`,
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
      ],
      warehouse_receive_goods_submission: [
        {
          title: 'RECEIVED_WAREHOUSE_RECEIVE_GOOD_SUBMIT',
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
          title: 'SEND_ACKNOWLEDGED_WAREHOUSE_RECEIVE_GOOD_RESPONSE',
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
      ],
      warehouse_adjustment_submission: [
        {
          title: 'RECEIVED_WAREHOUSE_ADJUSTMENT_SUBMIT',
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
              value: '002 | Invalid Date', // get from Wei Chun
            },
          ],
        },
        {
          title: 'SEND_ACKNOWLEDGED_WAREHOUSE_ADJUSTMENT_RESPONSE',
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
      ],
      journey: [
        {
          title: 'AIR_JOURNEY_SUBMIT',
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
          title: 'STATUS_RECEIVED',
          created_by_name: 'Soong Teng',
          created_datetime_utc: '21-03-2023 17:58',
          action: 'Internal Processing',
          description: '',
          data: [],
        },
        {
          title: 'STATUS_REGISTERED',
          created_by_name: 'Soong Teng',
          created_datetime_utc: '21-03-2023 17:58',
          action: 'Internal Processing',
          description: '',
        },
        {
          title: 'STATUS_CANCELLED',
          created_by_name: 'Soong Teng',
          created_datetime_utc: '21-03-2023 17:58',
          action: 'Internal Processing',
          description: '',
          data: [
            {
              field: '',
              value: ['COUNTRY', 'CHANGED_FROM', 'MY', 'TO', 'SG'], // not sure
            },
          ],
        },
        {
          title: 'STATUS_REJECTED',
          created_by_name: 'Soong Teng',
          created_datetime_utc: '21-03-2023 17:58',
          action: 'Internal Processing',
          description: '',
          data: [
            {
              field: 'JOURNEY_APPROVAL_NO',
              value: '001 | Invalid City',
            },
            {
              field: 'JOURNEY_APPROVAL_DATE',
              value: '002 | Invalid Date', // get from Wei Chun
            },
          ],
        },
        {
          title: 'SEND_ACKNOWLEDGEMENT_MESSAGE',
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
              field: 'Customs Status Name',
              value: 'PROCESSED',
            },
            {
              field: 'Status Code',
              value: '001-Registered',
            },
          ],
        },
        {
          title: 'SEND_BROADCAST_MESSAGE',
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
          ],
        },
      ],
      cargo_air: [
        {
          title: 'RECEIVED_SUBMISSION_MESSAGE',
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
          title: 'STATUS_RECEIVED',
          created_by_name: 'Soong Teng',
          created_datetime_utc: '21-03-2023 17:58',
          action: 'Internal Processing',
          description: '',
          data: [],
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
              field: 'CARGO_APPROVAL_NO',
              value: '001 | Invalid City',
            },
            {
              field: 'CARGO_APPROVAL_DATE',
              value: '002 | Invalid Date', // get from Wei Chun
            },
          ],
        },
        {
          title: 'SEND_ACKNOWLEDGEMENT_MESSAGE',
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
              field: 'Customs Status Name',
              value: 'ACCEPTED',
            },
            {
              field: 'Status Code',
              value: '001-Registered',
            },
          ],
        },
        {
          title: 'SEND_BROADCAST_MESSAGE',
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
          ],
        },
      ],
      cargo_sea: [
        {
          title: 'RECEIVED_SUBMISSION_MESSAGE',
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
          title: 'STATUS_RECEIVED',
          created_by_name: 'Soong Teng',
          created_datetime_utc: '21-03-2023 17:58',
          action: 'Internal Processing',
          description: '',
          data: [],
        },
        {
          title: 'STATUS_REGISTERED',
          created_by_name: 'Soong Teng',
          created_datetime_utc: '21-03-2023 17:58',
          action: 'Internal Processing',
          description: '',
          data: [
            {
              field: '',
              value: ['COUNTRY', 'CHANGED_FROM', 'MY', 'TO', 'SG'], // not sure
            },
            {
              field: 'REASON',
              value: `${['reason 1', 'reason 2', 'reason 3'].toString()}`, // not sure
            },
          ],
        },
        {
          title: 'STATUS_REJECTED',
          created_by_name: 'Soong Teng',
          created_datetime_utc: '21-03-2023 17:58',
          action: 'Internal Processing',
          description: '',
          data: [
            {
              field: '',
              value: ['COUNTRY', 'UPDATE_INVALID', 'COUNTRY'],
            },
            {
              field: 'CARGO_APPROVAL_DATE',
              value: '002 | Invalid Date', // get from Wei Chun
            },
          ],
        },
        {
          title: 'SEND_ACKNOWLEDGEMENT_MESSAGE',
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
              field: 'Customs Status Name',
              value: 'ACCEPTED',
            },
            {
              field: 'Status Code',
              value: '001-Registered',
            },
          ],
        },
        {
          title: 'SEND_ACKNOWLEDGEMENT_MESSAGE',
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
              field: 'Customs Status Name',
              value: 'ACCEPTED',
            },
            {
              field: 'Status Code',
              value: '001-Registered',
            },
          ],
        },
        {
          title: 'SEND_ACKNOWLEDGEMENT_MESSAGE',
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
              field: 'Customs Status Name',
              value: 'ACCEPTED',
            },
            {
              field: 'Status Code',
              value: '001-Registered',
            },
          ],
        },
      ],
      excise: [
        {
          title:
            'RECEIVED_ORIGINAL_ENDORSEMENT_LOCAL_MANUFACTURED_VEHICLE_SUBMISSION',
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
              field: 'EXCISE_APPROVAL_NO',
              value: '001 | Invalid City',
            },
            {
              field: 'EXCISE_APPROVAL_DATE',
              value: '002 | Invalid Date',
            },
          ],
        },
        {
          title:
            'SEND_ACKNOWLEDGED_ORIGINAL_ENDORSEMENT_LOCAL_MANUFACTURED_VEHICLE_SUBMISSION',
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
      ],
      ata_carnet: [
        {
          title: 'RECEIVED_SUBMISSION_MESSAGE',
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
          title: 'STATUS_RECEIVED',
          created_by_name: 'Soong Teng',
          created_datetime_utc: '21-03-2023 17:58',
          action: 'Internal Processing',
          description: '',
          data: [],
        },
        {
          title: 'STATUS_PROCESSED',
          created_by_name: 'Soong Teng',
          created_datetime_utc: '21-03-2023 17:58',
          action: 'Internal Processing',
          description: '',
          data: [
            {
              field: 'DECLARATION_NO',
              value: '12345',
            },
            {
              field: 'DECLARATION_DATE',
              value: '2023-04-10',
            },
          ],
        },
        {
          title: 'STATUS_INVALID',
          created_by_name: 'Soong Teng',
          created_datetime_utc: '21-03-2023 17:58',
          action: 'Internal Processing',
          description: '',
          data: [
            {
              field: 'ATA_CARNET_APPROVAL_NO',
              value: '001 | Invalid City',
            },
            {
              field: 'ATA_CARNET_APPROVAL_DATE',
              value: '002 | Invalid Date', // get from Wei Chun
            },
          ],
        },
        {
          title: 'SEND_ACKNOWLEDGEMENT_MESSAGE',
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
              field: 'Customs Status Name',
              value: 'ACCEPTED',
            },
            {
              field: 'Status Code',
              value: '001-Registered',
            },
          ],
        },
        {
          title: 'STATUS_INSPECTION_IN_PROGRESS',
          created_by_name: 'Soong Teng',
          created_datetime_utc: '21-03-2023 17:58',
          action: 'Pickup Task',
          description: '',
          data: [],
        },
        {
          title: 'SEND_STATUS_UPDATE_MESSAGE',
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
              field: 'Customs Status Name',
              value: 'IN PROGRESS',
            },
            {
              field: 'Status Code',
              value: '003-Updated',
            },
          ],
        },
        {
          title: 'STATUS_INSPECTION_COMPLETED',
          created_by_name: 'Soong Teng',
          created_datetime_utc: '21-03-2023 17:58',
          action: 'Inspect',
          description: '',
          data: [
            {
              field: 'Inspection Report No.',
              value: '12345',
            },
            {
              field: 'Inspection Start Date and Time',
              value: '2023-03-31 14:05',
            },
            {
              field: 'Inspection End Date and Time',
              value: '2023-04-30 14:05',
            },
            {
              field: 'Quantity Landed',
              value: '3',
            },
            {
              field: 'Release Weight',
              value: '3 kg',
            },
            {
              field: 'Remarks',
              value: 'This is remarks',
            },
            {
              field: 'Inspection Report File Name',
              value: 'Inspection Report',
            },
          ],
        },
        {
          title: 'STATUS_APPROVED',
          created_by_name: 'Soong Teng',
          created_datetime_utc: '21-03-2023 17:58',
          action: 'Approve',
          description: '',
          data: [
            {
              field: 'Approval No.',
              value: '12345',
            },
            {
              field: 'Approval Date',
              value: '2023-03-31',
            },
          ],
        },
        {
          title: 'SEND_STATUS_UPDATE_MESSAGE',
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
              field: 'Customs Status Name',
              value: 'IN PROGRESS',
            },
            {
              field: 'Status Code',
              value: '003-Updated',
            },
          ],
        },
        {
          title: 'STATUS_COMPLETED',
          created_by_name: 'Soong Teng',
          created_datetime_utc: '21-03-2023 17:58',
          action: 'Approve',
          description: '',
          data: [],
        },
        {
          title: 'SEND_STATUS_UPDATE_MESSAGE',
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
              field: 'Customs Status Name',
              value: 'IN PROGRESS',
            },
            {
              field: 'Status Code',
              value: '003-Updated',
            },
          ],
        },
        {
          title: 'STATUS_CLOSED',
          created_by_name: 'Soong Teng',
          created_datetime_utc: '21-03-2023 17:58',
          action: 'Close',
          description: '',
          data: [
            {
              field: 'Re-Export ATA Carnet Declaration No.',
              value: '12345',
            },
            {
              field: 'Re-Export ATA Carnet Declaration Date',
              value: '2023-04-10',
            },
            {
              field: 'Re-Export ATA Carnet Status',
              value: 'SUBMITTED',
            },
          ],
        },
        {
          title: 'SEND_STATUS_UPDATE_MESSAGE',
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
              field: 'Customs Status Name',
              value: 'IN PROGRESS',
            },
            {
              field: 'Status Code',
              value: '003-Updated',
            },
          ],
        },
      ],
      surety_registration: [
        {
          title: 'STATUS_DRAFT',
          created_by_name: 'Soong Teng',
          created_datetime_utc: '21-03-2023 17:58',
          action: 'Create',
          description: '',
          data: [],
        },
        {
          title: 'STATUS_DELETED',
          created_by_name: 'Soong Teng',
          created_datetime_utc: '21-03-2023 17:58',
          action: 'Delete',
          description: '',
          data: [],
        },
        {
          title: 'STATUS_DRAFT',
          created_by_name: 'Soong Teng',
          created_datetime_utc: '21-03-2023 17:58',
          action: 'Update',
          description: '',
          data: [
            {
              field: 'Country',
              value: 'changed from SG to MY',
            },
          ],
        },
        {
          title: 'STATUS_RETURN_FOR_CORRECTION',
          created_by_name: 'Soong Teng',
          created_datetime_utc: '21-03-2023 17:58',
          action: 'Update',
          description: '',
          data: [
            {
              field: 'Surety Amount',
              value: 'changed from 2000 to 1000',
            },
          ],
        },
        {
          title: 'STATUS_SUBMITTED',
          created_by_name: 'Soong Teng',
          created_datetime_utc: '21-03-2023 17:58',
          action: 'Submit',
          description: '',
          data: [
            {
              field: 'Notification email sent to Surety Owner',
              value: 'surety_owner@email.com',
            },
          ],
        },
        {
          title: 'STATUS_RESUBMITTED',
          created_by_name: 'Soong Teng',
          created_datetime_utc: '21-03-2023 17:58',
          action: 'Submit',
          description: '',
          data: [
            {
              field: 'State',
              value: 'changed from Johor to Selangor',
            },
          ],
        },
        {
          title: 'STATUS_RESUBMITTED',
          created_by_name: 'Soong Teng',
          created_datetime_utc: '21-03-2023 17:58',
          action: 'Pickup Task',
          description: '',
          data: [],
        },
        {
          title: 'STATUS_APPROVED',
          created_by_name: 'Soong Teng',
          created_datetime_utc: '21-03-2023 17:58',
          action: 'Approve',
          description: '',
          data: [
            {
              field: 'Surety No.',
              value: '123456',
            },
            {
              field: 'Surety Status',
              value: 'PENDING ACTIVATION',
            },
            {
              field: 'Surety Effective Date',
              value: '2023-04-01',
            },
            {
              field: 'Surety Expiry Date',
              value: '2023-06-01',
            },
            {
              field: 'Surety Renewal Date',
              value: '2023-05-01',
            },
            {
              field: 'Remarks',
              value: 'This is remarks.',
            },
            {
              field: 'Notification email sent to Surety Owner',
              value: 'surety_owner@email.com',
            },
          ],
        },
        {
          title: 'STATUS_RETURN_FOR_CORRECTION',
          created_by_name: 'Soong Teng',
          created_datetime_utc: '21-03-2023 17:58',
          action: 'Return for Correction',
          description: '',
          data: [
            {
              field: 'Remarks',
              value: 'This is remarks.',
            },
            {
              field: 'Assigned To',
              value: 'Lim Xiao Ming',
            },
          ],
        },
      ],
      third_party_bank_guarantee_application: [
        {
          title: 'STATUS_DRAFT',
          created_by_name: 'Soong Teng',
          created_datetime_utc: '21-03-2023 17:58',
          action: 'Create',
          description: '',
          data: [],
        },
        {
          title: 'STATUS_DELETED',
          created_by_name: 'Soong Teng',
          created_datetime_utc: '21-03-2023 17:58',
          action: 'Delete',
          description: '',
          data: [],
        },
        {
          title: 'STATUS_DRAFT',
          created_by_name: 'Soong Teng',
          created_datetime_utc: '21-03-2023 17:58',
          action: 'Update',
          description: '',
          data: [
            {
              field: 'Country',
              value: 'changed from SG to MY',
            },
          ],
        },
        {
          title: 'STATUS_RETURN_FOR_CORRECTION',
          created_by_name: 'Soong Teng',
          created_datetime_utc: '21-03-2023 17:58',
          action: 'Update',
          description: '',
          data: [
            {
              field: 'Surety Amount',
              value: 'changed from 2000 to 1000',
            },
          ],
        },
        {
          title: 'STATUS_SUBMITTED',
          created_by_name: 'Soong Teng',
          created_datetime_utc: '21-03-2023 17:58',
          action: 'Submit',
          description: '',
          data: [
            {
              field: 'Notification email sent to Surety Owner',
              value: 'surety_owner@email.com',
            },
          ],
        },
        {
          title: 'STATUS_RESUBMITTED',
          created_by_name: 'Soong Teng',
          created_datetime_utc: '21-03-2023 17:58',
          action: 'Submit',
          description: '',
          data: [
            {
              field: 'State',
              value: 'changed from Johor to Selangor',
            },
          ],
        },
        {
          title: 'STATUS_RESUBMITTED',
          created_by_name: 'Soong Teng',
          created_datetime_utc: '21-03-2023 17:58',
          action: 'Pickup Task',
          description: '',
          data: [],
        },
        {
          title: 'STATUS_RECOMMENDED',
          created_by_name: 'Soong Teng',
          created_datetime_utc: '21-03-2023 17:58',
          action: 'Submit',
          description: '',
          data: [
            {
              field: 'Remarks',
              value: 'This is remarks.',
            },
          ],
        },
        {
          title: 'STATUS_NOT_RECOMMENDED',
          created_by_name: 'Soong Teng',
          created_datetime_utc: '21-03-2023 17:58',
          action: 'Submit',
          description: '',
          data: [
            {
              field: 'Reason',
              value: '["Incompleted Documentation", "Falsified document"]',
            },
            {
              field: 'Remarks',
              value: 'This is remarks.',
            },
          ],
        },
        {
          title: 'STATUS_RETURN_FOR_CORRECTION',
          created_by_name: 'Soong Teng',
          created_datetime_utc: '21-03-2023 17:58',
          action: 'Return for Correction',
          description: '',
          data: [
            {
              field: 'Remarks',
              value: 'This is remarks',
            },
            {
              field: 'Assigned To',
              value: 'Lim Xiao Ming',
            },
          ],
        },
        {
          title: 'STATUS_RETURN_FOR_CORRECTION',
          created_by_name: 'Soong Teng',
          created_datetime_utc: '21-03-2023 17:58',
          action: 'Pickup Task',
          description: '',
          data: [],
        },
        {
          title: 'STATUS_APPROVED',
          created_by_name: 'Soong Teng',
          created_datetime_utc: '21-03-2023 17:58',
          action: 'Approve',
          description: '',
          data: [
            {
              field: 'Remarks',
              value: 'This is remarks',
            },
            {
              field: 'Notification email sent to Third Party Business User',
              value: 'third_party_business_user@email.com',
            },
            {
              field: 'Notification email carbon copied to Surety Owner',
              value: 'surety_owner@email.com',
            },
          ],
        },
        {
          title: 'STATUS_REJECTED',
          created_by_name: 'Soong Teng',
          created_datetime_utc: '21-03-2023 17:58',
          action: 'Reject',
          description: '',
          data: [
            {
              field: 'Reason',
              value: '["Incompleted Documentation", "Falsified document"]',
            },
            {
              field: 'Remarks',
              value: 'This is remarks.',
            },
            {
              field: 'Notification email sent to Third Party Business User',
              value: 'third_party_business_user@email.com',
            },
            {
              field: 'Notification email carbon copied to Surety Owner',
              value: 'surety_owner@email.com',
            },
          ],
        },
        {
          title: 'STATUS_COMPLETED',
          created_by_name: 'Soong Teng',
          created_datetime_utc: '21-03-2023 17:58',
          action: 'Submit',
          description: '',
          data: [
            {
              field: '',
              value: 'Minutes of meeting uploaded',
            },
          ],
        },
      ],
      surety_encashment: [
        {
          title: 'STATUS_SUBMITTED',
          created_by_name: 'Soong Teng',
          created_datetime_utc: '21-03-2023 17:58',
          action: 'Create',
          description: '',
          data: [],
        },
        {
          title: 'STATUS_SUBMITTED',
          created_by_name: 'Soong Teng',
          created_datetime_utc: '21-03-2023 17:58',
          action: 'Pickup Task',
          description: '',
          data: [],
        },
        {
          title: 'STATUS_AWAITING_ACCEPTANCE',
          created_by_name: 'Soong Teng',
          created_datetime_utc: '21-03-2023 17:58',
          action: 'Update',
          description: '',
          data: [
            {
              field: 'Surety Status',
              value: 'ENCASHMENT IN PROGRESS',
            },
            {
              field: 'Encashment confirmation email sent to Surety Owner',
              value: 'surety_owner@email.com',
            },
          ],
        },
        {
          title: 'STATUS_ACCEPTED',
          created_by_name: 'Soong Teng',
          created_datetime_utc: '21-03-2023 17:58',
          action: 'Update',
          description: '',
          data: [
            {
              field: 'Response Date',
              value: '21-03-2023',
            },
          ],
        },
        {
          title: 'STATUS_SUBMITTED',
          created_by_name: 'Soong Teng',
          created_datetime_utc: '21-03-2023 17:58',
          action: 'Submit',
          description: '',
          data: [
            {
              field: 'Notification email sent to Surety Owner',
              value: 'surety_owner@email.com',
            },
          ],
        },
        {
          title: 'STATUS_RESUBMITTED',
          created_by_name: 'Soong Teng',
          created_datetime_utc: '21-03-2023 17:58',
          action: 'Submit',
          description: '',
          data: [
            {
              field: 'State',
              value: 'changed from Johor to Selangor',
            },
          ],
        },
        {
          title: 'STATUS_RESUBMITTED',
          created_by_name: 'Soong Teng',
          created_datetime_utc: '21-03-2023 17:58',
          action: 'Pickup Task',
          description: '',
          data: [],
        },
        {
          title: 'STATUS_APPROVED',
          created_by_name: 'Soong Teng',
          created_datetime_utc: '21-03-2023 17:58',
          action: 'Approve',
          description: '',
          data: [
            {
              field: 'Surety No.',
              value: '123456',
            },
            {
              field: 'Surety Status',
              value: 'PENDING ACTIVATION',
            },
            {
              field: 'Surety Effective Date',
              value: '2023-04-01',
            },
            {
              field: 'Surety Expiry Date',
              value: '2023-06-01',
            },
            {
              field: 'Surety Renewal Date',
              value: '2023-05-01',
            },
            {
              field: 'Remarks',
              value: 'This is remarks.',
            },
            {
              field: 'Notification email sent to Surety Owner',
              value: 'surety_owner@email.com',
            },
          ],
        },
        {
          title: 'STATUS_RETURN_FOR_CORRECTION',
          created_by_name: 'Soong Teng',
          created_datetime_utc: '21-03-2023 17:58',
          action: 'Return for Correction',
          description: '',
          data: [
            {
              field: 'Remarks',
              value: 'This is remarks.',
            },
            {
              field: 'Assigned To',
              value: 'Lim Xiao Ming',
            },
          ],
        },
        {
          title: 'STATUS_RETURN_FOR_CORRECTION',
          created_by_name: 'Soong Teng',
          created_datetime_utc: '21-03-2023 17:58',
          action: 'Pickup Task',
          description: '',
          data: [],
        },
        {
          title: 'STATUS_APPROVED',
          created_by_name: 'Soong Teng',
          created_datetime_utc: '21-03-2023 17:58',
          action: 'Approve',
          description: '',
          data: [
            {
              field: 'Remarks',
              value: 'This is remarks.',
            },
            {
              field: 'Notification email sent to Third Pary Business User',
              value: 'third_party_business_user@email.com',
            },
            {
              field: 'Notification email carbon copied to Surety Owner',
              value: 'surety_owner@email.com',
            },
          ],
        },
        {
          title: 'STATUS_REJECTED',
          created_by_name: 'Soong Teng',
          created_datetime_utc: '21-03-2023 17:58',
          action: 'Reject',
          description: '',
          data: [
            {
              field: 'Reason',
              value: '["Incompleted Documentation", "Falsified document"]',
            },
            {
              field: 'Remarks',
              value: 'This is remarks.',
            },
            {
              field: 'Notification email sent to Third Pary Business User',
              value: 'third_party_business_user@email.com',
            },
            {
              field: 'Notification email carbon copied to Surety Owner',
              value: 'surety_owner@email.com',
            },
          ],
        },
        [
          {
            title: 'STATUS_COMPLETED',
            created_by_name: 'Soong Teng',
            created_datetime_utc: '21-03-2023 17:58',
            action: 'Submit',
            description: '',
            data: [],
          },
          {
            title: 'Minutes of meeting uploaded',
            created_by_name: 'Soong Teng',
            created_datetime_utc: '21-03-2023 17:58',
            action: 'Submit',
            description: '',
            data: [],
          },
        ],
      ],
    };
  },
};
</script>
