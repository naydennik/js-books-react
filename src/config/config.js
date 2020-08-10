const kinveyAppKey = "kid_r1XMviLZD";
const kinveyAppSecret = "674aad3ed5c241759422ada610ca348d";
const adminId = "5f2ee32848becb001b01c579";
const authString = btoa(`${kinveyAppKey}:${kinveyAppSecret}`);

export default {
  kinveyAppKey,
  kinveyAppSecret,
  adminId,
  authString,
};
