const axios = require('axios');

const url = 'http://10.1.4.42:8080/jasperserver/rest_v2/reports/reports/SRB/Accounts/cancellAcc.pdf?CL_TYPE=პირადი&ID=GE07BT0360000209750004GEL&CUST_NO=120322';
const headers = {
  Authorization: 'Basic amFzcGVyYWRtaW46amFzcGVyYWRtaW4=',
};

axios.get(url, { headers })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
