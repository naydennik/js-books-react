const kinveyAppKey = "kid_r1XMviLZD";
const kinveyAppSecret = "674aad3ed5c241759422ada610ca348d";
const adminId = "5f2927fc1fd51a0016753461";
const authString = btoa(`${kinveyAppKey}:${kinveyAppSecret}`);

export default {
  kinveyAppKey,
  kinveyAppSecret,
  adminId,
  authString,
};
