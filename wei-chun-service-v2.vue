<template>
  <div>
    <table style="border-collapse: collapse; width: 97%; margin: 20px">
      <tr>
        <th>Date and Time</th>
        <th>Activity</th>
        <th>Performed By</th>
        <th>Details</th>
      </tr>
      <tbody v-for="(log, idx) in logs" :key="idx">
        <tr>
          <td>{{ log.created_datetime_utc }}</td>
          <td>{{ t(log.action) }}</td>
          <td>{{ log.created_by_name }}</td>
          <td style="text-align: left; padding: 20px" v-if="format == 'bullet'">
            {{ t(log.title) }}<br />
            <ul v-for="(detail, index) in log.data" :key="index">
              <li v-if="Array.isArray(detail.value)">
                <span v-for="(item, itemIdx) in detail.value">
                  <!-- <span>{{ t(item) + ' ' }}</span> -->
                  <span v-html="t(item)"></span>&nbsp
                </span>
              </li>
              <li v-else>
                {{ t(detail.field) }}
                {{ detail.field && detail.value ? ':' : '' }}
                <span v-html="detail.value" />
              </li>
            </ul>
          </td>
          <td style="text-align: left; padding: 20px" v-if="format == 'dash'">
            <div v-for="(detail, index) in log.data" :key="index">
              {{ t(detail.title) }}<br />
              <div v-for="(data, index) in detail.data" :key="index">
                <div v-if="Array.isArray(data.value)">
                  -
                  <span v-for="(item, itemIdx) in data.value">
                    <!-- <span>{{ t(item) + ' ' }}</span> -->
                    <span v-html="t(item)"></span>&nbsp
                  </span>
                </div>
                <div v-else>
                  - {{ t(data.field) }}{{ data.field && data.value ? ':' : '' }}
                  <template v-if="data.value">
                    <span v-html="data.value" />
                  </template>
                </div>
              </div>
              <br />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import logging from './logging.vue';
