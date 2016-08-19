function traverseTCPStates(eventList){
  var state = "CLOSED";  // initial state, always
  let trans = gettrans();
  for (let i = 0; i < eventList.length; i++)
  {
    if (!(eventList[i] in trans[state]))
      return "ERROR";
    state = trans[state][eventList[i]];
  }
  return state;
}

function gettrans()
{
  let trans = {};
  trans['CLOSED'] = {};
  trans['CLOSED']['APP_PASSIVE_OPEN'] = 'LISTEN';
  trans['CLOSED']['APP_ACTIVE_OPEN'] = 'SYN_SENT';
  trans['LISTEN'] = {};
  trans['LISTEN']['RCV_SYN'] = 'SYN_RCVD';
  trans['LISTEN']['APP_SEND'] = 'SYN_SENT';
  trans['LISTEN']['APP_CLOSE'] = 'CLOSED';
  trans['SYN_RCVD'] = {};
  trans['SYN_RCVD']['APP_CLOSE'] = 'FIN_WAIT_1';
  trans['SYN_RCVD']['RCV_ACK'] = 'ESTABLISHED';
  trans['SYN_SENT'] = {};
  trans['SYN_SENT']['RCV_SYN'] = 'SYN_RCVD';
  trans['SYN_SENT']['RCV_SYN_ACK'] = 'ESTABLISHED';
  trans['SYN_SENT']['APP_CLOSE'] = 'CLOSED';
  trans['ESTABLISHED'] = {};
  trans['ESTABLISHED']['APP_CLOSE'] = 'FIN_WAIT_1';
  trans['ESTABLISHED']['RCV_FIN'] = 'CLOSE_WAIT';
  trans['FIN_WAIT_1'] = {};
  trans['FIN_WAIT_1']['RCV_FIN'] = 'CLOSING';
  trans['FIN_WAIT_1']['RCV_FIN_ACK'] = 'TIME_WAIT';
  trans['FIN_WAIT_1']['RCV_ACK'] = 'FIN_WAIT_2';
  trans['CLOSING'] = {};
  trans['CLOSING']['RCV_ACK'] = 'TIME_WAIT';
  trans['FIN_WAIT_2'] = {};
  trans['FIN_WAIT_2']['RCV_FIN'] = 'TIME_WAIT';
  trans['TIME_WAIT'] = {};
  trans['TIME_WAIT']['APP_TIMEOUT'] = 'CLOSED';
  trans['CLOSE_WAIT'] = {};
  trans['CLOSE_WAIT']['APP_CLOSE'] = 'LAST_ACK';
  trans['LAST_ACK'] = {};
  trans['LAST_ACK']['RCV_ACK'] = 'CLOSED';
  return trans;
}
