<template>
  <div>
    <table style="border-collapse: collapse; width: 97%; margin: 20px">
      <tr>
        <th>Date and Time</th>
        <th>Activity</th>
        <th>Performed By</th>
        <th>Details 123</th>
      </tr>
      <tbody>
        <!--// [[{}, {}], [{}]] -->
        <tr v-for="(log, i) in logs" :key="i">
          <td>{{ log[0].created_datetime_utc }}</td>
          <td>{{ log[0].created_by_name }}</td>
          <td>{{ log[0].created_by_name }}</td>
          <td style="text-align: left">
            <div v-for="(j, idx) in log">
              <div>{{ j.title }}</div>
              <ul v-for="(detail, index) in j.data" :key="index">
                <li v-if="Array.isArray(detail.value)">
                  <span v-for="(item, itemIdx) in detail.value">
                    <span v-html="item"></span>&nbsp
                  </span>
                </li>
                <li v-else>
                  {{ detail.field }}
                  {{ detail.field && detail.value ? ':' : '' }}
                  <span v-html="detail.value" />
                </li>
              </ul>
            </div>
          </td>
          <!--// {} -->
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    logs: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
};
</script>