export default {
  props: {
    translate: {
      type: Boolean,
      default: () => {
        return false;
      },
    },
    logs: {
      type: Array,
      default: () => {
        return [];
      },
    },
    format: {
      type: String,
      default: () => {
        return 'bullet';
      },
    },
  },
  components: {
    logging,
  },
  data() {
    return {
      translationEn: {
        CREATED_DRAFT_APPLICATION: 'Create Draft Application',
        DELETED_DRAFT_APPLICATION: 'Deleted Draft Application',
        SAVE_DRAFT_APPLICATION: 'Save Draft Application',
        SUBMITTED_APPLICATION: 'Submitted Application',
        NOTIFICATION_EMAIL_SENT_TO_OWNER: 'Notification email sent to owner',
        RESUBMIT_APPLICATION: 'Resubmit Application',
        STATUS: 'Status',
        DRAFT: 'Draft',
        DELETED: 'Deleted',
        SUBMITTED: 'Submitted',
        PICK_UP_APPLICATION: 'Pick Up Application',
        WAREHOUSE_STATUS_REGISTERED: 'Status : REGISTERED',
        WAREHOUSE_STATUS_RECEIVED: 'Status : RECEIVED',
        RECEIVED_APPLICATION: 'Received Application',
        WAREHOUSE_APPROVAL_NO: 'Warehouse Approval No',
        WAREHOUSE_APPROVAL_DATE: 'Warehouse Approval Date',
        ACKNOWLEDGEMENT: 'Acknowledgement',
        WAREHOUSE_INVALID: 'Status : Invalid',
        STATUS_REGISTERED: 'Status: REGISTERED',
        STATUS_REJECTED: 'Status: REJECTED',
        RECEIVED_WAREHOUSE_SUBMIT: 'Received Warehouse Submit',
        SEND_ACKNOWLEDGEMENT_RESPONSE_MESSAGE:
          'Send Acknowledgement Response Message',
        SEND_ACKNOWLEDGED_WAREHOUSE_RECEIVE_GOOD_RESPONSE:
          'Send Acknowledged Warehouse Receive Good Response',
        RECEIVED_WAREHOUSE_RECEIVE_GOOD_SUBMIT:
          'Received Warehouse Receive Good Submit',
        SEND_ACKNOWLEDGED_WAREHOUSE_ADJUSTMENT_RESPONSE:
          'Send Acknowledged Warehouse Adjustment Response',
        RECEIVED_WAREHOUSE_ADJUSTMENT_SUBMIT:
          'Received Warehouse Adjustment Submit',
        AIR_JOURNEY_SUBMIT: 'Air Journey Submit',
        STATUS_RECEIVED: 'Status: RECEIVED',
        STATUS_CANCELLED: 'Status: CANCELLED',
        JOURNEY_APPROVAL_NO: 'Journey Approval Number',
        JOURNEY_APPROVAL_DATE: 'Journey Approval Date',
        SEND_ACKNOWLEDGEMENT_MESSAGE: 'Send Acknowledgement Message',
        SEND_BROADCAST_MESSAGE: 'Send Broadcast Message',
        STATUS_PROCESSED: 'Status: Processed',
        DECLARATION_NO: 'Declaration No',
        DECLARATION_DATE: 'Declaration Date',
        STATUS_INVALID: 'Status: Invalid',
        RECEIVED_SUBMISSION_MESSAGE: 'Received Submission Message',
        RECEIVED_ORIGINAL_ENDORSEMENT_LOCAL_MANUFACTURED_VEHICLE_SUBMISSION:
          'Received Original Endorsement Local Manufactured Vehicle Submission',
        SEND_ACKNOWLEDGED_ORIGINAL_ENDORSEMENT_LOCAL_MANUFACTURED_VEHICLE_SUBMISSION:
          'Send Acknowledged Original Endorsement Local Manufactured Vehicle Submission',
        CHANGE_FROM: 'Change From',
        CARGO_APPROVAL_NO: 'Cargo Approval No',
        CARGO_APPROVAL_DATE: 'Cargo Approval Date',
        EXCISE_APPROVAL_NO: 'Excise Approval No',
        EXCISE_APPROVAL_DATE: 'Excise Approval Date',
        STATUS_INSPECTION_IN_PROGRESS: 'Status: INSPECTION IN PROGRESS',
        ATA_CARNET_APPROVAL_NO: 'Ata Carnet Approval No.',
        ATA_CARNET_APPROVAL_DATE: 'Ata Carnet Approval Date',
        SEND_STATUS_UPDATE_MESSAGE: 'Send Status Update Message',
        STATUS_INSPECTION_COMPLETED: 'Status: INSPECTION COMPLETED',
        STATUS_APPROVED: 'Status: APPROVED',
        STATUS_COMPLETED: 'Status: COMPLETED',
        STATUS_CLOSED: 'Status: CLOSED',
        STATUS_DRAFT: 'Status: DRAFT',
        STATUS_DELETED: 'Status: DELETED',
        STATUS_RETURN_FOR_CORRECTION: 'Status: RETURN FOR CORRECTION',
        STATUS_SUBMITTED: 'Status: SUBMITTED',
        STATUS_RESUBMITTED: 'Status: RESUBMITTED',
        STATUS_RECOMMENDED: 'Status: RECOMMENDED',
        STATUS_NOT_RECOMMENDED: 'Status: NOT RECOMMENDED',
        COUNTRY: 'Country',
        UPDATE_INVALID: ': 002 | Invalid',
        UPDATE_EMPTY: ': 001 | Empty',
        INCOMING_API: 'Incoming API',
        INTERNAL_PROCESSING: 'Internal Processing',
        OUTGOING_API: 'Outgoing API',
        sp_code: 'Party Code',
        message_type: 'Message Type',
        batch_id: 'Batch Identification',
        customs_reference_no: 'Customs Reference No',
        k11_received_submission: 'Received Submission Message',
        k11_beginning_message_status_registered: 'Status: Registered',
        k11_beginning_message_status_updated: 'Status: Update',
        k11_beginning_message_status_received: 'Status: Received',
      },
      translationChi: {
        CREATED_DRAFT_APPLICATION: '创建 Draft Application',
        DELETED_DRAFT_APPLICATION: '删除 Draft Application',
        SAVE_DRAFT_APPLICATION: '储存 Draft Application',
        SUBMITTED_APPLICATION: '提交 Application',
        RESUBMIT_APPLICATION: '重新提交 Application',
        NOTIFICATION_EMAIL_SENT_TO_OWNER: '通知邮件已发送给用户',
        STATUS: '状况',
        DRAFT: '草稿',
        DRAFT: '删除',
        SUBMITTED: '提交',
        PICK_UP_APPLICATION: 'Pick Up Application',
        WAREHOUSE_STATUS_REGISTERED: 'Status : REGISTERED',
        WAREHOUSE_STATUS_RECEIVED: 'Status : RECEIVED',
        RECEIVED_APPLICATION: 'Received Application',
        WAREHOUSE_APPROVAL_NO: 'Warehouse Approval No :',
        WAREHOUSE_APPROVAL_DATE: 'Warehouse Approval Date',
        ACKNOWLEDGEMENT: 'Acknowledgement',
        WAREHOUSE_INVALID: 'Status : Invalid',
        STATUS_CODE_001: '状态: 已登录',
        STATUS_CODE_002: '状态: 已拒绝',
        RECEIVED_WAREHOUSE_SUBMIT: '收到仓库申请',
        SEND_ACKNOWLEDGEMENT_RESPONSE_MESSAGE: '发送确认反应信息',
        SEND_ACKNOWLEDGED_WAREHOUSE_RECEIVE_GOOD_RESPONSE:
          '发送确认仓库物件接收反应',
        RECEIVED_WAREHOUSE_RECEIVE_GOOD_SUBMIT: '收到仓库物件提交申请',
        SEND_ACKNOWLEDGED_WAREHOUSE_ADJUSTMENT_RESPONSE:
          '发送确认仓库调整反应信息',
        RECEIVED_WAREHOUSE_ADJUSTMENT_SUBMIT: '收到确认仓库调整提交信息',
        AIR_JOURNEY_SUBMIT: '提交 Air Journey',
        STATUS_RECEIVED: 'Status: 已收到',
        STATUS_CANCELLED: 'Status: 已取消',
        JOURNEY_APPROVAL_NO: 'Journey 批准文号',
        JOURNEY_APPROVAL_DATE: 'Journey 批准日期',
        SEND_ACKNOWLEDGEMENT_MESSAGE: '发送确认信息',
        SEND_BROADCAST_MESSAGE: '发送广播信息',
        STATUS_PROCESSED: 'Status: 已处理',
        DECLARATION_NO: '申报编号',
        DECLARATION_DATE: '申报日期',
        STATUS_INVALID: 'Status: 无效',
        RECEIVED_SUBMISSION_MESSAGE: '收到提交信息',
        RECEIVED_ORIGINAL_ENDORSEMENT_LOCAL_MANUFACTURED_VEHICLE_SUBMISSION:
          '收到原始认可本地制造的车辆提交',
        SEND_ACKNOWLEDGED_ORIGINAL_ENDORSEMENT_LOCAL_MANUFACTURED_VEHICLE_SUBMISSION:
          'Send Acknowledged Original Endorsement Local Manufactured Vehicle Submission',
        CARGO_APPROVAL_NO: 'Cargo Approval No',
        CARGO_APPROVAL_DATE: 'Cargo Approval Date',
        EXCISE_APPROVAL_NO: 'Excise Approval No',
        EXCISE_APPROVAL_DATE: 'Excise Approval Date',
        STATUS_INSPECTION_IN_PROGRESS: 'Status: INSPECTION IN PROGRESS',
        ATA_CARNET_APPROVAL_NO: 'Ata Carnet Approval No.',
        ATA_CARNET_APPROVAL_DATE: 'Ata Carnet Approval Date',
        SEND_STATUS_UPDATE_MESSAGE: 'Send Status Update Message',
        STATUS_INSPECTION_COMPLETED: 'Status: INSPECTION COMPLETED',
        STATUS_APPROVED: 'Status: APPROVED',
        STATUS_COMPLETED: 'Status: COMPLETED',
        STATUS_CLOSED: 'Status: CLOSED',
      },
      logs1: [
        {
          title: 'CREATED_DRAFT_APPLICATION',
          created_by_name: 'Li',
          action: '',
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
    };
  },
  methods: {
    t(value) {
      if (this.translate)
        return this.translationChi[value]
          ? this.translationChi[value]
          : 'translated';
      return this.translationEn[value] ? this.translationEn[value] : value;
    },
  },
};
</script>

<style>
th {
  color: grey;
  font-family: monospace;
  border: 1px solid lightgrey;
  padding: 8px;
}
td {
  color: grey;
  font-family: monospace;
  text-align: center;
  height: 100px;
  border: 1px solid lightgrey;
  padding: 8px;
}
</style>
